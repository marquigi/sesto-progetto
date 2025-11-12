import { Routes } from '@angular/router';
import { EstrattoContoComponent } from './components/estratto-conto.component/estratto-conto.component';
import { PrelievoComponent } from './components/prelievo.component/prelievo.component';
import { DepositoComponent } from './components/deposito.component/deposito.component';
import { DAssegniComponent } from './components/d-assegni.component/d-assegni.component';
import { DContanteComponent } from './components/d-contante.component/d-contante.component';

export const routes: Routes = [
    { path: '', redirectTo: 'estratto', pathMatch: 'full' },
    { path: 'estratto', component: EstrattoContoComponent },
    { path: 'prelievo', component: PrelievoComponent },
    {
        path: 'deposito', component: DepositoComponent,
        children: [
            { path: 'contante', component: DAssegniComponent },
            { path: 'assegni', component: DContanteComponent }
        ]
    }
];
