import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(posts:any[], term:string): any[] {
    return posts.filter((post) => post.title.toLowerCase().includes(term.toLowerCase()));
  }

}
