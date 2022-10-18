import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainComponent as Page_A_Main } from './components/a/main/main.component';
import { ChildAComponent as Page_A_Child_A } from './components/a/child-a/child-a.component';
import { ChildBComponent as Page_A_Child_B } from './components/a/child-b/child-b.component';

import { MainComponent as Page_B_Main } from './components/b/main/main.component';
import { ChildAComponent as Page_B_Child_A } from './components/b/child-a/child-a.component';
import { ChildBComponent as Page_B_Child_B } from './components/b/child-b/child-b.component';

import { MainComponent as Page_C_Main } from './components/c/main/main.component';
import { ChildAComponent as Page_C_Child_A } from './components/c/child-a/child-a.component';
import { ChildBComponent as Page_C_Child_B } from './components/c/child-b/child-b.component';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  
  // Page A - localhost/page-a
  {
    path: 'page-a',
    component: Page_A_Main,

    children: [
      // Page A, Child A - localhost/page-a/child-a
      {
        path: 'child-a',
        component: Page_A_Child_A
      },

      // Page A, Child B - localhost/page-a/child-b
      {
        path: 'child-b',
        component: Page_A_Child_B
      },
    ]
  },

  // Page B - localhost/page-b
  {
    path: 'page-b',
    component: Page_B_Main,

    children: [
      // Page B, Child A - localhost/page-b/child-a
      {
        path: 'child-a',
        component: Page_B_Child_A
      },

      // Page B, Child B - localhost/page-b/child-b
      {
        path: 'child-b',
        component: Page_B_Child_B
      },

      // Default child - localhost/page-b
      {
        path: '',
        redirectTo: 'child-a',
        // redirectTo: '/child-a', // Erreur : redirige vers localhost/child-a
        pathMatch: 'full'
      }
    ]
  },

  // Page C - localhost/page-c
  {
    path: 'page-c',
    component: Page_C_Main,

    children: [
      // Page C, Child A - localhost/page-c/child-a
      {
        path: 'child-a',
        component: Page_C_Child_A
      },

      // Page C, Child B - localhost/page-c/child-b
      {
        path: 'child-b',
        component: Page_C_Child_B
      },
    ]
  },

  // Default route
  {
    path: '',
    redirectTo: '/page-a',
    pathMatch: 'full'
  },

  // Wildcard route
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
