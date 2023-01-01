import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITextPrediction } from 'src/interfaces/icalc-result';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // url = 'https://embible.cs.bgu.ac.il';
  url = 'http://localhost:443';
  constructor(private client: HttpClient) {}

  calc(text: string): Observable<ITextPrediction[]> {
    const params: HttpParams = new HttpParams().set('text', text);
    return this.client.get<ITextPrediction[]>(`${this.url}/calc`, {
      params: params,
      withCredentials: true,
    });
  }
}
