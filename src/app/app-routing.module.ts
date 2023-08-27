import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)
  },
  { 
    path: 'view',
    loadChildren: () => import('./posts/posts.module').then(p => p.PostsModule)
  },
  {
    path: '',
    loadChildren: () => import('./posts/posts.module').then(p => p.PostsModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
