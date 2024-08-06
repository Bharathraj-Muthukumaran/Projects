import { Injectable } from '@angular/core';
import { Tickets } from './model/Tickets';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  url : string;
  ticketArr : Tickets[];
  ticket : Tickets;

  constructor(private http : HttpClient) {
    this.url = "http://localhost:3004/tickets";
    this.ticket = new Tickets();
    this.ticketArr = [];
   }
   inserts(ticket : Tickets){
    alert(ticket.id);
   this.http.post<Tickets>(this.url,ticket).subscribe();
    return "Ticket Booked";
   }
   updates(ticket : Tickets){
    alert(ticket.id);
    this.http.put<Tickets>(this.url+"/"+ticket.id,ticket).subscribe();
    return "Ticket Updated"
    }
   deletes(numb : number){
    this.http.delete<Tickets>(this.url+"/"+numb).subscribe();
    return "Ticket Deleted";
      }
   views(numb : number){
    this.http.get<Tickets>(this.url+"/"+numb).subscribe( data => this.ticket = data);
    return this.ticket;
        }
   viewall(){
    this.http.get<Tickets[]>(this.url).subscribe( data => this.ticketArr = data);
    return this.ticketArr;
          }
}
