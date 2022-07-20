import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  getPortolioData(): Observable<any> {
    return this.http.get('../../assets/portfolio_data.json');
  }
}
