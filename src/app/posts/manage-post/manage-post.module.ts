import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePostRoutingModule } from './manage-post-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PostCrudComponent } from './manage-your-posts/post-crud/post-crud.component';
import { AddPostFormComponent } from './manage-your-posts/add-post-form/add-post-form.component';


@NgModule({
  declarations: [
    PostCrudComponent,
    AddPostFormComponent
  ],
  imports: [
    CommonModule,
    ManagePostRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManagePostModule { }
