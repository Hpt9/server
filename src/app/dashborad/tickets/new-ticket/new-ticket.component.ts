import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss'
})
export class NewTicketComponent {
  @ViewChild('form') private form?:ElementRef<HTMLFormElement>;
  //private form2 = viewChild.required<ElementRef<HTMLFormElement>>('form')
  onSubmit(title:string,text:string){
    console.log(title,text)
    this.form?.nativeElement.reset()
    //this.form2().nativeElement.reset()
  }
}
