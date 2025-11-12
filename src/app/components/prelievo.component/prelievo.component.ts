import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../../services/service-service';

@Component({
  selector: 'app-prelievo.component',
  imports: [ReactiveFormsModule],
  templateUrl: './prelievo.component.html',
  styleUrl: './prelievo.component.css',
})
export class PrelievoComponent {

  constructor(private service: ServiceService) { }

  withdraw = new FormControl('', [Validators.required, Validators.pattern('^\\d+(\\.\\d{1,2})?$')]);

  saldoAttuale: number = 0;

  ngOnInit() {
    this.saldoAttuale = this.service.getSaldo();
  }

  saldoPrelevato() {

    const prelevato = Number(this.withdraw.value)
    console.log(`hai prelevato ${prelevato}`);

    if (isNaN(prelevato) || prelevato <= 0) {
      console.log('Importo non valido');
      return;
    }

    this.service.preleva(prelevato);
    console.log(`Hai prelevato ${prelevato}. Saldo attuale: ${this.service.getSaldo()}`);

    this.ngOnInit();

  }
}
