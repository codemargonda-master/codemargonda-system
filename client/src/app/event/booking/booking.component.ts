import { Component, OnInit, Input } from '@angular/core';
import { BookroomService } from '../../services/bookroom.service';



import {BookRoom} from '../booking/booking';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [BookroomService]
})
export class EventBookingComponent implements OnInit {
  public ItemFacilities = [];

  public facilitiesArr = [
    {id:1, facility: 'Proyektor',checked:false},
    {id:2, facility : 'Sound System',checked:false},
    {id:3, facility : 'Bawa Sendiri',checked:false}
  ];
  public Jam = [
    {id: 1, h: '08:00'},
    {id: 2, h: '09:00'},
    {id: 3, h: '10:00'},
    {id: 4, h: '11:00'},
    {id: 5, h: '12:00'},
    {id: 6, h: '13:00'},
    {id: 7, h: '14:00'},
    {id: 8, h: '15:00'},
    {id: 9, h: '16:00'},
    {id: 10, h: '17:00'},
    {id: 11, h: '18:00'},
    {id: 12, h: '19:00'},
    {id: 13, h: '20:00'},
  ];
  constructor(private bookroomService: BookroomService) {

   }
  onSubmit(value : any){
    console.log(value);
  }

  ngOnInit() {
    
  }
  addFacilities(data){
    this.ItemFacilities.push(data);
  }
}
