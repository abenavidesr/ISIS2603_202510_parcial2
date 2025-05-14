import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CandidatosRoutingModule } from './candidatos-routing.module';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';



@NgModule({
  
  imports: [
    CommonModule,
    RouterModule,
    CandidatosRoutingModule
  ],
  declarations: [
    CandidatosListComponent,
    CandidatosDetailComponent
  ],
  exports: [
    CandidatosListComponent
  ]

})
export class CandidatosModule { }
