import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleserviceService {
  date: Date = new Date();
  address:string="A-Wing, 8th Floor, Godrej Eternia C, Old Pune Mumbai Highway, Wakdewadi, Shivajinagar, Pune";

  getDate(): Date {
    return this.date;
  }
  getaddress(): string {
    return this.address;
  }
  constructor()
  { }
}
