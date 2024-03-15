import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../../module/MaterialModule';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [RouterLink, MaterialModule, HomeComponent],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QrComponent {

}
