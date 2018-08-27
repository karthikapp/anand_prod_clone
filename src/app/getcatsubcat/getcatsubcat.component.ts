import { Component, OnInit , Input} from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-getcatsubcat',
  templateUrl: './getcatsubcat.component.html',
  styleUrls: ['./getcatsubcat.component.css']
})
export class GetcatsubcatComponent implements OnInit {
@Input() id: string;
  category : any;

  constructor(private firebaseservice : FirebaseserviceService) { }

  ngOnInit() 
  {
  	this.category= []
  	this.firebaseservice.getproductname(this.id).snapshotChanges().subscribe((val: any) => {
  		 //console.log("from comp", val.payload.val(), this.id)
  		this.category = []
  		if(val.payload.val().category != undefined){
  		this.category = val.payload.val().category
  		}
  		else
  		{
  			this.category = []
  		}
  		//console.log("cat", this.category)
  	})
  }


}
