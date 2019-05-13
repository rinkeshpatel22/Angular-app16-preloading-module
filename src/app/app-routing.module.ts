import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'page1', loadChildren: './module1/module1.module#Module1Module' },
  { path: 'page2', loadChildren: './module2/module2.module#Module2Module' },
  { path: 'page3', loadChildren: './module3/module3.module#Module3Module' },
  { path: '**', redirectTo: '/page1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
