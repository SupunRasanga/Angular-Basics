import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    if(value.toLocaleLowerCase() == 'male'){
      return "Mr." ;
    }else{
      return "Mis." ;
    }
  }

}
