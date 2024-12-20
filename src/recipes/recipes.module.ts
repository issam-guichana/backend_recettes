import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeController } from './recipes.controller';
import { RecipeService } from './recipes.service';
import { RecipeSchema } from './recipe.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Recipe', schema: RecipeSchema }])],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
