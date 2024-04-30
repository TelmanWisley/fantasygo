// league.resolver.spec.ts
import { LeagueResolver } from "./league.resolver";
import { Context } from "../interfaces";
import { verifyToken, fetchData } from "../utils";
import { env } from "../env";
import { getMockReq } from "@jest-mock/express";
import { Request } from "express";
// Mock the verifyToken function
jest.mock("../utils", () => ({
  verifyToken: jest.fn(),
  fetchData: jest.fn(),
}));

// Mock the environment variables
jest.mock("../env", () => ({
  env: {
    premierUrl: "mockPremierUrl",
    championUrl: "mockChampionUrl",
  },
}));

jest.mock("type-graphql", () => ({
  ObjectType: jest.fn(),
  Field: jest.fn(),
  Resolver: jest.fn(() => (target) => target),
  Mutation: jest.fn(() => (_target, _propertyKey, descriptor) => descriptor),
  Arg: jest.fn(() => (_target, _propertyKey) => {}),
  Ctx: jest.fn(() => (_target, _propertyKey) => {}),
}));

describe("LeagueResolver", () => {
  let resolver: LeagueResolver;

  beforeEach(() => {
    resolver = new LeagueResolver();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should resolve teams for premier league", async () => {
    const mockRequest = getMockReq<Request>();
    const mockCtx: Context = {
      req: mockRequest,
    };
    const leagueType = "premier";

    // Mock the fetchData function to return a specific response
    (fetchData as jest.Mock).mockResolvedValue(["Team1", "Team2"]);

    const result = await resolver.teamMutation(mockCtx, leagueType);
    expect(result).toEqual(["Team1", "Team2"]);
    expect(verifyToken).toHaveBeenCalledWith(mockCtx);
    expect(fetchData).toHaveBeenCalledWith({
      url: env.premierUrl,
      transform: expect.any(Function),
    });
  });

  it("should resolve leagues for champion league", async () => {
    const mockRequest = getMockReq<Request>();
    const mockCtx: Context = {
      req: mockRequest,
    };
    const leagueType = "champion";

    (fetchData as jest.Mock).mockResolvedValue([
      {
        firstName: "Jude",
        secondName: "Bellingham",
        displayName: "J. Bellingham",
        totalPoints: 50,
        team: "Real Madrid",
      },
      {
        firstName: "Phil",
        secondName: "Foden",
        displayName: "P. Foden",
        totalPoints: 49,
        team: "Man City",
      },
    ]);

    const result = await resolver.leagueMutation(mockCtx, leagueType);
    expect(result).toEqual([
      {
        firstName: "Jude",
        secondName: "Bellingham",
        displayName: "J. Bellingham",
        totalPoints: 50,
        team: "Real Madrid",
      },
      {
        firstName: "Phil",
        secondName: "Foden",
        displayName: "P. Foden",
        totalPoints: 49,
        team: "Man City",
      },
    ]);
    expect(verifyToken).toHaveBeenCalledWith(mockCtx);
    expect(fetchData).toHaveBeenCalledWith({
      url: env.championUrl,
      page: 1,
      limit: 20,
      sort: true,
      transform: expect.any(Function),
      team: ""
    });
  });
});
