import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { JokeListComponent } from './joke-list/joke-list.component';
import { ExDirectivesComponent } from './excercises/ex-directives/ex-directives.component';


const routes: Routes = [
  { path: '', redirectTo:"jokes", pathMatch: 'full'},
  { path: 'jokes', component: JokeListComponent},
  { path: 'ex-directives', component: ExDirectivesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }