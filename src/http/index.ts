import type ICategory from "@/interface/ICategory";
import type IRecipe from "@/interface/IRecipe";

export async function getCategories() {
    const response = await fetch('https://gist.githubusercontent.com/MatheusMoraes66/85693b01107d46c76c3bab9879bd8f7f/raw/3f24d0da96980af405564ac0ef0f318c13f130f6/categories.json');

    const categories : ICategory[] = await response.json();

    return categories;
}

export async function getRecipes(){
    const response = await fetch('https://gist.githubusercontent.com/MatheusMoraes66/813027b3545e9bbd5c7e99f213f64f36/raw/460af9e30bccd630938162e4726553545712c1d7/recipes.json');

    const recipes: IRecipe[] = await response.json();

    return recipes;
}