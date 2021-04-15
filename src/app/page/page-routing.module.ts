import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail/detail.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [  
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  {path: '', redirectTo: 'home',pathMatch:'full' },
  {path: '**', redirectTo: 'home',pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
