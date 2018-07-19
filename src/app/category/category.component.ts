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
	public hassubcategory?: boolean;
	public subcategory?: any[];
	public createtime?: string;
	public edittime?: string;
	public datetime?: any;
	public datetimec?: any;
  public addtoggle: boolean;
  public listonb?: any;


  public addsubcatlev1toggle: boolean;
  public addcattoggle: boolean;
  public subcattogglevalue : boolean;
  public subcategoryname?: string;
  public subcathassubcategory?: boolean;

  public subcategorylist : any[];
  public subcatlev1egoryname: any;
  public subcatlev1togglevalue: boolean;
  public subcatlev2togglevalue : boolean;
  public addsubcatlev2toggle: boolean;
  public subcatlev2egoryname: any;
  public sublevel1categorylist: any[];
  public item: any;
  
  





	constructor(public db: FirebaseserviceService) 
	{ 
		this.hassubcategory = false;
		this.datetime = firebase.firestore.FieldValue.serverTimestamp();
	}

 

  addcategoryshow(toggle)
  {
    this.addcattoggle = !toggle

  }

   addsublev1categoryshow(toggle)
  {
    this.addsubcatlev1toggle = !toggle

  }

    addsublev2categoryshow(toggle)
  {
    this.addsubcatlev2toggle = !toggle

  }







  addcategoryobject()
  {
  	var objecttopush = 
  	{
      "categoryname" : this.categoryname,
      "hassubcategory" : this.subcattogglevalue,
      "createtime": this.datetime,
      "edittime" : this.datetime,
      "subcategory": []
    }
  
    this.db.addcategory(objecttopush).then(success => {
      alert("added successfully");
      this.categoryname = '';
      this.subcattogglevalue = false;
    })
  }



  getsubcategorylist(id, list)
  {
    this.subcategorylist = list
   
  }


  getlevel1subcategorylist(id,subid,list)
  {
    this.sublevel1categorylist = list
    
  }






// for subcategory 
  togglesubcategoryfalse()
  {
    this.subcattogglevalue = false
  }

    togglesubcategorytrue()
  {
    this.subcattogglevalue = true
  }




// for subcatlev1
  togglesubcatlevel1false()
  {
    this.subcatlev1togglevalue = false
  }

    togglesubcatleve1true()
  {
    this.subcatlev1togglevalue = true
  }


// for subcatlev2
  togglesubcatlevel2false()
  {
    this.subcatlev2togglevalue = false
  }

    togglesubcatleve2true()
  {
    this.subcatlev2togglevalue = true
  }


  addsublev1category(id)
  {

    this.datetimec = new Date();
    var UTCseconds = (this.datetimec.getTime() + this.datetimec.getTimezoneOffset()*60*1000)/1000;
    var subcatlev1object = 
    {
      "categoryname" : this.subcatlev1egoryname,
      "hassubcategory" : this.subcatlev1togglevalue,
      "createtime": UTCseconds,
      "edittime" : UTCseconds,
      "subcategory": []

    }


    this.subcategorylist.push(subcatlev1object)
    this.db.addsubcategory(id, this.subcategorylist).then(success => 
    {
      alert(" Sub category added successfully !!");
      this.subcatlev1egoryname = '';
      this.subcatlev1togglevalue = true;
    })

    
  }



   addsublev2category(id,subid,item)
  {
    this.datetimec = new Date();
    var UTCseconds = (this.datetimec.getTime() + this.datetimec.getTimezoneOffset()*60*1000)/1000;
    var subcatlev2object = 
    {
      "categoryname" : this.subcatlev2egoryname,
      "hassubcategory" : this.subcatlev2togglevalue,
      "createtime": UTCseconds,
      "edittime" : UTCseconds,
      "subcategory": []

    }
    this.item = item
    this.sublevel1categorylist.push(subcatlev2object)
    this.item.subcategory[subid].subcategory = this.sublevel1categorylist

    this.db.addlevel1subcategory(id, item).then(success => 
    {
      alert(" Sub category added successfully !!");
      this.subcatlev2egoryname = '';
      this.subcatlev2togglevalue = true;
    })
  }


  editcategory(itemid, categoryname)
  {
    this.db.updatecategoryname(itemid,categoryname)
  }

  assignname(name)
  {
      
  }


  deletecategory(itemid)
  {
    this.db.deletecategory(itemid)
  }

  // manipulating sub categories 

    editsubcategory(item, id ,categoryname)
  {
    this.db.updatesubcategoryname(item.id, item).then(success => {
       alert(" Sub category name succesfully modified !!");
    })
  }







  ngOnInit() 
  {

    this.db.showcollectios().subscribe((val: any) => {
      this.items = val
      console.log(this.items)
    })

    this.addcattoggle = false;
    this.subcattogglevalue = true;
    this.addsubcatlev1toggle = true;
    this.addsubcatlev2toggle = true;
    this.subcatlev1togglevalue = true;
    this.subcatlev2togglevalue = true;

  }

}
