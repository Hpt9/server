import { Component, EventEmitter, Output } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketComponent } from "./ticket/ticket.component";

interface Ticket{
  id:string;
  title:string;
  request:string;
  status:'open' | 'closed'
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {
  tickets:Ticket[] = []
  addToTickets(obj:{title:string,text:string}){
    const ticket:Ticket = {
      id:Math.random().toString(),
      title:obj.title,
      request:obj.text,
      status:'open'
    } 

    this.tickets.push(ticket)
  }

  onCloseTicket(id:string){
    this.tickets = this.tickets.map((ticket)=>{
      if( ticket.id === id){
          return {...ticket, status:'closed'}
      }
      return ticket;
    })
  }
}
