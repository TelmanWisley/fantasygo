import { LeagueCard } from "components/common";
import { ILeague, IOption } from "types";
import InfiniteScroll from "react-infinite-scroll-component";
import { Select } from "components/common";
import { ChangeEvent } from "react";
import { CgSpinner } from "react-icons/cg";

interface LeagueViewProps {
  leagues: ILeague[];
  fetch: () => void;
  leagueOptions: IOption[];
  leagueChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  league: string;
  score: string;
  scoreOptions: IOption[];
  scoreChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  team: string;
  teamOptions: IOption[];
  teamChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  shuffleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  load: boolean;
}

export const LeagueView: React.FC<LeagueViewProps> = (props) => {
  return (
    <div className="w-full flex flex-col items-center justify-start pt-5">
      <div className="w-full px-2 flex items-center justify-start gap-4 mobile:flex-col">
        <Select
          options={props.leagueOptions}
          handleChange={props.leagueChange}
          value={props.league}
        />
        <Select
          options={props.scoreOptions}
          handleChange={props.scoreChange}
          value={props.score}
        />
        <Select
          options={props.teamOptions}
          handleChange={props.teamChange}
          value={props.team}
        />
        <button
          onClick={props.shuffleClick}
          className="p-2 bg-pink-500 text-white rounded-md hover:bg-gray-200 hover:text-black transition-colors mobile:w-full"
        >
          Shuffle
        </button>
      </div>
      <InfiniteScroll
        dataLength={props.leagues.length}
        next={props.fetch}
        hasMore={true}
        className="grid desktop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 gap-4 p-2"
        loader={
          <div
            className={`desktop:col-span-4 tablet:col-span-2 mobile:col-span-1 w-full h-full items-center flex justify-center text-pink-500 font-bold`}
          >
            {props.load ? (
              <CgSpinner className="animate-spin" size={36} />
            ) : (
              "Every data is loaded"
            )}
          </div>
        }
      >
        {props.leagues.map((league, index) => (
          <LeagueCard {...league} key={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
