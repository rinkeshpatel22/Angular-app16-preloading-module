import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module3-routing.module';
import { Component3Component } from './component3/component3.component';

@NgModule({
  declarations: [Component3Component],
  imports: [
    CommonModule,
    Module3RoutingModule
  ]
})
export class Module3Module {
  constructor(){
    console.log('Module3 loaded');
  }
 }
