import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortorder'
})
export class SortorderPipe implements PipeTransform {
//Pipe is used to Sort the records in descending order 

  transform(value: any, ...args): any {

    if (!value)
    	{ return }
    else {
    	//console.log("sort",value);
    	return value.slice().reverse();
    }
  }



}
