import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  portfolio_data: any;
  experience_list: Array<any>;
  constructor(private portfolio: PortfolioService) {
    this.portfolio_data = {};
    this.experience_list = [{}];
  }

  ngOnInit(): void {
    this.portfolio.getPortolioData().subscribe((data) => {
      // this.portfolio_data = data;
      this.experience_list = data.experience;
    });
  }
}
