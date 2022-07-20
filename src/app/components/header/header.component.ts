import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  portfolio_data: any;
  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.portfolio.getPortolioData().subscribe((data: object) => {
      this.portfolio_data = data;
    });
  }
}
