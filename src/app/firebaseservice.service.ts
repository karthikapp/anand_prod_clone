import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument , AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { CategoryItem } from './models/categoryitem'

@Injectable()
export class FirebaseserviceService {
  
  CategoryCollection: AngularFirestoreCollection<CategoryItem>
  public items : Observable<CategoryItem[]>

  constructor(public db: AngularFirestore)

  { }


  showcollectios()
  {
  	this.items = this.db.collection('category').valueChanges()
  	return this.items
  }


  addcategory(categoryobject)
  {
    const listRef = this.db.collection('category')
    return listRef.add(categoryobject)
  }

}
