import { Component, ContentChild, ElementRef, inject, Input, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)' : 'onClick()'
  }
})
export class ControlComponent {
  @Input({ required: true }) label!: string;
  private el = inject(ElementRef)
  @ContentChild('input') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>
  onClick(){
    console.log(this.el.nativeElement)
    console.log("click")
    console.log(this.control)
  }
}
