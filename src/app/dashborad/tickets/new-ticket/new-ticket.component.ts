import { AfterViewInit, Component, ElementRef, EventEmitter, Output, viewChild, ViewChild } from '@angular/core';
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
export class NewTicketComponent implements AfterViewInit{
  @ViewChild('form') private form?:ElementRef<HTMLFormElement>;
  private form2 = viewChild.required<ElementRef<HTMLFormElement>>('form')
  @Output() add = new EventEmitter<{title:string,text:string}>() 
  ngAfterViewInit(): void {
    console.log('After VIew Init')
    console.log(this.form?.nativeElement)
  }
  onSubmit(title:string,text:string){
    this.add.emit({title:title,text:text})
    this.form?.nativeElement.reset()
    //this.form2().nativeElement.reset()
  }
}
