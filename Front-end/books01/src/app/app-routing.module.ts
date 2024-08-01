import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Books01Component } from './books01/books01.component';

const routes: Routes = [
  { 
    path: 'books01', 
    component: Books01Component 
  },
  { 
    path: '', 
    redirectTo: '/books01', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
