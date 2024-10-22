import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, ElementRef, inject, Input, input, ViewEncapsulation } from '@angular/core';

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
//implements AfterContentInit
  @Input({ required: true }) label!: string;
  private el = inject(ElementRef)
  @ContentChild('input') private control?:ElementRef<HTMLInputElement | HTMLTextAreaElement>
  // constructor(){
  //   afterRender(()=>{
  //     console.log("afterR")
  //   })
  //   afterNextRender(()=>{
  //     console.log('AfterNR')
  //   })
  // }
  // ngAfterContentInit(): void {
  //   console.log('After Content Init')
  //   console.log(this.control)
  // }
  
  onClick(){
    // console.log(this.el.nativeElement)
    // console.log("click")
    // console.log(this.control)
  }
}
