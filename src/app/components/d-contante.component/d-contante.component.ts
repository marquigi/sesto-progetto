import { Component } from '@angular/core';
import { ServiceService } from '../../services/service-service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-d-contante.component',
  imports: [],
  templateUrl: './d-contante.component.html',
  styleUrl: './d-contante.component.css',
})
export class DContanteComponent {

  constructor(private service: ServiceService) { }

  cashDeposit = new FormControl('', [Validators.required, Validators.pattern('^\\d+(\\.\\d{1,2})?$')]);

  saldoAttuale: number = 0;

  ngOnInit() {
    this.saldoAttuale = this.service.getSaldo();
  }

  saldoPrelevato() {
    const depositato = Number(this.cashDeposit.value);
    console.log(`Hai depositato ${depositato}`);

    if (isNaN(depositato) || depositato <= 0) {
      console.log('Importo non valido');
      return
    }

    this.service.deposita(depositato);
    console.log(`Hai depositato ${depositato}. Saldo attuale: ${this.service.getSaldo()}`);

    this.ngOnInit();
    this.cashDeposit.reset('');
  }
}
