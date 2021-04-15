import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home/home.component';
import { DetailComponent } from './detail/detail/detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class PageModule { }
