import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument , AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
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
  public categoryupdate : any;

  //public products: AngularFireList<any>;
  public created_at: any;
  public fireAuth: any;

  constructor(public db: AngularFirestore, public af: AngularFireDatabase)
  {
    this.edittime = firebase.firestore.FieldValue.serverTimestamp();
    this.created_at = firebase.database.ServerValue.TIMESTAMP;
    this.fireAuth = firebase.auth();
  }


  getproductname(productkey){
    //console.log(productkey);
    var productURLs = '/products/' + productkey
   return this.af.object(productURLs)
  }

  getcompetitorname(compkey){
    //console.log(productkey);
    var compURLs = '/competitors/' + compkey
   return this.af.object(compURLs)
  }


  getassignedtoname(userid){
    //console.log(productkey);
    var userURLs = '/user/' + userid
   return this.af.object(userURLs)
  }

  updateAccountName(ecompanyname, ecompanyid){
    var accountURLs = '/accounts/' + ecompanyid
    return this.af.object(accountURLs).update({companyname: ecompanyname})
  }

  updateIndustryType(eindustrytype, ecompanyid){
    var indURLs = '/accounts/' + ecompanyid
    return this.af.object(indURLs).update({industrytype: eindustrytype})
  }

  updateCompanyType(ecompanytype, ecompanyid){
    var comURLs = '/accounts/' + ecompanyid
    return this.af.object(comURLs).update({companytype: ecompanytype})
  }

  updateEmpCount(eempcount, ecompanyid){
    var empURLs = '/accounts/' + ecompanyid
    return this.af.object(empURLs).update({employee_count: eempcount})
  }

  updateCompproducts(ecompanyid, compprodObject)
  {
    var comprod = this.af.list('/accounts/' + ecompanyid + '/competitor_products' ).push(compprodObject)
    var comprodkey = comprod.key;
    var compprodURLs = '/accounts/'+ ecompanyid + '/competitor_products/' + comprodkey; 
    return this.af.object(compprodURLs).update({'comprodkey': comprodkey});

  }

  updateEndpoints(ecompanyid, endpoints){
    var endURLs = '/accounts/' + ecompanyid
    return this.af.object(endURLs).update({endpoints: endpoints})
  }

  delCP(val, val1){
    var delCPURLs = '/accounts/' + val1 + '/competitor_products/' + val
    return this.af.list(delCPURLs).remove();
  }

  showcollectios()
  {

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

     
  }


  addcategory(categoryobject)
  {
    const listRef = this.db.collection('category')

    return listRef.add(categoryobject)
  }

   showsubcollectios(itemid)
  {
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


   addsubcategory(id, subcategorylist)
  {
    
    const updatesubcatgoryRef = this.db.collection('category').doc(id)
    return updatesubcatgoryRef.update({subcategory: subcategorylist})
  }

    addlevel1subcategory(id,item)
  {
    const updatesubcatgoryRef = this.db.collection('category').doc(id)
    return updatesubcatgoryRef.update(item)
  }

  updatecategoryname(categoryid, categoryname)
  {
    const updatesubcatgoryRef = this.db.collection('category').doc(categoryid)
     return updatesubcatgoryRef.update({categoryname: categoryname})
  }


    deletecategory(categoryid)
  {
    const updatesubcatgoryRef = this.db.collection('category').doc(categoryid)
      return updatesubcatgoryRef.delete()
  }

  updatesubcategoryname(id,item)
  {
    //console.log("fb", id, item)
    const updatesubcatgoryRef = this.db.collection('category').doc(id)
    return updatesubcatgoryRef.update(item)
  }


  updateCategory(categoryid, categoryname){
    this.categoryUpdateDoc = this.db.collection('category').doc(categoryid);
    var data = {"categoryname": categoryname, "edittime": this.edittime}
    return this.categoryUpdateDoc.update(data)
  }


  updateSubCategory(categoryid, subcategoryid, subcategoryname)
  {
    this.subcategoryUpdateDoc = this.db.collection('category').doc(categoryid).collection('subcategory').doc(subcategoryid);
    var data = {"categoryname": subcategoryname, "edittime": this.edittime}
    return this.subcategoryUpdateDoc.update(data)
  }


  //Fetch list of Products
  getProducts(){
    return this.af.list('/products', ref => ref.orderByChild('created_at'));
  }

    //Fetch list of Products
  getCompetitors(){
    return this.af.list('/competitors');
  }


  //Update Product information
  saveProduct(product_key, productObject: {category: object, bundles: any}){
    var productURL = '/products/' + product_key
    var productData = this.af.object(productURL).update(productObject);

    return productData;
  }

  //Get single company information
  getAccount(companyid: string){
    var account_URL = '/accounts/' + String(companyid)
    return this.af.object(account_URL);
  }

  //Get all company information
  getAccounts()
  {
    return this.af.list('/accounts', ref => ref.orderByChild('created_at'));
  }

  //Get opportunties based on company
  getOpportunitiesbycmpnyid(companyid: string){
    return this.af.list('/opportunities', ref => ref.orderByChild('company_id').equalTo(String(companyid)));

  }

}
