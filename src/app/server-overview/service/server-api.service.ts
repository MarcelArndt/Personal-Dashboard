import { Injectable } from '@angular/core';
import { serverObj } from '../interface/types';

@Injectable({
  providedIn: 'root'
})
export class ServerApiService {

  constructor() { }
  requestCooldown:number = 60000;
  address:string = '2.58.54.131';
  isEditModus:boolean = false;
  latestRequest?:number;
  currentCooldown:number = 0;

  serverData: serverObj = {
    status: false,
    ip: '',
    name: '',
    maxPlayer: 0,
    onlinePlayer: 0,
    version: ''
  };

  setAddress(address:string){
    if(address){
      this.address = address as string;
    }
  }

  switchModus(){
    this.isEditModus = !this.isEditModus;
  }

  changeAdress(address:string){
    this.address = address;
  }

  get getAddress(){
    return this.address;
  }

  saveInLocalStorage(){
    let data = JSON.stringify(this.serverData);
    localStorage.setItem('personalDashboardServerData', data);
  }

  async loadFromLocalStorage(){
    let item = localStorage.getItem('personalDashboardServerData');
    this.serverData = item? JSON.parse(item) : await this.request();
  }

  init(){
    if(!this.address) return
    this.loadFromLocalStorage();
    this.checkForCooldownTimer();
      if(Date.now() - this.requestCooldown >= this.latestRequest!){
        this.setCooldown();
        this.request();
        console.log('Refresh Data Request');
      } else {
        this.currentCooldown = Math.floor((Date.now() - this.latestRequest! - this.requestCooldown) / 1000 * -1);
        setTimeout(() => {this.init()}, 1000);
      }
  }
  
  checkForCooldownTimer(){
    let timeInStorage = sessionStorage.getItem('latestRequest');
    if(!timeInStorage) sessionStorage.setItem('latestRequest',`${Date.now()}`);
    this.latestRequest = Number(timeInStorage);
  }

  setCooldown(){
    let time = Date.now()
    sessionStorage.setItem('latestRequest',`${time}`);
    this.latestRequest = time;
  }

  async request(){
    try{
      let url = `https://api.mcsrvstat.us/3/${this.address}`
      let response:Response = await fetch(url);
      let data = await response.json();
      await this.parseData(data);
    } catch(error){
      this.resetData();
      console.error('Ops, there is no connection!', error);
    }
    this.saveInLocalStorage();
    this.init();
  }

  resetData(){
    this.serverData!.status = false;
    this.serverData!.ip = 'no Server found';
    this.serverData!.version = 'no Version found';
    this.serverData!.onlinePlayer = 0;
    this.serverData!.maxPlayer =  0;
    this.serverData!.name = 'No Name';
  }

 async parseData(data:any){
    this.serverData!.status = await data?.online || false;
    this.serverData!.ip = await data?.ip || '';
    this.serverData!.version = await data?.version || '';
    this.serverData!.onlinePlayer = await data?.players.online || 0;
    this.serverData!.maxPlayer = await data?.players.max || 0;
    this.serverData!.name = await data?.motd.clean[0] || '';
  }

}
