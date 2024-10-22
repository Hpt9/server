import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

interface Ticket{
  id:string;
  title:string;
  request:string;
  status:'open' | 'closed'
}

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {
  @Input({required:true}) ticket!:Ticket;
  @Output() isClosedId = new EventEmitter<string>()
  detailsVisible = signal(false)

  onToggleVisibility(){
    this.detailsVisible.set(!this.detailsVisible())
  }

  changeStatus(id:string){
    this.isClosedId.emit(id)
  }
}
