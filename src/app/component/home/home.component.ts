import { Component } from '@angular/core';
import { MaterialModule } from '../../../module/MaterialModule';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDatepickerControl, MatDatepickerPanel } from '@angular/material/datepicker';

export interface PeriodicElement {
  visit: string;
  date: string;
  time: string;
  adm: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {visit: 'Monserrat Carolina García Arreguin', date: '20/01/2024', time: '08:00-09:00', adm: 'Alan Gama Ramos', status: 'APROBADA'},
  {visit: 'Yadira Barron Ríos', date: '20/01/2024', time: '08:00-09:00', adm: 'Alan Gama Ramos', status: 'APROBADA'},
  {visit: 'Melissa Olaya Domínguez', date: '20/01/2024', time: '08:00-09:00', adm: 'Alan Gama Ramos', status: 'APROBADA'},
  {visit: 'Sandra Venegas Guzmán', date: '20/01/2024', time: '08:00-09:00', adm: 'Alan Gama Ramos', status: 'APROBADA'},
  {visit: 'Marisa Ríos Díaz', date: '20/01/2024', time: '08:00-09:00', adm: 'Alan Gama Ramos', status: 'APROBADA'},
  {visit: 'Luis Felipe Delgado Barron', date: '20/01/2024', time: '08:00-09:00', adm: 'Alan Gama Ramos', status: 'APROBADA'},
];


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  displayedColumns: string[] = ['visit', 'date', 'time', 'adm', 'status'];
  dataSource = ELEMENT_DATA;
  picker_another!: MatDatepickerPanel<MatDatepickerControl<any>, any, any>;

  
}
