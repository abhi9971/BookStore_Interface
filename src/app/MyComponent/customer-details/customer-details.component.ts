import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/Myservices/userservice.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  title:string="Customer Details";
  user:any;
  email:any=this.route.snapshot.paramMap.get('email');
  constructor(private route:ActivatedRoute,private router:Router,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.userService.getUserRecordByToken(this.email).subscribe((getData:any)=>{
      console.log("Data retrieved for user",getData);
      this.user=getData.data;
    })

  }

  updateUser(){
    this.userService.updateUserRecordById(this.user.userId,this.user).subscribe(data=>{
      console.log("User record got updated",data);
      this.router.navigate(["ordersummery"]);
    })
  }

}
