<script lang="ts">
import { getRecipes } from '@/http';
import type IRecipe from '@/interface/IRecipe';
import Button from './Button.vue';
import CardRecipe from './CardRecipe.vue';
import { compareTheLists } from '@/utils/compare';
import type { PropType } from 'vue';

export default {
    props: {
        ingredients: { type: Array as PropType<Array<string>>, required: true },
    },
    data() {
        return {
            recipes: [] as IRecipe[]
        }
    },
    components: {
        Button, CardRecipe
    },
    async created() {
        const recipes = await getRecipes();

        this.recipes = recipes.filter((recipe: IRecipe) => compareTheLists(recipe.ingredients, this.ingredients))
    },
    emits: ['editIngredients']
}
</script>

<template>
    <section class="recipe-list">
        <h1 class="header title-recipe">Receitas</h1>

        <p class="paragraph count-recipe">Resultados encontrados: {{ recipes.length }}</p>
        <p v-if="recipes.length > 0" class="paragraph instructions">
            Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
        </p>
        <p v-else class="paragraph instructions">
            Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
        </p>
        <ul class="recipes">
            <li v-for="recipe in recipes" v-bind:key="recipe.name">
                <CardRecipe :recipe="recipe"/>
            </li>
        </ul>
        <img 
        v-if="recipes.length == 0" 
            src="../assets/images/no-cooking.png" 
            alt="Foto de uma mulher cozinhando com uma bacia de vidro nas mãos. 
    Ela está sorrindo e está apoiando um celular entre seu rosto e ombro." 
            class="photo-banner"
        > 

        <Button text="Editar lista" @click="$emit('editIngredients')" />
    </section>
</template>

<style scoped>
.recipe-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title-recipe {
    color: var(--medium-green, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.count-recipe {
    color: var(--medium-green);

}

.instructions {
    text-align: center;
    gap: 10px;
    margin-bottom: 2rem;
}

.recipes {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
</style>