import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./dashborad/server-status/server-status.component";
import { TrafficComponent } from "./dashborad/traffic/traffic.component";
import { TicketComponent } from "./dashborad/ticket/ticket.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketComponent],
})
export class AppComponent {

  
}
