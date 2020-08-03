import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGameDetailComponent } from './add-game-detail/add-game-detail.component';
import { ViewGameDetailComponent } from './view-game-detail/view-game-detail.component';
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: AddGameDetailComponent },
  { path: 'home', component: ViewGameDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
