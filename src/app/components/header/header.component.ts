import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //se utiliza any por el hecho de que es un objeto, pero cuando se quieran empezar a acceder a sus props, no hay forma de determinarlas a todas para "crear un tipo específico"
  portfolio_data: any;
  constructor(private portfolio: PortfolioService) {
    this.portfolio_data = {};
  }

  ngOnInit(): void {
    this.portfolio.getPortolioData().subscribe((data: any) => {
      this.portfolio_data = data;
    });
  }
}
