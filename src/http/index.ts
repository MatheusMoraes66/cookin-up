import type ICategory from "@/interface/ICategory";

export async function getCategories() {
    const response = await fetch('https://gist.githubusercontent.com/MatheusMoraes66/85693b01107d46c76c3bab9879bd8f7f/raw/62955406a16cdc967dd117278422ec841a4b6b77/categories.json');

    const categories : ICategory[] = await response.json();

    return categories;
}