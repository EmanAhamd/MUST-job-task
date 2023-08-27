import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCrudComponent } from './manage-your-posts/post-crud/post-crud.component';

const routes: Routes = [
  {path: '', component: PostCrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePostRoutingModule { }
