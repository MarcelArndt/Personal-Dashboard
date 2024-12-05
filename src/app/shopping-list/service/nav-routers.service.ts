import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavRoutersService {

  constructor() { }

  modus:string = 'overview';

  switchModus(newModus:string = 'overview'){
    this.modus = newModus;
  }



}
