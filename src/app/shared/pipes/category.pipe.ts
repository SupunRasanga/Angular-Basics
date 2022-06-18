import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: number): any {
     if(value > 18){
       return "Adult";
     }
     else{
       return "Child";
     }


  }

}
