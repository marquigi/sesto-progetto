import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {

  saldo: number = 7000;

  constructor(private router: Router) { }

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
      alert("Confermiamo che l'operazione è andata a buon fine.")
      this.router.navigate(['/']);
    }
  }

  deposita(importo: number) {
    console.log('Hai depositato!');
    if (isNaN(importo) || importo <= 0) {
      alert('Attenzione: importo NON valido')
      return
    } else {
      this.saldo += importo;
      alert("Confermiamo che l'operazione è andata a buon fine.")
      this.router.navigate(['/']);
      return this.saldo
    }
  }

}
