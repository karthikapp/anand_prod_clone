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
  public categoryUpdateDoc: AngularFirestoreDocument<CategoryItem>;
  public subcategoryUpdateDoc: AngularFirestoreDocument<CategoryItem>;
  public categoryDeleteDoc: AngularFirestoreDocument<CategoryItem>;
  //public subcategoryDeleteDoc: AngularFirestoreCollection<CategoryItem>;
  public scategoryDeleteDoc: AngularFirestoreDocument<CategoryItem>;
  SubCategoryCollection: AngularFirestoreCollection<CategoryItem>
  public subcategory: Observable<CategoryItem[]>;
  public edittime: any;

  constructor(public db: AngularFirestore)
  {
    this.edittime = firebase.firestore.FieldValue.serverTimestamp();
   }


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

        //console.log("main",id, a.payload.doc.data())
        return { id, ...data };
      });
    });

    return this.category

    

      // Get reference to all of the documents
  // console.log("Retrieving list of documents in collection");

  // let documents = collectionRef.limit(1).get()
  //   .then(snapshot => {
  //     snapshot.forEach(doc => {
  //       console.log("Parent Document ID: ", doc.id);

  //       let subCollectionDocs = collectionRef.doc(doc.id).collection("subCollection").get()
  //         .then(snapshot => {
  //           snapshot.forEach(doc => {
  //             console.log("Sub Document ID: ", doc.id);
  //           })
  //         }).catch(err => {
  //           console.log("Error getting sub-collection documents", err);
  //         })
  //     });
  //   }).catch(err => {
  //   console.log("Error getting documents", err);
  // });


      //console.log("cat", this.category)
      
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
    //console.log(itemid)
     this.SubCategoryCollection = this.db.collection<CategoryItem>('category').doc(itemid).collection('subcategory');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.subcategory = this.SubCategoryCollection.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as CategoryItem;
        const id = a.payload.doc.id;
        //console.log("sub",id, a.payload.doc.data())
        return { id, ...data };
      });
    });
      //console.log("cat", this.category)
      return this.subcategory
  }




   addsubcategory(subcategoryobject, categoryid)
  {
    var refstring = "category" + "/" + categoryid
    const subcatlistRef = this.db.doc(refstring)
    return subcatlistRef.update({"subcategory": subcategoryobject})
  }



  updateCategory(categoryid, categoryname){
    this.categoryUpdateDoc = this.db.collection('category').doc(categoryid);
    var data = {"categoryname": categoryname, "edittime": this.edittime}
    return this.categoryUpdateDoc.update(data)
  }

  deleteCategory(categoryid){
    // Get a new write batch
    const batch = firebase.firestore().batch()
    const itemField = "category" + "/" + categoryid + "/" + "subcategory"
    const itemCollection = firebase.firestore().collection(itemField).get().then((subCollectionSnapshot) => {
      subCollectionSnapshot.forEach((subDoc) => {
        
        console.log(subDoc.data(), subDoc.id);
        batch.delete(subDoc.ref)
      });
      return batch.commit();
    });;
    
   // batch.delete(subcategoryDeleteDoc);
   // itemCollection.forEach( (document) => {
   //  batch.delete(document.id);
   // })
    
    this.categoryDeleteDoc = this.db.collection('category').doc(categoryid)
    this.categoryDeleteDoc.delete();

    //return batch.commit();
  }

  updateSubCategory(categoryid, subcategoryid, subcategoryname)
  {
    this.subcategoryUpdateDoc = this.db.collection('category').doc(categoryid).collection('subcategory').doc(subcategoryid);
    var data = {"categoryname": subcategoryname, "edittime": this.edittime}
    return this.subcategoryUpdateDoc.update(data)
  }

  deleteSubCategory(categoryid, subcategoryid){
//     var categoryRef = this.db.collection('category').doc(categoryid);

// // Remove the 'capital' field from the document
//     var removeSubCategory = categoryRef.update({
//     subcategory: firebase.firestore.FieldValue.delete()
// });

  this.scategoryDeleteDoc = this.db.collection('category').doc(categoryid).collection('subcategory').doc(subcategoryid);
  this.scategoryDeleteDoc.delete();

  }

}
