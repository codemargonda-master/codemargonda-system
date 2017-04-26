import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class BookroomService {

  constructor (private http:Http) { 
    console.log("Book Room Services Intialized");
  }

  getRoomBook(){
    
  }
}
