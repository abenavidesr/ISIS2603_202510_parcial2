import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';

const routes: Routes = [
    {
      path: '/candidatos/',
      component: CandidatosListComponent
    },
    {
      path: '/candidatos/:id',
      component: CandidatosDetailComponent
    },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CandidatosRoutingModule { }
