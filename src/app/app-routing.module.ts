import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { Route66Component } from './route66/route66.component';

const routes: Routes = [
  { path: ':id/:name/stri/:age', component: AppComponent },
  { path: 'route66', component: Route66Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
