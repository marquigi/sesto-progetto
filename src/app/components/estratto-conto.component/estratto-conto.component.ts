import { Component, inject } from '@angular/core';
import { ServiceService } from '../../services/service-service';

@Component({
  selector: 'app-estratto-conto.component',
  imports: [],
  templateUrl: './estratto-conto.component.html',
  styleUrl: './estratto-conto.component.css',
})
export class EstrattoContoComponent {
  saldoAttuale = 0

  bankService = inject(ServiceService);

  constructor() {
    this.saldoAttuale = this.bankService.getSaldo()
  }
}
