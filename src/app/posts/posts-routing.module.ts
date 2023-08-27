import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'all', pathMatch:'full'},
  
  { 
    path: 'all',
    loadChildren: () => import('./post/post.module').then(p => p.PostModule)
  },
  
  { 
    path: 'managePosts',
    loadChildren: () => import('./manage-post//manage-post.module').then(m => m.ManagePostModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
