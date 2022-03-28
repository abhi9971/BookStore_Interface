import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/Myservices/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:UserserviceService,private route: ActivatedRoute) { }
  email!:string;
  password!:string;
  message:any

  ngOnInit(): void {
  }

  submitTest(){
    this.service.Test(this.email,this.password).subscribe((getData:any)=>{
      console.log(getData);
      this.message=getData;
      console.log(this.message);
    });
      if(this.message==1){
        window.alert("Login Successully");

        this.router.navigate(["home"]);
      }
      else if(this.message==0){
        window.alert("inavlid email");
      }   
      else if(this.message==2){
        window.alert("inavlid password");

      } 
    
  }

  onClickRedirectToRegister(){
   this.router.navigate(["register"]);
  }

  onGoToHome(){
    this.service.loginUser(this.email,this.password).subscribe(data => {
    });
    this.router.navigate(["home"]);
  }

  onClickRedirectToforget(){
    this.router.navigate(["forgotpassword"]);
  }
  
}
