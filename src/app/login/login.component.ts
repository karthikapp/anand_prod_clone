import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import {  AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password: string;
  users: user;

  form: FormGroup;

  uid: any;
  ev: boolean = false;
  v: any;


  constructor(private firebaseservice : FirebaseserviceService, private router: Router, 
    private formBuilder: FormBuilder,
    private afAuth: AngularFireAuth) { }

  ngOnInit() 
  {
    this.afAuth.authState
    .subscribe(data => {
      if (data) {
        this.uid = data.uid
         
        this.firebaseservice.getUser(this.uid).snapshotChanges()
        .subscribe((v) => {
        	this.v = v.payload.val();
          if (this.v.report == undefined)
          {
            this.v.report = '';
          }

          if (this.v.role == undefined)
          {
            this.v.role = '';
          }

          if(this.v.title == undefined){
            this.v.title = '';
          }

          if (this.v.role.toUpperCase() == 'ADMIN')
          {      
            this.router.navigate(['home']);
            return this.ev = true;
          } else {
            this.router.navigate(['login']);
            return this.ev=false;
          }
        }) 
      }
      else
      {
        this.router.navigate(['login']);
        return this.ev=false;
      } 
    })

    this.email = '';
    this.password = '';

    this.form = this.formBuilder.group({
      email: new FormControl(this.email, Validators.required),
      password: new FormControl(this.password, Validators.required)
    });
  }

  doLogin(){
   this.firebaseservice.loginUser(this.form.value.email,this.form.value.password)
      .then(user =>{
        //Use the uid in the login and get the userProfile info from '/user'
        // console.log("user", user)
        // console.log("user123", user.user.uid)

        this.firebaseservice.getUser(user.user.uid)
        .snapshotChanges()
        .subscribe(
          users => {this.users = users.payload.val();
          //Check if 
          //1.role is ADMIN, then navigate to dashboard/ListCompanies
          //2.report is reporter/recipient/others, then navigate to leads page
          //Else, error

          if(this.users != null)
          {
          if(this.users.role == undefined)
          {
            this.users.role = '';
          }
          if (this.users.report == undefined)
          {
            this.users.report = '';
          }

          if(this.users.title == undefined){
            this.users.title = '';
          }

          if(this.users.email != undefined) 
          {
            if(this.users.role != '' || this.users.report != '') 
            {
              if (this.users.role.toUpperCase() == 'ADMIN') 
              {
                this.router.navigate(['home']);
              }
              else 
              {
                alert ("Check your access rights!!!!");
              }
            }
            else{
              alert ("Check your access rights!!!!");
            }
          }
          else {
            alert ("UserProfile doesn't exist :-(");
          }
        }
        })
        
      })
      .catch( error => {
        console.log("hello")
        alert("Incorrect username/ password");
    });
  }



}


export interface user {
  role?: string;
  email?: string;
  name?: string;
  report?: string;
  reports_to?: string;
  title?: string;
  userid?: string;
}