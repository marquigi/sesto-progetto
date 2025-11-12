import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  saldo: number = 7000

  constructor() { }

  getSaldo() {
    return this.saldo
  }

  preleva(importo: number) {
    console.log('hai prelevato!');
    this.saldo -= importo;
  }

}
