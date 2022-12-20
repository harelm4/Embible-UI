import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITextPrediction } from 'src/interfaces/icalc-result';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://127.0.0.1:8000';
  constructor(private client: HttpClient) {}

  mock(): Observable<ITextPrediction[]> {
    return this.client.get<ITextPrediction[]>(`${this.url}/mock`);
  }
}
