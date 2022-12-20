export interface ITextPrediction {
  text: string;
  predictions: IPrediction[] | undefined;
}
export interface IPrediction {
  value: string;
  p: number;
}
