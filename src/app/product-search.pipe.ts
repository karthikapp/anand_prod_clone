import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {
  val: any;

  transform(value: any, input:any, division: any, args?: any): any {

    this.val = ''
    //When Input == search String is NULL or UNDEFINED, 
    //return ALL the accounts / oems/ events/ products/ distributors values
    if(input == null || input == undefined) { 
      return value
    }

    //When value is NULL or UNDEFINED, make that value as '', so that filtering can be processed
    if( value == null || value == undefined) { 
      //alert("A Company which is found to be EMPTY is present in the list of all accounts")  
      let value = '';
    }

    //Filtering the records based on value(ALL records) and input(search String)
     if ((value != null || value != undefined) && division == 'products'){
      return value.filter( values => {
       return values.Product_name.toLowerCase().indexOf(input.toLowerCase()) > -1;
      })

    } 
    else if ((value != null || value != undefined) && division == 'accounts'){
      return value.filter( values => {
       return values.companyname.toLowerCase().indexOf(input.toLowerCase()) > -1;
      })
    } 
    


  } 
}


