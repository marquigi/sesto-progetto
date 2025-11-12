import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  saldo: number = 7000;

  constructor() { }

  getSaldo() {
    return this.saldo;
  }

  preleva(importo: number) {
    console.log('hai prelevato!');
    if (this.saldo < importo) {
      alert(`Attenzione: importo superiore al saldo disponibile (${this.saldo}€).`)
      return
    } else {
      this.saldo -= importo;
    }
  }

}
