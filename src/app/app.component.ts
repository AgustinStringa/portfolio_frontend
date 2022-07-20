import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    this.rutaActiva.params.subscribe((params: Params) => {
      // console.log(params);
    });
  }
  title = 'portfolio_frontend';
}
