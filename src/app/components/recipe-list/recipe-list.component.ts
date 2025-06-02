import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';

interface Recipe {
  _id: string;
  title: string;
  ingredients: string[];
  instructions: string;
  userId: string;
}

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ["./recipe-list.component.css"] 
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  searchTerm: string = "";

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe({
        next: (data) => {
          this.recipes = data,
          this.filteredRecipes = data;
          },
        error: (err) => console.error("Could not get recipe:", err)
      });
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredRecipes = this.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term)
    );
  }
}
