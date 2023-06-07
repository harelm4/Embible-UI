import { IPrediction } from './icalc-result';

export interface ITextPart {
  value: string;
  predictions: IPrediction[] | undefined;
}
