import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipeModule } from './recipes/recipes.module';

;

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/recettes'),
    RecipeModule,
  ],
})
export class AppModule {}
