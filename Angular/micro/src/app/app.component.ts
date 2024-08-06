import { Component } from '@angular/core';
import { Tickets } from './model/Tickets';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  //title = 'micro';
  ticket : Tickets;
  result : string
  ticketArr : Tickets[];
  flag:boolean; 
   
  constructor(private service : TicketService){
   this.ticket = new Tickets();
   this.result = "";
   this.ticketArr = [];
   this.flag = false;
  }

  inserts(data : any){
    this.ticket.id = data.numb;
    this.ticket.from = data.from;
    this.ticket.destination = data.destination;
    this.ticket.seat = data.seat;
    alert(data.numb+" "+data.from+" "+data.destination+" "+data.seat);
    this.result = this.service.inserts(this.ticket);
  }
  updates(data : any){
    this.ticket.id = data.numb;
    this.ticket.from = data.from;
    this.ticket.destination = data.destination;
    this.ticket.seat = data.seat;
    this.result = this.service.updates(this.ticket);
  }
  deletes(data : any){
    this.result = this.service.deletes(data.numb);
  }
  views(data : any){
    this.ticket = this.service.views(data.numb);
    this.result = this.ticket.id + " " +this.ticket.from +" "+this.ticket.destination+" "+this.ticket.seat;
  }
  viewall(){
    this.ticketArr = this.service.viewall();
    this.flag = true;
  }
}
