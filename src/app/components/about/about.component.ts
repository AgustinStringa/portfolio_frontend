import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  portfolio_data: any;
  constructor(private portfolio: PortfolioService) {
    this.portfolio_data = {};
  }

  ngOnInit(): void {
    this.portfolio.getPortolioData().subscribe((data) => {
      this.portfolio_data = data;
    });
  }
}
