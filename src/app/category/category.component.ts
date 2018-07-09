import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service'
declare var jQuery: any;
import * as firebase from 'firebase';
import 'firebase/firestore';
import { AngularFirestore } from 'angularfire2/firestore';


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
	public hassubcategory?: any;
	public subcategory?: any[];
	public createtime?: string;
	public edittime?: string;
	public datetime?: any;
	public datetimec?: any;
	public addsubFields: {
		subcategoryname : string,
		hassubcategory: any,
		createtime: any,
		edittime: any
	}[] = []

	constructor(public db: FirebaseserviceService) 
	{ 
		this.hassubcategory = false;
		this.datetime = firebase.firestore.FieldValue.serverTimestamp();
		this.datetimec = firebase.database.ServerValue.TIMESTAMP;
		//this.addsubFields[0].hassubcategoryl1 = false 
		
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
  	// if(this.hassubcategory == 'Yes')
  	// {
  	// 	this.hassubcategory = true
  	// }
  	// else
  	// {
  	// 	this.subcategory = false
  	// }
  	
  	var objecttopush = 
  	{
	"categoryname" : this.categoryname,
	"hassubcategory" : this.hassubcategory,
	"createtime": this.datetime,
	"edittime" : this.datetime
  	}

  	console.log("addsubFields", this.addsubFields)



  	this.db.addcategory(objecttopush, this.addsubFields).then(success => {
  		alert("added successfully");
  		this.discardCategory();
  	})
  }

  discardCategory(){
  	this.addsubFields = []
  	this.categoryname = '';
  	this.hassubcategory = false;
  }

  updateCategory(itemid){
  	console.log(itemid)
  	this.db.updateCategory(itemid)
  }

  updateSubCategory(itemid, subitemid){
  	console.log(subitemid)
  	this.db.updateSubCategory(itemid, subitemid)
  }

  deleteCategory(itemid){
  	console.log(itemid)
  	this.db.deleteCategory(itemid)
  }

  deleteSubCategory(itemid, subitemid){
  	console.log(subitemid)

  	this.db.deleteSubCategory(itemid,subitemid)
  }

  addSubCategory(index, hassubcategory){
  	this.hassubcategory = hassubcategory
  	if(hassubcategory == true)
  	{
  		this.addsubFields.push({ subcategoryname:'', 
  			hassubcategory: false,
  			createtime: this.datetimec,
  			edittime: this.datetimec});
  	}
  	else
  	{
  		this.addsubFields.splice(index,1);
  	}
  }

  addSubCategoryLoop(index,  hassubcategory){
  	this.addsubFields[index].hassubcategory = hassubcategory

  	if(hassubcategory == true)
  	{
  		this.addsubFields.push({ subcategoryname:'', 
  			hassubcategory: false,
  			createtime: this.datetimec,
  			edittime: this.datetimec});
  	}
  	else
  	{
  		this.addsubFields.splice(index+1,1);
  	}
  }



	ngOnInit() 
	{
		this.db.showcollectios().subscribe((val: any) => {
			this.items = val
			console.log(this.items)
		})
	}

}
