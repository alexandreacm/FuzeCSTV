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

export type Matches = {
  id: number;
  rescheduled: boolean;
  number_of_games: number;
  image_url: string;
  modified_at: string;
  begin_at: string;
  end_at: string;
  slug: string;
  name: string;
  match_type: string;
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

export interface MatchesResponseType extends BaseResponseType {
  id: number;
  rescheduled: boolean;
  number_of_games: number;
  image_url: string;
  modified_at: string;
  begin_at: string;
  end_at: string;
  slug: string;
  name: string;
  match_type: string;
  serie: Serie;
  league: League;
}
