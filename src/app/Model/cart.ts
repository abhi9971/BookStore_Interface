export class Cart{
    userId:number;
    bookId:number;
    quantity:number;

    constructor(bookId:number,userId:number,quantity:number){
        this.userId=userId;
        this.bookId=bookId;
        this.quantity=quantity;
    }
}