import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RecipeService } from './recipes.service';
import { Recipe } from './recipe.schema';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  // Endpoint pour créer une recette
  @Post()
  async create(@Body() recipe: Recipe) {
    return this.recipeService.create(recipe);
  }

  // Endpoint pour récupérer toutes les recettes
  @Get()
  async findAll() {
    return this.recipeService.findAll();
  }

  // Endpoint pour récupérer une recette par ID
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.recipeService.findById(id);
  }

  // Endpoint pour mettre à jour une recette
  @Put(':id')
  async update(@Param('id') id: string, @Body() recipe: Recipe) {
    return this.recipeService.update(id, recipe);
  }

  // Endpoint pour supprimer une recette
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.recipeService.delete(id);
  }
}

