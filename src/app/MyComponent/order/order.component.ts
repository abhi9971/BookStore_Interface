import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Myservices/order.service';
import { UserserviceService } from 'src/app/Myservices/userservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  title:string="Order Details";
  submitted:boolean=false;
  // order:Order=new Order(0,'',0,0,0,false);
  order:any;
  email:any;
  constructor(private router:Router,private service:OrderService,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.service.getAllOrders().subscribe(data=>{
      console.log("Orders retrieved successfully",data);
      this.order=data;
      this.email=this.order.data[0].user.email;
      console.log(this.email);
      this.userService.getUserRecordByToken(this.email).subscribe((getData:any)=>{
        console.log("Token retrieved successfully");
        this.email=getData.data;
      })
    })
  }
  goToDashboard(){
  //   for(let i=0;i<this.order.data.length;i++){
  //   this.service.deleteOrderRecordById(this.order.data[i].orderID).subscribe(data=>{
  //     console.log(data);
      
  //     // this.router.navigate(['dashboard',this.token]);
  //   });
  // }
    this.router.navigate(["home"]);

  }
}
