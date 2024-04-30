import React, { useCallback, useMemo, useState } from "react";
import { ILeague, IOption } from "types";

interface MainProviderProps {
  children: React.ReactNode;
}

interface MainContextProps {
  phoneNumber: string;
  updatePhoneNumber: (newValue: string) => void;
  leagues: ILeague[];
  handleLeagues: (leagueData: ILeague[]) => void;
  leagueType: IOption[];
  leagueSelected: string;
  handleLeagueSelected: (data: string) => void;
  sorts: IOption[];
  sortSelected: string;
  handleSortSelected: (data: string) => void;
  teams: string[];
  handleTeams: (teamData: string[]) => void;
  teamSelected: string;
  handleTeamSelected: (data: string) => void;
  load: boolean;
  handleLoad: (loadData: boolean) => void;
  page: number;
  handlePage: (pageData: number) => void;
}

export const MainContext = React.createContext<MainContextProps>({
  phoneNumber: "",
  updatePhoneNumber: () => {},
  leagues: [],
  handleLeagues: ([]) => {},
  leagueType: [],
  leagueSelected: "champion",
  handleLeagueSelected: (_data: string) => {},
  sorts: [],
  sortSelected: "",
  handleSortSelected: (_data: string) => {},
  teams: [],
  handleTeams: ([]) => {},
  teamSelected: "",
  handleTeamSelected: (_data: string) => {},
  load: true,
  handleLoad: (_loadData: boolean) => {},
  page: 1,
  handlePage: (_pageData: number) => {},
});

export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const updatePhoneNumber = useCallback(
    (newValue: string) => {
      setPhoneNumber(newValue);
    },
    [setPhoneNumber]
  );

  const [leagues, setLeagues] = useState<ILeague[]>([]);
  const handleLeagues = useCallback(
    (leagueData: ILeague[]) => {
      setLeagues([...leagueData]);
    },
    [setLeagues]
  );

  const leagueType: IOption[] = useMemo(
    () => [
      { label: "Champion", value: "champion" },
      { label: "Premier", value: "premier" },
    ],
    []
  );

  const [leagueSelected, setLeagueSelected] = useState<string>("champion");
  const handleLeagueSelected = useCallback(
    (data: string) => {
      setLeagueSelected(data);
    },
    [setLeagueSelected]
  );

  const sorts: IOption[] = useMemo(
    () => [
      { label: "Highest", value: "H" },
      { label: "Lowest", value: "L" },
    ],
    []
  );

  const [sortSelected, setSortSelected] = useState<string>("H");
  const handleSortSelected = useCallback(
    (data: string) => setSortSelected(data),
    [setSortSelected]
  );

  const [teams, setTeams] = useState<string[]>([]);
  const handleTeams = useCallback(
    (teamData: string[]) => {
      setTeams([...teamData]);
    },
    [setTeams]
  );

  const [teamSelected, setTeamSelected] = useState<string>("");
  const handleTeamSelected = useCallback(
    (data: string) => {
      setTeamSelected(data);
    },
    [setTeamSelected]
  );

  const [load, setLoad] = useState<boolean>(true);
  const handleLoad = useCallback(
    (loadData: boolean) => {
      setLoad(loadData);
    },
    [setLoad]
  );

  const [page, setPage] = useState<number>(1);
  const handlePage = useCallback(
    (pageData: number) => {
      setPage(pageData);
    },
    [setPage]
  );

  return (
    <MainContext.Provider
      value={{
        phoneNumber,
        updatePhoneNumber,
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
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
