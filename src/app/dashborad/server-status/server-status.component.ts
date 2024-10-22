import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online'|'offline'|'unknown'>('online');
  private interval?:ReturnType<typeof setInterval>
  
  constructor(){
    effect(()=>{
      console.log(this.currentStatus())
    })
  }

  ngOnInit (){
    this.interval=setInterval(()=>{
      const rnd = Math.random()
      if(rnd<0.5){
        this.currentStatus.set('online')
      }else if(rnd<0.9){
        this.currentStatus.set('offline')
      }else{
        this.currentStatus.set('unknown')
      }
    },5000)
  }
  ngOnDestroy(){
    console.log("interval cleared")
    clearTimeout(this.interval)
  }
}
