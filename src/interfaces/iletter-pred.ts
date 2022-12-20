import { IPrediction } from './icalc-result';

export interface ILetterPrediction {
  value: string;
  predictions: IPrediction[] | undefined;
}
