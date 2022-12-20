import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  fadeIn,
  fadeOut,
  sideFadeInAnimation,
  upFadeInAnimation,
} from 'animations';
import { ApiService } from 'src/app/api.service';
import { ITextPrediction } from 'src/interfaces/icalc-result';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [upFadeInAnimation],
})
export class HomeComponent implements OnInit {
  constructor(public router: Router) {}
  isStartPressed: boolean = false;
  ngOnInit(): void {}
  calc() {
    this.router.navigate(['/calc-input']);
  }
}
