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

  withdraw = new FormControl('', [Validators.required, Validators.pattern('^\d+(\.\d{1,2})?$')]);

  saldoPrelevato() {

    const prelevato = this.withdraw.value
    console.log(`hai prelevato ${prelevato}`);


  }
}
