import { Component,  AfterViewInit, AfterContentChecked , OnChanges} from '@angular/core';
declare var jQuery: any;


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements  AfterViewInit, AfterContentChecked{

  constructor() 
  { 
  }



  ngAfterViewInit() 
  {
    // jQuery('.ui.accordion').accordion().on('click', function(e) {
    //   console.log("aftervirew", e);
    // });
  }

  ngAfterContentChecked()
  {
    // jQuery('.ui.accordion').accordion().on('click', function(e) {
    //   console.log("onchanges",e);
    // });
  }

  addCategory()
  {
    // var menu = '<div class="ui styled accordion"> \
    //               <div class="title"> \
    //                 <i class="dropdown icon"></i> \
    //                 + Add Category \
    //               </div> \
    //               <div class="content"> \
    //                 Category Content \
    //               </div> \
    //             </div>';

    // jQuery('#accordion').accordion({
    //   onChanging: function () {
    //     alert(this.index(".content"))
    //       active: this.index(".content")
    //   }
    // });
    // jQuery('.ui.accordion .title').append(menu).show();
    //jQuery('#accordion').accordion('refresh');
  }

  addSubCategory()
  {
  //   var menu = '<div class="ui styled accordion"> \
  //                 <div class="title"> \
  //                   <i class="dropdown icon"></i> \
  //                     + Add Sub Category \
  //                 </div> \
  //                 <div class="content"> \
  //                     Sub Category Content \
  //                 </div> \
  //               </div>';

  // jQuery('.ui.accordion').accordion({
  //     onChanging: function () {
  //         alert(this.index(".content"));
  //         console.log(this.index(".content"));
  //         active: this.index(".content")
  //     }
  //   });

  // jQuery('.ui.accordion .content').append(menu).show();
  // //jQuery('.ui.accordion').accordion('refresh');



}
}