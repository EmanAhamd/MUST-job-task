import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './404-Component/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./posts/posts.module').then(p => p.PostsModule)
  },
  { 
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)
  },
  { 
    path: 'view',
    loadChildren: () => import('./posts/posts.module').then(p => p.PostsModule)
  },
  {
    path:"**", component: NotFoundPageComponent
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
