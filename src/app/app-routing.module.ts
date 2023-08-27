import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)
  },
  { 
    path: 'allPosts',
    loadChildren: () => import('./posts/post/post.module').then(p => p.PostModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
