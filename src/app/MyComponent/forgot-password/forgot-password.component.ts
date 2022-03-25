import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/Myservices/userservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router:Router,private service:UserserviceService,private route: ActivatedRoute) { }
   email!:string;
   password!:string;

  ngOnInit(): void {
  }
  onlogin(){
    console.log("this is my password");
    console.log(this.password);
    this.service.changePassword(this.email,this.password).subscribe(data => {
      console.log("Password Updated Sucessfully"); 
    });
    this.router.navigate(["login"]);
  }
}
