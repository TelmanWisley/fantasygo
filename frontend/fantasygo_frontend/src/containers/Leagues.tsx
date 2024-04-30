import { ApolloError, gql, useMutation } from "@apollo/client";
import { LeagueView } from "components/views";
import { PATH } from "consts";
import { MainContext } from "context";
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ILeague, IOption } from "types";
import { client, shuffleArray } from "utils";

export const LeagueContainer: React.FC = () => {
  const GET_LEAGUE_RESOLVER = gql`
    mutation LeagueResolver(
      $leagueType: String!
      $page: Float
      $limit: Float
      $sort: Boolean
      $team: String
    ) {
      leagueMutation(
        leagueType: $leagueType
        page: $page
        limit: $limit
        sort: $sort
        team: $team
      ) {
        displayName
        firstName
        secondName
        team
        totalPoints
      }
    }
  `;

  const GET_TEAM_RESOLVER = gql`
    mutation LeagueResolver($leagueType: String!) {
      teamMutation(leagueType: $leagueType)
    }
  `;

  const [fetchLeague] = useMutation(GET_LEAGUE_RESOLVER);
  const [fetchTeam] = useMutation(GET_TEAM_RESOLVER);
  const {
    leagues,
    handleLeagues,
    leagueType,
    leagueSelected,
    handleLeagueSelected,
    teams,
    handleTeams,
    teamSelected,
    handleTeamSelected,
    sorts,
    sortSelected,
    handleSortSelected,
    load,
    handleLoad,
    page,
    handlePage,
  } = useContext(MainContext);
  
  const navigate = useNavigate();

  const resetLeaguesAndPage = useCallback(() => {
    handleLeagues([]);
    handlePage(1);
    handleLoad(true);
  }, []);

  const getTeamData = useCallback(
    async (leagueType: string): Promise<void> => {
      try {
        const { data } = await fetchTeam({ variables: { leagueType } });
        handleTeams([...data.teamMutation]);
      } catch (err) {
        console.log(err);
      }
    },
    [fetchTeam, handleTeams]
  );

  const getLeagueData = useCallback(
    async (
      leagueData: ILeague[],
      leagueType: string,
      page: number,
      sortLabel: string,
      team: string
    ): Promise<void> => {
      const sort:boolean = sortLabel === "H" ? true : false;
      try {
        const { data } = await fetchLeague({
          variables: { leagueType, page, sort, team },
          client,
        });
        if (data.leagueMutation.length === 0) handleLoad(false);
        handleLeagues([...leagueData, ...data.leagueMutation]);
        handlePage(page + 1);
      } catch (err) {
        if (err instanceof ApolloError) {
          toast.error(err.message);
          if (err.message === "Token is invalid") navigate(PATH.DASHBOARD);
        }
      }
    },
    [fetchLeague]
  );

  const leagueChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      resetLeaguesAndPage();
      const changeData = e.target.value;
      getLeagueData(leagues, changeData, 1, sortSelected, teamSelected);
      getTeamData(changeData);
      handleLeagueSelected(changeData);
    },
    [resetLeaguesAndPage, getLeagueData, sortSelected]
  );

  const scoreChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      resetLeaguesAndPage();
      const changeData = e.target.value;
      getLeagueData(leagues, leagueSelected, 1, changeData, teamSelected);
      handleSortSelected(changeData);
    },
    [resetLeaguesAndPage, getLeagueData, leagueSelected]
  );

  const teamChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      resetLeaguesAndPage();
      const changeData = e.target.value;
      handleTeamSelected(changeData);
      getLeagueData(leagues, leagueSelected, 1, sortSelected, changeData);
    },
    [resetLeaguesAndPage, getLeagueData]
  );

  const shuffleClick = useCallback(
    (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      handleLeagues(shuffleArray(leagues));
    },
    []
  );

  useEffect(() => {
    if (leagues.length === 0) {
      getLeagueData(leagues, leagueSelected, page, sortSelected, teamSelected);
      getTeamData(leagueSelected);
    }
  }, []);

  const teamOptions: IOption[] = useMemo(
    () => [
      { label: "Select All", value: "" },
      ...teams.map((team) => {
        return { label: team, value: team };
      }),
    ],
    [teams]
  );

  return (
    <LeagueView
      leagues={leagues}
      fetch={() => getLeagueData(leagues, leagueSelected, page, sortSelected, teamSelected)}
      league={leagueSelected}
      leagueChange={leagueChange}
      leagueOptions={leagueType}
      score={sortSelected}
      scoreChange={scoreChange}
      scoreOptions={sorts}
      shuffleClick={shuffleClick}
      team={teamSelected}
      teamOptions={teamOptions}
      teamChange={teamChange}
      load={load}
    />
  );
};
