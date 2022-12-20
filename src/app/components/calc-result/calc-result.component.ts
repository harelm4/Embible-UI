import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeIn } from 'animations';

import { IPrediction, ITextPrediction } from 'src/interfaces/icalc-result';

@Component({
  selector: 'app-calc-result',
  templateUrl: './calc-result.component.html',
  styleUrls: ['./calc-result.component.css'],
  animations: [fadeIn],
})
export class CalcResultComponent implements OnInit {
  EMPTY_TOKEN: string = '?';
  @Input() public textPreds: ITextPrediction[] | undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {}
  getPredictionsString(predictions: IPrediction[]): string {
    let res: string = '';
    predictions.forEach((pred: IPrediction) => {
      res += `${pred.value} : ${pred.p} \n`;
    });
    return res;
  }
}
