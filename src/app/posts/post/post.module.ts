import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './post-view/posts/posts.component';
import { PostItemComponent } from './post-view/post-item/post-item.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
