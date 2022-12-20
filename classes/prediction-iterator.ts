import { IPrediction } from 'src/interfaces/icalc-result';

export class PredictionsIterator {
  private index: number = 0;
  constructor(private preds: IPrediction[][]) {}
  public next(): IPrediction[] {
    const res = this.preds[this.index];
    this.index++;
    return res;
  }
  public nextBestStr(): string {
    try {
      return this.next()[0].value;
    } catch {
      return '';
    }
  }
}
