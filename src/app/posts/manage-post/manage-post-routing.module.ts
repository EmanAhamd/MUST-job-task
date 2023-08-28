import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCrudComponent } from './manage-your-posts/post-crud/post-crud.component';
import { authGuard } from 'src/app/auth/Guards/auth.guard';

const routes: Routes = [
  {path: '', component: PostCrudComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePostRoutingModule { }
