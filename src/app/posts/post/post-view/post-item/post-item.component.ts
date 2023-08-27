import { Component,Input } from '@angular/core';
import { Ipost } from 'src/app/core/models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {

  @Input() myPosts:Ipost[] = []
  @Input() term:string= '';
}
