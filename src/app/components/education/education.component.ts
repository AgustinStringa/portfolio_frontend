import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  portfolio_data: any;
  education_list: Array<any>;
  constructor(private portfolio_service: PortfolioService) {
    this.education_list = [{}];
    this.portfolio_data = {};
  }

  ngOnInit(): void {
    this.portfolio_service.getPortolioData().subscribe((data) => {
      this.education_list = data.education;
    });
  }
}
