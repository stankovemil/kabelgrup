import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "../header/header.component";
import {HomeComponent} from "../home/home.component";
import {ProjectsComponent} from "../projects/projects.component";
import {ProductsComponent} from "../products/products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, ProjectsComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cable';
}
