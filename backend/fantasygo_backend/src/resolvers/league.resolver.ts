import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import { paginate, verifyToken, fetchData } from "../utils";
import {
  ChampionResponse,
  Context,
  PremierResponse,
  TransformProps,
} from "../interfaces";
import { env } from "../env";
import { League } from "../entity";

@Service()
@Resolver((_type) => League)
export class LeagueResolver {
  @Mutation((_type) => [String])
  public async teamMutation(
    @Ctx() ctx: Context,
    @Arg("leagueType", { nullable: false }) leagueType: string
  ): Promise<String[]> {
    await verifyToken(ctx);
    let url: string;
    let transform: ({ data }: TransformProps) => String[];
    if (leagueType === "premier") {
      url = env.premierUrl;
      transform = ({ data }) => {
        const originData = data as PremierResponse;
        const mapData: League[] = originData.elements.map((league) => ({
          displayName: `${league.first_name[0].toUpperCase()}.${
            league.second_name
          }`,
          firstName: league.first_name,
          secondName: league.second_name,
          team: league.team.toString(),
          totalPoints: league.total_points,
        }));
        const teamArray: String[] = Array.from(
          new Set(mapData.map((item) => item.team))
        );
        return teamArray;
      };
    } else if (leagueType === "champion") {
      url = env.championUrl;
      transform = ({ data }) => {
        const originData = data as ChampionResponse;
        const mapData: League[] = originData.data.value.playerList.map(
          (league) => {
            const [firstName, secondName] = league.pFName.split(" ");
            return {
              displayName: league.pDName,
              firstName,
              secondName: secondName || "",
              team: league.tName,
              totalPoints: league.totPts,
            };
          }
        );
        const teamArray: String[] = Array.from(
          new Set(mapData.map((item) => item.team))
        );
        return teamArray;
      };
    }
    const leagues = await fetchData({
      url,
      transform,
    }) as String[];
    return leagues;
  }
  @Mutation((_type) => [League])
  public async leagueMutation(
    @Ctx() ctx: Context,
    @Arg("leagueType", { nullable: false }) leagueType: string,
    @Arg("page", { nullable: true }) page: number = 1,
    @Arg("limit", { nullable: true }) limit: number = 20,
    @Arg("sort", { nullable: true }) sort: boolean = true,
    @Arg("team", { nullable: true }) team: string = ""
  ): Promise<League[]> {
    await verifyToken(ctx);
    let url: string;
    let transform: ({
      data,
      page,
      limit,
      sort,
      team,
    }: TransformProps) => League[];

    if (leagueType === "premier") {
      url = env.premierUrl;
      transform = ({ data, team, page, limit, sort }) => {
        const originData = data as PremierResponse;
        const mapData: League[] = originData.elements
          .map((league) => ({
            displayName: `${league.first_name[0].toUpperCase()}.${
              league.second_name
            }`,
            firstName: league.first_name,
            secondName: league.second_name,
            team: league.team.toString(),
            totalPoints: league.total_points,
          }))
          .filter((league) => !team || league.team === team)
          .sort((a, b) => {
            return sort
              ? b.totalPoints - a.totalPoints
              : a.totalPoints - b.totalPoints;
          });
        return paginate(mapData, page, limit);
      };
    } else if (leagueType === "champion") {
      url = env.championUrl;
      transform = ({ data, team, page, limit, sort }) => {
        const originData = data as ChampionResponse;
        const mapData: League[] = originData.data.value.playerList
          .map((league) => {
            const [firstName, secondName] = league.pFName.split(" ");
            return {
              displayName: league.pDName,
              firstName,
              secondName: secondName || "",
              team: league.tName,
              totalPoints: league.totPts,
            };
          })
          .filter((league) => !team || league.team === team)
          .sort((a, b) => {
            return sort
              ? b.totalPoints - a.totalPoints
              : a.totalPoints - b.totalPoints;
          });
        return paginate(mapData, page, limit);
      };
    } else {
      throw new Error("Invalid league type");
    }

    const leagues = await fetchData({
      url,
      page,
      limit,
      sort,
      transform,
      team,
    }) as League[];
    return leagues;
  }
}
