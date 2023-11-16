export interface IApiResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
