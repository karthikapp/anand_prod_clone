import { Component, OnInit , Input} from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-getassignedtoname',
  templateUrl: './getassignedtoname.component.html',
  styleUrls: ['./getassignedtoname.component.css']
})
export class GetassignedtonameComponent implements OnInit {
@Input() id: string;
  assignedtoname : string;

  constructor(private firebaseservice : FirebaseserviceService) { }

  ngOnInit() 
  {
  	this.firebaseservice.getassignedtoname(this.id).snapshotChanges().subscribe((val: any) => {
  		// console.log("from comp", val.payload.val())
  		this.assignedtoname = val.payload.val().name
  	})
  }

}
