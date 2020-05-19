import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reservation-app';

  constructor(private httpClient: HttpClient) {
  }

  private baseUrl = 'http://localhost:8080';
  private reservationUrl = this.baseUrl + '/room/v1/reservation/';
  rooms: Room[] = [];

  ngOnInit(): void {
    this.rooms = [new Room('127', '127', '150'), new Room('128', '128', '150'), new Room('129', '129', '150')];
  }
}

export class Room {
  constructor(id: string, roomNumber: string, price: string) {
    this.id = id;
    this.roomNumber = roomNumber;
    this.price = price;
  }

  id: string;
  roomNumber: string;
  price: string;
}
