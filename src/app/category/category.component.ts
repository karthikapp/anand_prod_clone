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
  public subitems: any;
	public id?: string;
	public categoryname?: string;
	public hassubcategory?: any;
	public subcategory?: any[];
	public createtime?: string;
	public edittime?: string;
	public datetime?: any;
	public datetimec?: any;
  public addtoggle: boolean;
  public listonb?: any;


  public addsubcategorytoggle: boolean;
  public subcattogglevalue : boolean;
  public subcategoryname?: string;
  public subcathassubcategory?: boolean;

	public addsubFields: {
		subcategoryname : string,
		hassubcategory: any,
		createtime: any,
		edittime: any
	}[] = []

  public upCategoryname: any;
  public upCategoryid: any;
  public upSubCategoryid: any;
  public upSubCategoryname: any;
  public itemid: any;

	constructor(public db: FirebaseserviceService) 
	{ 
		this.hassubcategory = false;
		this.datetime = firebase.firestore.FieldValue.serverTimestamp();
		this.datetimec = firebase.database.ServerValue.TIMESTAMP;
		//this.addsubFields[0].hassubcategoryl1 = false 
		
	}

  ngAfterViewInit() 
  {
    jQuery('.ui.radio.checkbox').checkbox()
    //  jQuery('.ui.accordion > .title:not(.active)').mouseenter(function(){
    //   jQuery(this).trigger('click');
    // });
   
  }

  ngAfterContentChecked()
  {
    jQuery('.ui.accordion').accordion();
  }

  addcategoryshow(toggle)
  {
    this.addtoggle = !toggle

  }


    addsubcategoryshow(toggle)
  {
    this.addsubcategorytoggle = !toggle

  }



   addsubcategoryobject(categoryid)
  {
    console.log("id",categoryid)
    var objecttopush = 
    {
      "categoryname" : this.subcategoryname,
      "hassubcategory" : this.subcathassubcategory,
      "createtime": this.datetime,
      "edittime" : this.datetime
    }
    this.db.addsubcategory(objecttopush, categoryid).then(success => {
      alert("added successfully");
      this.subcategoryname = '';
      this.subcathassubcategory = false;
    })
  }

  addcategoryobject()
  {
  	var objecttopush = 
  	{
      "categoryname" : this.categoryname,
      "hassubcategory" : this.subcattogglevalue,
      "createtime": this.datetime,
      "edittime" : this.datetime
    }
    console.log("addsubFields", this.addsubFields)
    this.db.addcategory(objecttopush).then(success => {
      alert("added successfully");
      this.categoryname = '';
      this.subcattogglevalue = false;
    })
  }

  discardCategory(){
  	this.addsubFields = []
  	this.categoryname = '';
  	this.hassubcategory = false;
  }

  updateCategory(itemid, categoryname){
  	console.log(itemid, categoryname)
  	this.db.updateCategory(itemid, categoryname).then(success => {
      this.upCategoryname = '';
      this.upCategoryid = '';
    })
  }

    updateCategoryItems(categoryname, categoryid){
      this.upCategoryname = '';
      this.upCategoryid = '';
    this.upCategoryname = categoryname
    this.upCategoryid = categoryid
  }

  updateSubCategory(itemid, subitemid, subcategoryname){
  	console.log(subitemid)
  	this.db.updateSubCategory(itemid, subitemid, subcategoryname).then(success => {
      this.upSubCategoryid = '';
      this.upSubCategoryname = '';
    })
  }

   updateSubCategoryItems(subcategoryname, subcategoryid){
    console.log(subcategoryid)
    this.upSubCategoryid = subcategoryid
    this.upSubCategoryname = subcategoryname
  }

  deleteCategory(itemid){
  	console.log(itemid)
  	this.db.deleteCategory(itemid)
  }

  deleteSubCategory(itemid, subitemid){
  	console.log(subitemid)
  	this.db.deleteSubCategory(itemid,subitemid)
  }

  // addSubCategory(index, hassubcategory){
  // 	this.hassubcategory = hassubcategory
  // 	if(hassubcategory == true)
  // 	{
  // 		this.addsubFields.push({ subcategoryname:'', 
  // 			hassubcategory: false,
  // 			createtime: this.datetimec,
  // 			edittime: this.datetimec});
  // 	}
  // 	else
  // 	{
  // 		this.addsubFields.splice(index,1);
  // 	}
  // }

  // addSubCategoryLoop(index,  hassubcategory){
  // 	this.addsubFields[index].hassubcategory = hassubcategory

  // 	if(hassubcategory == true)
  // 	{
  // 		this.addsubFields.push({ subcategoryname:'', 
  // 			hassubcategory: false,
  // 			createtime: this.datetimec,
  // 			edittime: this.datetimec});
  // 	}
  // 	else
  // 	{
  // 		this.addsubFields.splice(index+1,1);
  // 	}
  // }


  getsubcollections(itemid)
  {
    this.subitems = [];
    this.itemid = '';
    this.itemid = itemid
    this.db.showsubcollectios(this.itemid).subscribe((val: any) => {
      this.subitems = [];
      this.subitems = val
      console.log("subitems", this.subitems)
      //return this.subitems
    }

   )
  }




  togglesubcategorytrue()
  {
    this.subcattogglevalue = true
    console.log(this.subcattogglevalue)

  }


  togglesubcategoryfalse()
  {
    this.subcattogglevalue = false
    console.log(this.subcattogglevalue)

  }


    togglesubhassubcategorytrue()
  {
    this.subcathassubcategory = true
    console.log(this.subcattogglevalue)

  }


  togglesubhassubcategoryfalse()
  {
    this.subcathassubcategory = false
    console.log(this.subcattogglevalue)

  }
  
  
  returnnullsubcategory(subcategory)
  {
    if (subcategory == undefined)
    {
      var val = "No Sub Category Added Yet"
    }

    return  val;

  }




  ngOnInit() 
  {
    this.itemid = '';
    this.upCategoryid = '';
    this.upCategoryname = '';
    this.upSubCategoryname = '';
    this.upSubCategoryid = '';

    this.db.showcollectios().subscribe((val: any) => {
      this.items = val
      console.log(this.items)
    })

    this.addtoggle = false;
    this.subcattogglevalue = true;
    this.addsubcategorytoggle = false;
    this.subcathassubcategory = true
  }

}
