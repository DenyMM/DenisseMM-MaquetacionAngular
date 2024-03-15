import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { FormComponent } from './component/form/form.component';
import { QrComponent } from './component/qr/qr.component';
import { MaterialModule } from '../module/MaterialModule';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MenuComponent, FormComponent, QrComponent, MaterialModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DenisseMM-View';
}
