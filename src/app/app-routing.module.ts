import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const PAGE_ROTES: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(PAGE_ROTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
