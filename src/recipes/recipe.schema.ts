import * as mongoose from 'mongoose';

export const RecipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ingredients: [String],
  imageUrl: String,
});

export interface Recipe extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  imageUrl: string;
}
