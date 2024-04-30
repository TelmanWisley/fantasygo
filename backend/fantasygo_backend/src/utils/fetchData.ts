import { ApolloError } from "apollo-server-express";
import httpStatus from "http-status";
import { FetchDataProps } from "../interfaces";

export const fetchData = async ({
  url,
  team,
  page,
  limit,
  sort,
  transform,
}: FetchDataProps): Promise<unknown[]> => {
  const response = await fetch(url, { method: "GET" });
  if (response.status !== httpStatus.OK) {
    throw new ApolloError("Couldn't fetch data", "SERVICE_UNAVAILABLE", {
      errorCode: httpStatus.SERVICE_UNAVAILABLE,
    });
  }
  const data = await response.json();
  return transform({ data, team, page, limit, sort });
};
