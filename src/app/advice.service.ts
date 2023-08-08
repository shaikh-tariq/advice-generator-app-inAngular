
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  private apiUrl = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) {}

  getRandomAdvice(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
