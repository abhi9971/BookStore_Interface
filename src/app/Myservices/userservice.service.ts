import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

constructor(private http:HttpClient) { }

registerUser(user:any){
  return this.http.post("http://localhost:8080/user/register",user);
}

loginUser(email:string,password:string){
  const params = new HttpParams()
  .set('email', email)
  .set('password', password);
  return this.http.get("http://localhost:8080/user/login"+"?email="+email+"&password="+password);
}

changePassword(email:string,password:string){
  const params = new HttpParams()
  .set('email', email)
  .set('password', password);
  return this.http.post("http://localhost:8080/user/forgotPassword/",params);
}

Test(email:string, password:string){
  return this.http.get("http://localhost:8080/user/logintest"+"?email="+email+"&password="+password);
}

getUserRecordByToken(email:any){
  return this.http.get("http://localhost:8080/user/getByEmailId/"+email)
}

updateUserRecordById(Id:any,user:any){
  return this.http.put("http://localhost:8080/user/update/"+Id,user);
}
}
