export type BaseResponseType = {
  status: string;
  message: string;
};

export interface LeaguesResponseType extends BaseResponseType {
  id: number;
  image_url: string;
  modified_at: string;
  name: string;
}
