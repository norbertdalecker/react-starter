export interface Hello{
  message: string;
}
export interface HelloState {
  readonly hello: Hello[] | null;
  readonly loading: boolean;
}
