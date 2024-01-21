export type BaseResponseType = {
  status: string;
  message: string;
};

export type League = {
  id: number;
  image_url: string;
  modified_at: string;
  name: string;
  slug: string;
};

export type Match = {
  id: number;
  status: string;
  rescheduled: boolean;
  number_of_games: number;
  image_url: string | null;
  modified_at: string;
  scheduled_at: string;
  begin_at: string;
  end_at: string;
  slug: string;
  name: string;
  match_type: string;
  opponents: OpponentType[];
  serie: Serie;
  league: League;
};

export type Serie = {
  begin_at: string;
  end_at: string;
  full_name: string;
  id: number;
  league_id: number;
  modified_at: string;
  name: string | null;
  season: string;
};

export type Opponent = {
  acronym: string;
  id: number;
  image_url: string | null;
  location: string;
  modified_at: string;
  name: string;
  slug: string;
};

export type OpponentType = {
  opponent: Opponent;
  type: string;
};
export interface MatchesResponseType extends BaseResponseType {
  id: number;
  status: string;
  rescheduled: boolean;
  number_of_games: number;
  image_url: string;
  modified_at: string;
  scheduled_at: string;
  begin_at: string;
  end_at: string;
  slug: string;
  name: string;
  match_type: string;
  opponents: OpponentType[];
  serie: Serie;
  league: League;
}

export type Players = {
  id: number;
  active: boolean;
  age: number;
  birthday: string;
  first_name: string;
  image_url: string;
  last_name: string;
  modified_at: string;
  name: string;
};

export type Teams = {
  id: number;
  acronym: string;
  image_url: string;
  players: Players[];
};

export interface TeamsResponseType extends BaseResponseType {
  id: number;
  acronym: string;
  image_url: string;
  players: Players[];
}

export enum statusMatch {
  finished = 'finished',
  running = 'running',
  canceled = 'canceled',
  not_started = 'not_started',
}

export type CustomError = {
  data: {
    message: string;
    stack: string;
  };
};
