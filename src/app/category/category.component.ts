import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service'
declare var jQuery: any;
import * as firebase from 'firebase';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	public jsonvalue : any;
	public items : any
	public id?: string;
	public categoryname?: string;
	public hassubcategory?: boolean;
	public subcategory?: any[];
	public createtime?: string;
	public edittime?: string;

	constructor(public db: FirebaseserviceService) 
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
    jQuery('.ui.accordion').accordion()
  }

  addcategoryobject()
  {
  	var objecttopush = 
  	{
	"categoryname" : this.categoryname,
	"hassubcategory" : this.hassubcategory,
	"createtime": firebase.firestore.FieldValue.serverTimestamp(),
	"edittime" : firebase.firestore.FieldValue.serverTimestamp()
  	}

  	this.db.addcategory(objecttopush)
  }



	ngOnInit() 
	{
		this.db.showcollectios().subscribe((val: any) => {
			this.items = val
			console.log(this.items)
		})
	}

}
