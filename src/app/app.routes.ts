import { Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SettingsComponent } from './Components/settings/settings.component';

export const routes: Routes = [
  {path:'',redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  {path:'settings',component:SettingsComponent}
];
