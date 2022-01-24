import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'rifornimento',
        data: { pageTitle: 'benzappApp.rifornimento.home.title' },
        loadChildren: () => import('./rifornimento/rifornimento.module').then(m => m.RifornimentoModule),
      },
      {
        path: 'tessera',
        data: { pageTitle: 'benzappApp.tessera.home.title' },
        loadChildren: () => import('./tessera/tessera.module').then(m => m.TesseraModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
