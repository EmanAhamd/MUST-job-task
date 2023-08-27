import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePostRoutingModule } from './manage-post-routing.module';
import { PostCrudComponent } from './manage-your-posts/post-crud/post-crud.component';


@NgModule({
  declarations: [
    PostCrudComponent
  ],
  imports: [
    CommonModule,
    ManagePostRoutingModule
  ]
})
export class ManagePostModule { }
