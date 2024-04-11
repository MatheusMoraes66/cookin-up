import type ICategory from "@/interface/ICategory";

export async function getCategories() {
    const response = await fetch('https://gist.githubusercontent.com/MatheusMoraes66/85693b01107d46c76c3bab9879bd8f7f/raw/3f24d0da96980af405564ac0ef0f318c13f130f6/categories.json');

    const categories : ICategory[] = await response.json();

    return categories;
}