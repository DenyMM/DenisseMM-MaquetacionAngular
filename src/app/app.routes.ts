import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { FormComponent } from './component/form/form.component';
import { QrComponent } from './component/qr/qr.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'menu', component:MenuComponent},
    {path: 'form', component:FormComponent},
    {path:'codigo', component:QrComponent}
];
