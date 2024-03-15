import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../../module/MaterialModule';
import { FormComponent } from "../form/form.component";
import { QrComponent } from '../qr/qr.component';
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [RouterLink, MaterialModule, FormComponent, QrComponent, HomeComponent]
})
export class MenuComponent {

}
