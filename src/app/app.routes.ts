import { Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './components/recipe-create/recipe-create.component';
import { RecipeUpdateComponent } from './components/recipe-update/recipe-update.component';
import { RecipeGetSpecificComponent } from './components/recipe-get-specific/recipe-get-specific.component';
import { RecipeDeleteComponent } from './components/recipe-delete/recipe-delete.component';

export const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/create', component: RecipeCreateComponent },
  { path: 'recipes/:id', component: RecipeGetSpecificComponent },
  { path: 'recipes/update/:id', component: RecipeUpdateComponent },
  { path: 'recipes/delete/:id', component: RecipeDeleteComponent },
];
