import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: async () => (await import('./customers/customers.module')).CustomersModule
  },
  {
    path: 'orders',
    loadChildren: async () => (await import('./orders/orders.module')).OrdersModule
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
