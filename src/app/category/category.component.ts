import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service'
declare var jQuery: any;
import * as firebase from 'firebase';
import 'firebase/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
//import * as UIkit from 'uikit';
declare var UIkit:any;


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
  public subcatlev3togglevalue : boolean;
  public addsubcatlev3toggle: boolean;
  public subcatlev3egoryname: any;
  public sublevel2categorylist: any[];
  public subcatlev4togglevalue : boolean;
  public addsubcatlev4toggle: boolean;
  public subcatlev4egoryname: any;
  public sublevel3categorylist: any[];
   public subcatlev5togglevalue : boolean;
  public addsubcatlev5toggle: boolean;
  public subcatlev5egoryname: any;
  public sublevel4categorylist: any[];
  public item: any;


  public upcatname: any;
  public catid: any;
  public subcatid: any;
  public upcategoryname: any;
  public subcatlvl1id: any;
  public upcategorylvl1name: any;
  public upcategorylvl2name: any;
  public subcatlvl2id: any;
  public upcategorylvl3name: any;
  public subcatlvl3id: any;
  public upcategorylvl4name: any;
  public subcatlvl4id: any;

  public delitemid: any;
  public delcatname: any;
  public delsubcatid: any;
  public delsubcatname: any;
  public delsubcatlvl1id: any;
  public delcategorylvl1name: any;
  public delcategorylvl2name: any;
  public delsubcatlvl2id: any;
  public delcategorylvl3name: any;
  public delsubcatlvl3id: any;
  public delcategorylvl4name: any;
  public delsubcatlvl4id: any;

  public itemcat: any;
  public UTCseconds: any;


	constructor(public db: FirebaseserviceService) 
	{ 
		this.hassubcategory = false;
		this.datetime = firebase.firestore.FieldValue.serverTimestamp();

    this.datetimec = new Date();
    this.UTCseconds = (this.datetimec.getTime() + this.datetimec.getTimezoneOffset()*60*1000)/1000;

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

      addsublev3categoryshow(toggle)
  {
    this.addsubcatlev3toggle = !toggle

  }

        addsublev4categoryshow(toggle)
  {
    this.addsubcatlev4toggle = !toggle

  }

          addsublev5categoryshow(toggle)
  {
    this.addsubcatlev5toggle = !toggle

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


  getsubcategorylist(list)
  {
    this.subcategorylist = list
    //console.log("sublist", this.subcategorylist)
   
  }


  getlevel1subcategorylist(list)
  {
    this.sublevel1categorylist = list
    //console.log("sublevel1", this.sublevel1categorylist)
    
  }

    getlevel2subcategorylist(list)
  {
    this.sublevel2categorylist = list
    //console.log("sublevel1", this.sublevel1categorylist)
    
  }

      getlevel3subcategorylist(list)
  {
    this.sublevel3categorylist = list
    //console.log("sublevel1", this.sublevel1categorylist)
    
  }

        getlevel4subcategorylist(list)
  {
    this.sublevel4categorylist = list
    //console.log("sublevel1", this.sublevel1categorylist)
    
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


// for subcatlev3
  togglesubcatlevel3false()
  {
    this.subcatlev3togglevalue = false
  }

    togglesubcatleve3true()
  {
    this.subcatlev3togglevalue = true
  }

  // for subcatlev4
  togglesubcatlevel4false()
  {
    this.subcatlev4togglevalue = false
  }

    togglesubcatleve4true()
  {
    this.subcatlev4togglevalue = true
  }

  //   // for subcatlev5
  // togglesubcatlevel5false()
  // {
  //   this.subcatlev5togglevalue = false
  // }

  //   togglesubcatleve5true()
  // {
  //   this.subcatlev5togglevalue = true
  // }

  addsublev1category(id)
  {

    
    var subcatlev1object = 
    {
      "categoryname" : this.subcatlev1egoryname,
      "hassubcategory" : this.subcatlev1togglevalue,
      "createtime": this.UTCseconds,
      "edittime" : this.UTCseconds,
      "subcategory": []

    }


    this.subcategorylist.push(subcatlev1object)
    //console.log("sublvl",this.subcategorylist)
    this.db.addsubcategory(id, this.subcategorylist).then(success => 
    {
      alert(" Sub category added successfully !!");
      this.subcatlev1egoryname = '';
      this.subcatlev1togglevalue = true;
    })

    
  }


   addsublev2category(id,subid,item)
  {
    
    var subcatlev2object = 
    {
      "categoryname" : this.subcatlev2egoryname,
      "hassubcategory" : this.subcatlev2togglevalue,
      "createtime": this.UTCseconds,
      "edittime" : this.UTCseconds,
      "subcategory": []

    }
    this.item = item
    this.sublevel1categorylist.push(subcatlev2object)
    this.item.subcategory[subid].subcategory = this.sublevel1categorylist
    //console.log("sublvl2", this.sublevel1categorylist, this.item.subcategory[subid].subcategory, id,item)

    this.db.addlevel1subcategory(id, item).then(success => 
    {
      alert(" Sub category added successfully !!");
      this.subcatlev2egoryname = '';
      this.subcatlev2togglevalue = true;
    })
  }

     addsublev3category(id,subid,subid1,item)
  {

    //console.log("this", this.subcatlev3egoryname)
    
    var subcatlev3object = 
    {
      "categoryname" : this.subcatlev3egoryname,
      "hassubcategory" : this.subcatlev3togglevalue,
      "createtime": this.UTCseconds,
      "edittime" : this.UTCseconds,
      "subcategory": []

    }
    this.item = item
    this.sublevel2categorylist.push(subcatlev3object)
    this.item.subcategory[subid].subcategory[subid1].subcategory = this.sublevel2categorylist
   // console.log("sublvl2", this.sublevel2categorylist,  id,item)



    this.db.addlevel1subcategory(id, item).then(success => 
    {
      alert(" Sub category added successfully !!");
      this.subcatlev3egoryname = '';
      this.subcatlev3togglevalue = true;
    })
  }

       addsublev4category(id,subid,subid1,subid2,item)
  {

   // console.log("this", this.subcatlev3egoryname)
    
    var subcatlev4object = 
    {
      "categoryname" : this.subcatlev4egoryname,
      "hassubcategory" : this.subcatlev4togglevalue,
      "createtime": this.UTCseconds,
      "edittime" : this.UTCseconds,
      "subcategory": []
    }

    this.item = item
    this.sublevel3categorylist.push(subcatlev4object)
    this.item.subcategory[subid].subcategory[subid1].subcategory[subid2].subcategory = this.sublevel3categorylist
   // console.log("sublvl2", this.sublevel3categorylist,  id,item)



    this.db.addlevel1subcategory(id, item).then(success => 
    {
      alert(" Sub category added successfully !!");
      this.subcatlev4egoryname = '';
      this.subcatlev4togglevalue = true;
    })
  }

         addsublev5category(id,subid,subid1,subid2,subid3,item)
  {

   // console.log("this", this.subcatlev3egoryname)
    
    var subcatlev5object = 
    {
      "categoryname" : this.subcatlev5egoryname,
      "hassubcategory" : this.subcatlev5togglevalue,
      "createtime": this.UTCseconds,
      "edittime" : this.UTCseconds,
      "subcategory": []
    }

    this.item = item
    this.sublevel4categorylist.push(subcatlev5object)
    this.item.subcategory[subid].subcategory[subid1].subcategory[subid2].subcategory[subid3].subcategory = this.sublevel4categorylist
  //  console.log("sublvl2", this.sublevel4categorylist,  id,item)



    this.db.addlevel1subcategory(id, item).then(success => 
    {
      alert(" Sub category added successfully !!");
      this.subcatlev5egoryname = '';
      this.subcatlev5togglevalue = false;
    })
  }



  assignname(name)
  {
      
  }

  // Updating category and sub categories 

  updateCategory(catid, oldcatname){
    this.catid = ''
    this.upcatname = ''
    this.upcatname = oldcatname
    this.catid = catid

  }

  updateSubCategory(subcatid, oldsubcatname)
  {
    this.subcatid = ''
    this.upcategoryname = ''
    this.subcatid = subcatid
    this.upcategoryname = oldsubcatname
  }

  updateSubCategorylvl1(subcatid, subcatid1, oldsubcatname)
  { 
    this.subcatid = ''
    this.subcatlvl1id = ''
    this.upcategorylvl1name = ''
    this.subcatid = subcatid
    this.subcatlvl1id = subcatid1
    this.upcategorylvl1name = oldsubcatname
    //this.itemcat = item
  }

    updateSubCategorylvl2(subcatid, subcatid1, subcatid2, oldsubcatname)
  { 
    this.subcatid = ''
    this.subcatlvl1id = ''
    this.subcatlvl2id = ''
    this.upcategorylvl2name = ''
    this.subcatid = subcatid
    this.subcatlvl1id = subcatid1
    this.subcatlvl2id = subcatid2
    this.upcategorylvl2name = oldsubcatname
    //this.itemcat = item
  }

    updateSubCategorylvl3(subcatid, subcatid1, subcatid2, subcatid3, oldsubcatname)
  { 
    this.subcatid = ''
    this.subcatlvl1id = ''
    this.subcatlvl2id = ''
    this.subcatlvl3id = ''
    this.upcategorylvl3name = ''
    this.subcatid = subcatid
    this.subcatlvl1id = subcatid1
    this.subcatlvl2id = subcatid2
    this.subcatlvl3id = subcatid3
    this.upcategorylvl3name = oldsubcatname
    //this.itemcat = item
  }

      updateSubCategorylvl4(subcatid, subcatid1, subcatid2, subcatid3, subcatid4, oldsubcatname)
  { 
    this.subcatid = ''
    this.subcatlvl1id = ''
    this.subcatlvl2id = ''
    this.subcatlvl3id = ''
    this.subcatlvl4id = ''
    this.upcategorylvl4name = ''
    this.subcatid = subcatid
    this.subcatlvl1id = subcatid1
    this.subcatlvl2id = subcatid2
    this.subcatlvl3id = subcatid3
    this.subcatlvl4id = subcatid4
    this.upcategorylvl4name = oldsubcatname
    //this.itemcat = item
  }

 

  editcategory(item, categoryname)
  {
    this.db.updatecategoryname(item.id,categoryname).then(success => {
      alert("Category name successfully modified !!")
      //UIkit.modal("#modal-edit-cat").hide();
    })
  }

    editsubcategory(item,categoryname)
  {
    this.itemcat = []
    this.itemcat = item
    this.itemcat.subcategory[this.subcatid].categoryname = categoryname
    this.itemcat.subcategory[this.subcatid].edittime = this.UTCseconds

    this.db.updatesubcategoryname(item.id, item).then(success => {
       alert(" Sub category name succesfully modified !!");
       //UIkit.modal("#modal-edit-subcat").hide();
       })
  }

  editsubcategorylvl1(item,categoryname)
  {
    this.itemcat = []
    this.itemcat = item
    this.itemcat.subcategory[this.subcatid].subcategory[this.subcatlvl1id].categoryname = categoryname
    this.itemcat.subcategory[this.subcatid].subcategory[this.subcatlvl1id].edittime = this.UTCseconds

    this.db.updatesubcategoryname(item.id, item).then(success => {
       alert(" Sub category name succesfully modified !!");
       //UIkit.modal('#modal-edit-subcatlvl1').hide();
     })
  }

    editsubcategorylvl2(item,categoryname)
  {
    //  console.log("lvl2", item, categoryname)
    this.itemcat = []
    this.itemcat = item
    this.itemcat.subcategory[this.subcatid].subcategory[this.subcatlvl1id].subcategory[this.subcatlvl2id].categoryname = categoryname
    this.itemcat.subcategory[this.subcatid].subcategory[this.subcatlvl1id].subcategory[this.subcatlvl2id].edittime = this.UTCseconds

    this.db.updatesubcategoryname(item.id, item).then(success => {
       alert(" Sub category name succesfully modified !!");
       //UIkit.modal('#modal-edit-subcatlvl2').hide();
     })
  }

    editsubcategorylvl3(item,categoryname)
  {
    //console.log("lvl3", item, categoryname)
    this.itemcat = []
    this.itemcat = item
    this.itemcat.subcategory[this.subcatid].subcategory[this.subcatlvl1id].subcategory[this.subcatlvl2id].subcategory[this.subcatlvl3id].categoryname = categoryname
    this.itemcat.subcategory[this.subcatid].subcategory[this.subcatlvl1id].subcategory[this.subcatlvl2id].subcategory[this.subcatlvl3id].edittime = this.UTCseconds

    this.db.updatesubcategoryname(item.id, item).then(success => {
       alert(" Sub category name succesfully modified !!");
       //UIkit.modal('#modal-edit-subcatlvl3').hide();
     })
  }

      editsubcategorylvl4(item,categoryname)
  {
    console.log("lvl3", item, categoryname, this.subcatid,this.subcatlvl1id, this.subcatlvl2id, this.subcatlvl3id, this.subcatlvl4id)
    this.itemcat = []
    this.itemcat = item
    //console.log("hello", this.itemcat.subcategory[this.subcatid].subcategory[this.subcatlvl1id].subcategory[this.subcatlvl2id].subcategory[this.subcatlvl3id].subcategory[this.subcatlvl4id].categoryname)
    this.itemcat.subcategory[this.subcatid].subcategory[this.subcatlvl1id].subcategory[this.subcatlvl2id].subcategory[this.subcatlvl3id].subcategory[this.subcatlvl4id].categoryname = categoryname
    this.itemcat.subcategory[this.subcatid].subcategory[this.subcatlvl1id].subcategory[this.subcatlvl2id].subcategory[this.subcatlvl3id].subcategory[this.subcatlvl4id].edittime = this.UTCseconds

    console.log(item)
    this.db.updatesubcategoryname(item.id, item).then(success => {
       alert(" Sub category name succesfully modified !!");
       //UIkit.modal('#modal-edit-subcatlvl4').hide();
     })
  }

  //Deleting Category and Sub Category
  delcategory(itemid, oldcategoryname)
  {
    this.delitemid = ''
    this.delcatname = ''
    this.delitemid = itemid
    this.delcatname = oldcategoryname
  }

   delsubcategory(subcatid, oldcategoryname)
  {
    this.delsubcatid = ''
    this.delsubcatname = ''
    this.delsubcatid = subcatid
    this.delsubcatname = oldcategoryname
  }

  delsublvl1category(subcatid, subcatid1, oldcategoryname)
  {
    this.delsubcatid = ''
    this.delsubcatlvl1id = ''
    this.delcategorylvl1name = ''
    this.delsubcatid = subcatid
    this.delsubcatlvl1id = subcatid1
    this.delcategorylvl1name = oldcategoryname
  }

  delsublvl2category(subcatid, subcatid1, subcatid2, oldcategoryname)
  {
    this.delsubcatid = ''
    this.delsubcatlvl1id = ''
    this.delsubcatlvl2id = ''
    this.delcategorylvl2name = ''
    this.delsubcatid = subcatid
    this.delsubcatlvl1id = subcatid1
    this.delsubcatlvl2id = subcatid2
    this.delcategorylvl2name = oldcategoryname
  }

  delsublvl3category(subcatid, subcatid1, subcatid2, subcatid3, oldcategoryname)
  {
    this.delsubcatid = ''
    this.delsubcatlvl1id = ''
    this.delsubcatlvl2id = ''
    this.delsubcatlvl3id = ''
    this.delcategorylvl3name = ''
    this.delsubcatid = subcatid
    this.delsubcatlvl1id = subcatid1
    this.delsubcatlvl2id = subcatid2
    this.delsubcatlvl3id = subcatid3
    this.delcategorylvl3name = oldcategoryname
  }

  delsublvl4category(subcatid, subcatid1, subcatid2, subcatid3, subcatid4, oldcategoryname)
  {
    this.delsubcatid = ''
    this.delsubcatlvl1id = ''
    this.delsubcatlvl2id = ''
    this.delsubcatlvl3id = ''
    this.delsubcatlvl4id = ''
    this.delcategorylvl4name = ''
    this.delsubcatid = subcatid
    this.delsubcatlvl1id = subcatid1
    this.delsubcatlvl2id = subcatid2
    this.delsubcatlvl3id = subcatid3
    this.delsubcatlvl4id = subcatid4
    this.delcategorylvl4name = oldcategoryname
  }

  deletecategory(item)
  {
    this.db.deletecategory(item.id)
  }

    deletesubcategory(item)
  {
       this.itemcat = []
    this.itemcat = item
    this.itemcat.subcategory.splice(this.delsubcatid,1)
    //console.log("1", item)

    this.db.updatesubcategoryname(item.id, item).then(success => {
       alert(" Deleted subcategory succesfully !!");
       //UIkit.modal('#modal-edit-subcat').hide();
     })
  }

    deletesublvl1category(item)
  {
       this.itemcat = []
    this.itemcat = item
    this.itemcat.subcategory[this.delsubcatid].subcategory.splice(this.delsubcatlvl1id,1)
//console.log("2", item, this.itemcat.subcategory[subid].subcategory)


    this.db.updatesubcategoryname(item.id, item).then(success => {
       alert(" Deleted subcategory succesfully !!");
       //UIkit.modal('#modal-edit-subcat').hide();
     })
  }

    deletesublvl2category(item)
  {
       this.itemcat = []
    this.itemcat = item
    this.itemcat.subcategory[this.delsubcatid].subcategory[this.delsubcatlvl1id].subcategory.splice(this.delsubcatlvl2id,1)
//console.log("3", item)
    this.db.updatesubcategoryname(item.id, item).then(success => {
       alert(" Deleted subcategory succesfully !!");
       //UIkit.modal('#modal-edit-subcat').hide();
     })
  }

    deletesublvl3category(item)
  {
       this.itemcat = []
    this.itemcat = item
    this.itemcat.subcategory[this.delsubcatid].subcategory[this.delsubcatlvl1id].subcategory[this.delsubcatlvl2id].subcategory.splice(this.delsubcatlvl3id,1)
//console.log("4", item)
    this.db.updatesubcategoryname(item.id, item).then(success => {
       alert(" Deleted subcategory succesfully !!");
       //UIkit.modal('#modal-edit-subcat').hide();
     })
  }

    deletesublvl4category(item)
  {

    this.itemcat = []
    this.itemcat = item
    this.itemcat.subcategory[this.delsubcatid].subcategory[this.delsubcatlvl1id].subcategory[this.delsubcatlvl2id].subcategory[this.delsubcatlvl3id].subcategory.splice(this.delsubcatlvl4id,1)
//console.log("5", item)
    this.db.updatesubcategoryname(item.id, item).then(success => {
       alert(" Deleted subcategory succesfully !!");
       //UIkit.modal('#modal-edit-subcat').hide();
     })
  }


  ngOnInit() 
  {

    this.db.showcollectios().subscribe((val: any) => {
      this.items = val
      //console.log(this.items)
    })

    this.addcattoggle = false;
    this.subcattogglevalue = true;
    this.addsubcatlev1toggle = true;
    this.addsubcatlev2toggle = true;
    this.addsubcatlev3toggle = true;
        this.addsubcatlev4toggle = true;
          this.addsubcatlev5toggle = true;

    this.subcatlev1togglevalue = true;
    this.subcatlev2togglevalue = true;
    this.subcatlev3togglevalue = true;
        this.subcatlev4togglevalue = true;
         this.subcatlev5togglevalue = false;


  }

}
