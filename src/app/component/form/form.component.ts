import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../../module/MaterialModule';
import { QrComponent } from '../qr/qr.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink, MaterialModule, QrComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  

}
