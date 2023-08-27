import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }   from '@angular/forms';
import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './post-view/posts/posts.component';
import { PostItemComponent } from './post-view/post-item/post-item.component';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    PostsComponent,
    PostItemComponent,
    SearchPipe,
  
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule
  ]
})
export class PostModule { }
