import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe } from './recipe.schema';

@Injectable()
export class RecipeService {
  constructor(@InjectModel('Recipe') private readonly recipeModel: Model<Recipe>) {}

  // Créer une recette
  async create(recipe: Recipe): Promise<Recipe> {
    const newRecipe = new this.recipeModel(recipe);
    return newRecipe.save();
  }

  // Récupérer toutes les recettes
  async findAll(): Promise<Recipe[]> {
    return this.recipeModel.find().exec();
  }

  // Récupérer une recette par ID
  async findById(id: string): Promise<Recipe> {
    return this.recipeModel.findById(id).exec();
  }

  // Mettre à jour une recette
  async update(id: string, recipe: Recipe): Promise<Recipe> {
    return this.recipeModel.findByIdAndUpdate(id, recipe, { new: true }).exec();
  }

  // Supprimer une recette
  async delete(id: string): Promise<any> {
    return this.recipeModel.findByIdAndDelete(id).exec();
  }
}

