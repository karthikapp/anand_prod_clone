import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument , AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { CategoryItem } from './models/categoryitem'
import 'firebase/firestore';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseserviceService {
  
  CategoryCollection: AngularFirestoreCollection<CategoryItem>
  public category : Observable<CategoryItem[]>
  public categoryDoc: AngularFirestoreDocument<CategoryItem>;
  SubCategoryCollection: AngularFirestoreCollection<CategoryItem>
  public subcategory: Observable<CategoryItem[]>;
  constructor(public db: AngularFirestore)

  { }


  showcollectios()
  {
  	// this.db.collection('category').valueChanges().subscribe(val => {
   //      console.log(val)
   //  })


     this.CategoryCollection = this.db.collection<CategoryItem>('category');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.category = this.CategoryCollection.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as CategoryItem;
        const id = a.payload.doc.id;
        console.log(id, a.payload.doc.data())
        return { id, ...data };
      });
    });
      //console.log("cat", this.category)
      return this.category
  }


  addcategory(categoryobject)
  {
    // var item = {
    //   categoryname: categoryobject.categoryname,
    //   hassubcategory: categoryobject.hassubcategory,
    //   createtime: categoryobject.createtime,
    //   edittime: categoryobject.edittime,
    //   subcategory: subcategoryobject
    // }

    // console.log("item", item)
    const listRef = this.db.collection('category')

    return listRef.add(categoryobject)
  }



   showsubcollectios(itemid)
  {
    // this.category = this.db.collection('category').valueChanges()
    // return this.category

     this.SubCategoryCollection = this.db.collection<CategoryItem>('category').doc(itemid).collection('subcategory');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.subcategory = this.SubCategoryCollection.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as CategoryItem;
        const id = a.payload.doc.id;
        console.log(id, a.payload.doc.data())
        return { id, ...data };
      });
    });
      //console.log("cat", this.category)
      return this.subcategory
  }




   addsubcategory(subcategoryobject, categoryid)
  {
    // var item = {
    //   categoryname: categoryobject.categoryname,
    //   hassubcategory: categoryobject.hassubcategory,
    //   createtime: categoryobject.createtime,
    //   edittime: categoryobject.edittime,
    //   subcategory: subcategoryobject
    // }

    // console.log("item", item)
    var refstring = "category" + "/" + categoryid  + "/" + "subcategory"
    const subcatlistRef = this.db.collection(refstring)
    return subcatlistRef.add(subcategoryobject)
  }



  updateCategory(categoryid){

  }

  deleteCategory(categoryid){
    this.categoryDoc = this.db.collection('category').doc(categoryid);
    console.log(this.categoryDoc)
    this.categoryDoc.delete();
  }

  updateSubCategory(categoryid, subcategoryid)
  {

  }

  deleteSubCategory(categoryid, subcategoryid){
//     var categoryRef = this.db.collection('category').doc(categoryid);

// // Remove the 'capital' field from the document
//     var removeSubCategory = categoryRef.update({
//     subcategory: firebase.firestore.FieldValue.delete()
// });
  }

}
