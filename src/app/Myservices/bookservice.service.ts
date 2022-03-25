import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http:HttpClient) { }

  registerBook(book:any){
    return this.http.post("http://localhost:8080/book/insert",book);
  }

  sortBookInAscending(){
    return this.http.get("http://localhost:8080/book/sortAsc");
  }

  sortBookInDescending(){
    return this.http.get("http://localhost:8080/book/sortDesc");
  }

  getAllBooks(){
    return this.http.get("http://localhost:8080/book/getAll");
  }

  getBookById(Id:number){
    return this.http.get("http://localhost:8080/book/getBy/"+Id);
  }

  searchBookByName(name:string){
    return this.http.get("http://localhost:8080/book/searchByBookName/"+name);
  }

  updateBookById(Id:number,book:any){
    return this.http.put("http://localhost:8080/book/updateBookById/"+Id,book);
  }

  updateBookQuantity(Id:number,quantity:number){
    return this.http.put("http://localhost:8080/book/updateQuantity/"+Id,quantity);
  }
  
}
