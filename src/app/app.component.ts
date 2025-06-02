import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-angular';
}
