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
	 hassubcategory?: boolean;
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
		hassubcategory: boolean,
		createtime: any,
		edittime: any
	}[] = []

  public upCategoryname: any;
  public upCategoryid: any;
  public upSubCategoryid: any;
  public upSubCategoryname: any;
  public uphassubcategory: boolean;
  public itemid: any;

  public subitemmark: any;

  public sl1: { categoryname : string,
      hassubcategory : boolean,
      createtime: Date,
      edittime : Date,
      subcategory: any[]
  }[] = []

  public sl2: { categoryname : string,
      hassubcategory : boolean,
      createtime: Date,
      edittime : Date,
      subcategory: any[]
  }[] = []

  public sl3: { categoryname : string,
      hassubcategory : boolean,
      createtime: Date,
      edittime : Date,
      subcategory: any[]
  }[] = []

  public sl4: { categoryname : string,
      hassubcategory : boolean,
      createtime: Date,
      edittime : Date,
      subcategory: any[]
  }[] = []

  public sl5: { categoryname : string,
      hassubcategory : boolean,
      createtime: Date,
      edittime : Date,
      subcategory: any[]
  }[] = []

  public s11: { 
      categoryname : string,
      hassubcategory : boolean,
      createtime: Date,
      edittime : Date,
      subcategory: any[]
  }[] = []

  public s22: { 
      categoryname : string,
      hassubcategory : boolean,
      createtime: Date,
      edittime : Date,
      subcategory: any[]
  }[] = []

  public s33: { 
      categoryname : string,
      hassubcategory : boolean,
      createtime: Date,
      edittime : Date,
      subcategory: any[]
  }[] = []

  public s44: { 
      categoryname : string,
      hassubcategory : boolean,
      createtime: Date,
      edittime : Date,
      subcategory: any[]
  }[] = []

  public s55: { 
      categoryname : string,
      hassubcategory : boolean,
      createtime: Date,
      edittime : Date,
      subcategory: any[]
  }[] = []

  s1: any[]
  s2: any[]
  s3: any[]
  s4: any[]

	constructor(public db: FirebaseserviceService) 
	{ 
		this.hassubcategory = false;
		this.datetime = firebase.firestore.FieldValue.serverTimestamp();
		this.datetimec = new Date();
    this.subitemmark = '';
		
	}

  ngAfterViewInit() 
  {
    jQuery('.ui.radio.checkbox').checkbox()   
  }

  ngAfterContentChecked()
  {
    jQuery('.ui.accordion').accordion();
  }

  addcategoryshow(toggle)
  {
    this.addtoggle = !toggle

  }


    addsubcategoryshow(subitemmark, toggle)
  {
    this.addsubcategorytoggle = !toggle
    this.subitemmark = subitemmark

  }



   addsubcategoryobject(categoryid, subitem, sid1, sid2, sid3, sid4, sid5)
  {

    console.log("id",categoryid, subitem, Object.keys(subitem).length, sid1,sid2, sid3,sid4,sid5)
    var iobjecttopush = 
    {
      "categoryname" : this.subcategoryname,
      "hassubcategory" : this.subcathassubcategory,
      "createtime": this.datetimec,
      "edittime" : this.datetimec,
      "subcategory": []
    }

    var objecttopush2 = []
   
    for(let i =0; i < subitem.length; i++)
    {
      //console.log("p", subitem[i], i )
      this.sl1 = []
      this.s11 = []

      // if(i != sid1)
      // {
      //   var s1 = 
      //   {
      //     "categoryname": subitem[i].categoryname,
      //     "hassubcategory": subitem[i].hassubcategory,
      //     "createtime": subitem[i].createtime,
      //     "edittime": subitem[i].edittime,
      //     "subcategory":[]
      //   }

      //   this.sl1.push(s1)
      // }

      if(i == sid1 && sid2 < 0 && sid3 < 0 && sid4 < 0 && sid5 < 0)
      {
        //console.log("Bharadwaj")
        //sl1 = iobjecttopush
        var s1 = {
          "categoryname": subitem[i].categoryname,
          "hassubcategory": subitem[i].hassubcategory,
          "createtime": subitem[i].createtime,
          "edittime": subitem[i].edititme,
          "subcategory": [ iobjecttopush ]
        }

        this.sl1.push(s1)

      }
      else if(i == sid1)
      {
        s1 = {
          "categoryname": subitem[i].categoryname,
          "hassubcategory": subitem[i].hassubcategory,
          "createtime": subitem[i].createtime,
          "edittime": subitem[i].edittime,
          "subcategory": []
        }

        this.s11.push(s1)
      }

      this.sl2 = []
      this.s22 = []

      if(subitem[i].subcategory != undefined)
      {
        if(subitem[i].subcategory.length > 0)
        {
          subitem[i].subcategory.forEach( (q, key) => {
            //console.log("q",q)

            if(key != sid2)
            {
              var s2 = 
              {
                  "categoryname": q.categoryname,
                  "hassubcategory": q.hassubcategory,
                  "createtime": q.createtime,
                  "edittime": q.edititme,
                  "subcategory": []
              }

              this.sl2.push(s2)
            }

            if( i == sid1 && key == sid2 && sid3 < 0 && sid4 < 0 && sid5 < 0)
            {
              //sl2 = iobjecttopush
              //console.log("Chandrasekaran", iobjecttopush)

              s2 = {
                "categoryname": q.categoryname,
                  "hassubcategory": q.hassubcategory,
                  "createtime": q.createtime,
                  "edittime": q.edititme,
                "subcategory": [ iobjecttopush ]
              }

              this.sl2.push(s2)
            }
            else if (key == sid2){
              s2 = {
                "categoryname": q.categoryname,
                  "hassubcategory": q.hassubcategory,
                  "createtime": q.createtime,
                  "edittime": q.edititme,
                "subcategory": []
              }

              this.s22.push(s2)
            }

            this.sl3 = []
            this.s33 = []
            if(q.subcategory != undefined)
            {
              if(q.subcategory.length > 0)
              {
                q.subcategory.forEach( (r,key1) => {
                  console.log("r",r)

                  if(key1 != sid3) 
                  {
                    var s3 = 
                    {
                      
                        "categoryname": r.categoryname,
                        "hassubcategory": r.hassubcategory,
                        "createtime": r.createtime,
                        "edittime": r.edititme,
                        "subcategory": []
                        
                    }

                    this.sl3.push(s3)

                  }

                  if( i == sid1 && key ==sid2 &&  key1 == sid3 && sid4 < 0 && sid5 < 0)
                  {
                    s3 = 
                    {
                        "categoryname": r.categoryname,
                        "hassubcategory": r.hassubcategory,
                        "createtime": r.createtime,
                        "edittime": r.edititme,
                        "subcategory": [ iobjecttopush ]
                    }
                    this.sl3.push(s3)
                  }
                  else if(key1 == sid3)
                  {
                    s3 = {
                        "categoryname": r.categoryname,
                        "hassubcategory": r.hassubcategory,
                        "createtime": r.createtime,
                        "edittime": r.edititme,
                        "subcategory": []
                    }
                    this.s33.push(s3) 
                  }

                  this.sl4 = []
                  this.s44 = []
                  if(r.subcategory != undefined)
                  {
                    if( r.subcategory.length > 0)
                    {
                      r.subcategory.forEach( (s,key2) => {
                        console.log("s", s)
                        if( key2 != sid4)
                        {
                          var s4 = 
                          {
                              "categoryname": s.categoryname,
                              "hassubcategory": s.hassubcategory,
                              "createtime": s.createtime,
                              "edittime": s.edititme,
                              "subcategory": []
                          }
                          this.sl4.push(s4)
                        }

                        if( i == sid1 && key ==sid2 && key1 == sid3 && key2 == sid4 && sid5 < 0)
                        {
                          s4 = 
                          {
                                "categoryname": s.categoryname,
                              "hassubcategory": s.hassubcategory,
                              "createtime": s.createtime,
                              "edittime": s.edititme,
                              "subcategory": [ iobjecttopush]
                          }
                          this.sl4.push(s4)
                        }
                        else if (key2 == sid4)
                        {
                           s4 = {"categoryname": s.categoryname,
                              "hassubcategory": s.hassubcategory,
                              "createtime": s.createtime,
                              "edittime": s.edititme,
                              "subcategory": []
                            }

                            this.s44.push(s4)
                        }
                        // if(s.subcategory != undefined) 
                        // {
                        //   if(s.subcategory.length > 0)
                        //   {
                        //     s.subcategory.forEach( t => {
                        //       console.log ("t", t)
                        //       if(key != sid5 )
                        //       {
                        //         objecttopush = 
                        //         {
                        //           "categoryname": subitem[i].categoryname,
                        //           "hassubcategory": subitem[i].hassubcategory,
                        //           "createtime": subitem[i].createtime,
                        //           "edittime": subitem[i].edititme,
                        //           "subcategory": [{
                        //             "categoryname": q.categoryname,
                        //             "hassubcategory": q.hassubcategory,
                        //             "createtime": q.createtime,
                        //             "edittime": q.edititme,
                        //             "subcategory": [{
                        //               "categoryname": r.categoryname,
                        //             "hassubcategory": r.hassubcategory,
                        //             "createtime": r.createtime,
                        //             "edittime": r.edititme,
                        //             "subcategory": [{
                        //               "categoryname": s.categoryname,
                        //             "hassubcategory": s.hassubcategory,
                        //             "createtime": s.createtime,
                        //             "edittime": s.edititme,
                        //             "subcategory": [{
                        //               "categoryname": t.categoryname,
                        //             "hassubcategory": t.hassubcategory,
                        //             "createtime": t.createtime,
                        //             "edittime": t.edititme
                        //             }]
                        //             }]
                        //             }]
                        //           }]
                        //         }
                        //       }

                        //       if(key == sid5 )
                        //       {
                        //         objecttopush = 
                        //         {
                        //           "categoryname": subitem[i].categoryname,
                        //           "hassubcategory": subitem[i].hassubcategory,
                        //           "createtime": subitem[i].createtime,
                        //           "edittime": subitem[i].edititme,
                        //           "subcategory": [{
                        //             "categoryname": q.categoryname,
                        //             "hassubcategory": q.hassubcategory,
                        //             "createtime": q.createtime,
                        //             "edittime": q.edititme,
                        //             "subcategory": [{
                        //               "categoryname": r.categoryname,
                        //             "hassubcategory": r.hassubcategory,
                        //             "createtime": r.createtime,
                        //             "edittime": r.edititme,
                        //             "subcategory": [{
                        //               "categoryname": s.categoryname,
                        //             "hassubcategory": s.hassubcategory,
                        //             "createtime": s.createtime,
                        //             "edittime": s.edititme,
                        //             "subcategory": [{
                        //               "categoryname": t.categoryname,
                        //             "hassubcategory": t.hassubcategory,
                        //             "createtime": t.createtime,
                        //             "edittime": t.edititme
                        //             }]
                        //             }]
                        //             }]
                        //           }]
                        //         }
                        //       }
                        //     })
                        //   }
                        // } //S5
                      })
                    }
                  } //S4
                  // console.log("s4", this.s44, this.sl4)
                  // console.log("s3", this.s33, this.sl3)
                  // console.log("s2", this.s22, this.sl2)
                  // console.log("s1", this.sl1, this.s11)

                  this.s3 = this.sl3 
                })
              }
            }  //S3
            // console.log("s3", this.s33, this.sl3)
            // console.log("s2", this.s22, this.sl2)
            // console.log("s1", this.sl1, this.s11)

          })
        }
      } //S2
      // console.log("s2", this.s22, this.sl2)
      // console.log("s1", this.sl1, this.s11)

    } // S1
    // console.log("s1", this.sl1, this.s11)


    if(sid1 < 0)
    {
      console.log("krishna")
      objecttopush2.push(iobjecttopush)
    }

    console.log("objecttopush", objecttopush2)

    // this.db.addsubcategory([objecttopush], categoryid).then(success => {
    //   alert("added successfully");
    //   this.subcategoryname = '';
    //   this.subcathassubcategory = false;
    // })
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
      this.uphassubcategory = false;
    })
  }

   updateSubCategoryItems(subcategoryname, subcategoryid, hassubcategory){
    console.log(subcategoryid, subcategoryname)
    this.upSubCategoryid = subcategoryid
    this.upSubCategoryname = subcategoryname
    this.uphassubcategory = hassubcategory
  }

  deleteCategory(itemid){
  	console.log(itemid)
  	this.db.deleteCategory(itemid)
  }

  deleteSubCategory(itemid, subitemid){
  	console.log(subitemid, itemid)
  	// this.db.deleteSubCategory(itemid,subitemid)
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
  
  
  returnnullsubcategory()
  {
    var val = "No Sub Category Added Yet"
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
