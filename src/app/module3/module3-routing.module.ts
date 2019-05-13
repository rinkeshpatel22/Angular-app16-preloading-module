import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component3Component } from './component3/component3.component';

const routes: Routes = [
  {
    path: '',
    component: Component3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3RoutingModule { }
