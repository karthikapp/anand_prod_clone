import { Component, OnInit} from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public isActive: Boolean
  public isActive_chats: Boolean
  company_id: any;
  account: any;
  account_name: any;
  industry_type: any;
  company_type: any;
  employee_count: any;
  oppoaccounts: any;
  totalamount: any;
  rakprods: Boolean;
  compprods: Boolean;
  contactshow: Boolean;
  contacts: any;
  customerlandscape: any;
  ecompanyname: any;
  ecompanyid: any;
  eindustrytype: any;
  ecompanytype: any;
  eempcount: any;
 
  selected: Boolean = false;
  compproducts: any;
  products: any;
  items: any;
  competitors: any;
  Product_name: any;
  competitor_name: any;
  productkey: any;
  competitorid: any;
  license_expiry_dt: any;

  elaptops: any;
  emobiles: any;
  edesktops: any;
  ecloud: any;
  eonprem: any;
  endpoints: any;
  totalendpoints: any;
  delCP: any;

  upd_license_expiry_dt: any;
  upd_comprodkey: any;
  value_toggle: any;
  customerlandscapeComp: any;
  employee_count_his: any;
  endpoints_his: any;
  dateConv: any;
  dataConv: any;




  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];





  // lineChart
  public lineChartDataEnd:Array<any> = [{ data: [], label: 'Endpoints' }];
  public lineChartLabelsEnd:Array<any> = [];

    // lineChart
  public lineChartDataEm:Array<any> = [{ data: [], label: 'Employee Count' }];
  public lineChartLabelsEm:Array<any> = [];

  public dataEmp: Array<any>;
  public dateEmp: Array<any>;
  public dataEnd: Array<any>;
  public dateEnd: Array<any>;

  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';




  constructor(private router: ActivatedRoute, private firebaseservice : FirebaseserviceService) 
  {
    this.isActive = true;
    this.isActive_chats = false;
    this.endpoints = []
    
  }



  // intersectFunction()
  // {

  //   console.log("categ",  this.customerlandscape, this.customerlandscapeComp)
  //   this.customerlandscapeInter = this.interPipe.transform(this.customerlandscape, this.customerlandscapeComp)
  //   console.log("this.customerlandscapeInter", this.customerlandscapeInter)

  // }


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  on_edit_accountname()
  {
    this.firebaseservice.updateAccountName(this.ecompanyname, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_industrytype()
  {
    this.firebaseservice.updateIndustryType(this.eindustrytype, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_companytype()
  {
    this.firebaseservice.updateCompanyType(this.ecompanytype, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_empcount()
  {
    this.firebaseservice.updateEmpCount(this.eempcount, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_product()
  {
    let comprod = {
      comprodkey: '',
      competitorid: this.competitorid,
      productid: this.productkey,
      license_expiry_dt: this.license_expiry_dt
    }

    this.firebaseservice.updateCompproducts(this.company_id, comprod ).then(success => {
      alert("Updated Successfully!!")
    })
  }

    on_edit_endpoints()
  {
    let endpoints = {
      servers:
      {
        cloud: this.ecloud,
        onprem: this.eonprem
      },
      desktop: this.edesktops,
      mobile: this.emobiles,
      laptop: this.elaptops,
      create_date: this.firebaseservice.created_at
    }

    //console.log("end", endpoints)

    this.firebaseservice.updateEndpoints(this.ecompanyid, endpoints).then(success => {
      alert("Updated Successfully!!")
    })
  }

  editEndpoints(companyid){
    this.ecompanyid = ''
    this.elaptops = 0
    this.emobiles = 0
    this.eonprem = 0
    this.ecloud = 0
    this.edesktops = 0

    this.ecompanyid = companyid

    //console.log("endpoints", this.endpoints.length, this.endpoints)

    if(this.endpoints.length != 0)
    {
      if(this.endpoints.laptop != undefined){
        this.elaptops = this.endpoints.laptop
      }

      if(this.endpoints.desktop != undefined){
        this.edesktops = this.endpoints.desktop
      }

      if(this.endpoints.mobile != undefined){
        this.emobiles = this.endpoints.mobile
      }

      if(this.endpoints.servers.cloud != undefined){
        this.ecloud = this.endpoints.servers.cloud
      }

      if(this.endpoints.servers.onprem != undefined){
        this.eonprem = this.endpoints.servers.onprem
      }
    }
  }

  deletecomProduct(value){
    this.delCP = ''
    this.delCP = value
  }

  deleteCP()
  {
    this.firebaseservice.delCP(this.delCP, this.company_id).then(success => {
      alert("Deleted successfully")
    })
  }

  editLicExpDt(license_expiry_dt, comprodkey, value){
    this.upd_license_expiry_dt = ''
    this.upd_comprodkey = ''
    this.value_toggle = ''
    this.upd_license_expiry_dt = license_expiry_dt
    this.upd_comprodkey = comprodkey
    this.value_toggle = value
  }

  updateLicExpDt(){

    if(this.value_toggle == 'competitor')
    {
      this.firebaseservice.updLicExpDt(this.upd_comprodkey,this.company_id, this.upd_license_expiry_dt).then(success => {
        alert("Updated Successfully")
      })
    }

    if(this.value_toggle == 'raksha')
    {
      this.firebaseservice.updLicExpDtR(this.upd_comprodkey, this.upd_license_expiry_dt).then(success => {
        alert("Updated Successfully")
      })
    }
  }

  onupdlicdtChange(value){
    this.upd_license_expiry_dt = value
  }


changeprod(value)
{
  //console.log(value)
  this.productkey = value
}

changecompname(value){
  //console.log(value)
  this.competitorid = value
}

onlicdtChange(value){
  this.license_expiry_dt = value
}

  editAccountName(companyname, companyid)
  {
    this.ecompanyname = ''
    this.ecompanyid = ''
    this.ecompanyname = companyname
    this.ecompanyid = companyid
  }

  editIndustryType(industrytype, companyid)
  {
    this.eindustrytype = ''
    this.ecompanyid = ''
    this.eindustrytype = industrytype
    this.ecompanyid = companyid
  }

  editCompanyType(companytype, companyid)
  {
    this.ecompanytype = ''
    this.ecompanyid = ''
    this.ecompanytype = companytype
    this.ecompanyid = companyid
  }

  editEmpCount(empcount, companyid)
  {
    this.eempcount = ''
    this.ecompanyid = ''
    this.eempcount = empcount
    this.ecompanyid = companyid
  }

  changeCompanyType(value){
    this.ecompanytype = value;
  }

  removenull(customerlandscape)
  {
    return customerlandscape.filter(function(e){return e});
  }


  returnrupee(amount)
  {
    var retrupee = amount.toLocaleString('en-IN',{ style: 'currency', currency: "INR",minimumFractionDigits:2,maximumFractionDigits:2 });
    return retrupee
  }

  getTotal() {
    let total = 0;
    if (this.oppoaccounts)
    {
      for (var i = 0; i < this.oppoaccounts.length; i++) {
        if (this.oppoaccounts[i].value) {
          total += this.oppoaccounts[i].value;
          this.totalamount = total;
        }
      }
    }
    else 
    {
      total = 0
    }

    return total;
  }

  returnindustrytype(industry_type)
  {
    if(industry_type)
    {
      var returnvalue = industry_type
    }
    else 
    {
      returnvalue = 'NA'
    }

    return returnvalue

  }

  returncompanytype(company_type)
  {
    if(company_type)
    {
      var returnvalue = company_type
    }
    else 
    {
      returnvalue = 'NA'
    }

    return returnvalue

  }


  togglerakprod() 
  {
    this.rakprods = true
    this.compprods = false
    this.contactshow = false
    console.log("toggle", this.rakprods, this.compprods, this.contactshow)
  }

  togglecompprods() 
  {
    this.rakprods = false
    this.compprods = true
    this.contactshow = false
    // console.log(this.isActive)
    console.log("toggle1", this.rakprods, this.compprods, this.contactshow)
  }

  togglechats() 
  {
    this.rakprods = false
    this.compprods = false
    this.contactshow = true
    // console.log(this.isActive_chats)
    console.log("toggle2", this.rakprods, this.compprods, this.contactshow)
  }

    ngOnInit() {
    this.company_id = ''
    this.account = [];
    this.account_name = '';
    this.company_type = '';
    this.industry_type = '';
    this.employee_count = '';
    this.rakprods = true
    this.customerlandscape = [];
    this.customerlandscapeComp = [];
    this.compproducts = []
    this.competitor_name = ''
    this.Product_name = ''
    this.productkey = ''
    this.competitorid = ''
    this.oppoaccounts = []
    this.license_expiry_dt = null;
    //this.endpoints = []
    this.totalendpoints = 0;
    this.elaptops = 0
    this.emobiles = 0
    this.eonprem = 0
    this.ecloud = 0
    this.edesktops = 0
    this.endpoints = []
    this.endpoints_his = []
    this.employee_count_his = []
    this.dataEmp = []
    this.dateConv = null;
    this.dataConv = 0;
    this.dateEmp = []
    this.dateEnd = []
    this.dataEnd = []

    //Display the company detail based on company id on respective fields
    this.company_id = this.router.snapshot.params['companyid'];
    //console.log("companyid", this.company_id)

    this.firebaseservice.getProducts().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(product => {
      this.products = product;
    //console.log("log",this.products )
    });

    this.firebaseservice.getCompetitors().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(competitor => {
      this.competitors = competitor;
      //console.log("com", this.competitors)
    });

    this.firebaseservice.getOpportunitiesbycmpnyid(this.company_id).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(companies => {
      this.oppoaccounts = companies;
      //console.log(this.oppoaccounts)
      companies.forEach((el: any) => 
      {
        this.firebaseservice.getproductname(el.product_key).snapshotChanges().subscribe((val: any)=>
        {
          var categorylist = val.payload.val().category
          // console.log(categorylist)
          if (categorylist == undefined)
          {
            //console.log("found none")
          }
          else 
          {
            //console.log(categorylist.category)
            this.customerlandscape.push(categorylist.category)
          }
        
        })
      })

      this.customerlandscape = this.customerlandscape
      //console.log("this.customerlandscape", this.customerlandscape)

    });


    this.firebaseservice.getAccount(this.company_id).snapshotChanges().subscribe(value => {
      this.account = value.payload.val()
       // console.log(this.account)
       this.account_name = this.account.companyname
       this.industry_type = this.account.industrytype
       this.company_type = this.account.companytype
       this.employee_count = this.account.employee_count

       if(this.account.employee_count_his != undefined) {
         this.employee_count_his = Object.values(this.account.employee_count_his)
          this.dataEmp = [];
          this.dateEmp = [];
   
          //this.lineChartLabelsEm = []

         for(let i=0; i < Object.keys(this.employee_count_his).length; i++){
          this.dateConv = null;
            this.dateConv = new Date(this.employee_count_his[i].create_date)
            this.dataEmp.push(this.employee_count_his[i].emp_count)
            this.dateEmp.push(moment(this.dateConv).format('ll'))


         }
          
         
      }

    


        this.lineChartDataEm = [
          {data: this.dataEmp , label: 'Employee Count'}
        ];

        this.lineChartLabelsEm = this.dateEmp
        // console.log("dataEmp", this.lineChartDataEm, this.lineChartLabelsEm)




      if(this.account.endpoints_his != undefined){
       this.endpoints_his = Object.values(this.account.endpoints_his)

       this.dataEnd = [];

       for(let i=0; i < Object.keys(this.endpoints_his).length; i++){
            this.dateConv = null;
            this.dateConv = new Date(this.endpoints_his[i].create_date)
            this.dataConv = 0;
            this.dataConv = Number(this.endpoints_his[i].desktop) + Number(this.endpoints_his[i].mobile) + Number(this.endpoints_his[i].laptop)
             + Number(this.endpoints_his[i].servers.cloud) + Number(this.endpoints_his[i].servers.onprem)
            this.dataEnd.push(this.dataConv)
            
            this.dateEnd.push(moment(this.dateConv).format('ll'))
         }

     }




      this.lineChartDataEnd = [
          {data: this.dataEnd , label: 'Endpoints'}
        ];

        this.lineChartLabelsEnd = this.dateEnd

        console.log("dataEmp", this.lineChartDataEnd, this.lineChartLabelsEnd)

      

       console.log("his", this.endpoints_his, this.employee_count_his)
       this.contacts = Object.values(this.account.contact_persons)
       if(this.account.competitor_products != undefined)
       {
        this.compproducts = Object.values(this.account.competitor_products)
        }
        else
      {
        this.compproducts = []
       //console.log(this.contacts)
      }

      this.compproducts.forEach((el: any) => 
      {
        this.firebaseservice.getproductname(el.productid).snapshotChanges().subscribe((val: any)=>
        {
          var categorylistComp = val.payload.val().category
          // console.log(categorylist)
          if (categorylistComp == undefined)
          {
            console.log("found none")
          }
          else 
          {
            this.customerlandscapeComp.push(categorylistComp.category)
          }
        
        })
      })








      this.customerlandscapeComp = this.customerlandscapeComp

      if(this.account.endpoints != undefined){
        this.endpoints = this.account.endpoints
      }
      else
      {
         this.endpoints = []
      }

    if(this.endpoints.length != 0){
 
      if(this.endpoints.laptop == undefined){
        this.endpoints.laptop = 0
      }

      if(this.endpoints.desktop == undefined){
        this.endpoints.desktop = 0
      }

      if(this.endpoints.mobile == undefined){
        this.endpoints.mobile = 0
      }

      if(this.endpoints.servers.cloud == undefined){
        this.endpoints.servers.cloud = 0
      }

      if(this.endpoints.servers.onprem == undefined){
        this.endpoints.servers.onprem = 0
      }
    }

      if(this.endpoints.length == 0)
      {
        this.totalendpoints = 0
      }
      else {
        this.totalendpoints = Number(this.endpoints.laptop) + Number(this.endpoints.desktop) + Number(this.endpoints.mobile) + Number(this.endpoints.servers.onprem) + Number(this.endpoints.servers.cloud)
      }

      //console.log("endpointd",this.endpoints, this.totalendpoints)
     })


  }
}
