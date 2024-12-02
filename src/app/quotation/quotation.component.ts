import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface quoteObject {
  id:number | 0;
  punchline:string | '';
  setup:string | '';
  type:string | '';
}

@Component({
  selector: 'app-quotation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.scss'
})
export class QuotationComponent {
  latestDate:number | undefined;
  cooldownTime:number = 1500;
  latestQuotes?:quoteObject;
  currentJoke:string = '';

  checkDate():boolean{
    let timeIsUp:boolean = false;
    let currentDate:number = Date.now();
    if(!this.latestDate){
      this.latestDate = Date.now();
      return true
    } 
    timeIsUp = currentDate - this.cooldownTime >= this.latestDate? true : false;
    if(timeIsUp) this.latestDate = Date.now();
    return timeIsUp
  }

  ngOnInit(){
    this.getQuote();
  }

  async getQuote(){
    let timeValue = this.checkDate();
    let response:Response;
    let quotes:quoteObject;
    if(timeValue){
      try {
        response = await fetch('https://official-joke-api.appspot.com/random_joke');
        quotes = await response.json();
        this.latestQuotes = quotes;
        this.currentJoke = this.latestQuotes.setup + ' ' + this.latestQuotes.punchline;
      } catch (error) {
      }
    }
  }

}
