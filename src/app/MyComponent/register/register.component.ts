import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/Model/user';
import { UserserviceService } from 'src/app/Myservices/userservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private service:UserserviceService,private route: ActivatedRoute) { }

   user:user=new user("","","","","")

  ngOnInit(): void {
  }
  onClickRedirectToLogin(){
    console.log(this.user);
    this.service.registerUser(this.user).subscribe(data => {
    });
    this.router.navigate(["login"]);
  }

  onClickLogin(){
    this.router.navigate(["login"]);
  }
}
