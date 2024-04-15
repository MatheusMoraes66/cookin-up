<script lang="ts">

import { getCategories } from '@/http';
import type ICategory from '@/interface/ICategory';

import CardCategory from './CardCategory.vue';
import Button from './Button.vue';

export default {
  name: 'CategoryList',
  data() {
    return {
      categories: [] as ICategory[]
    }
  },
  async created() {
    // Essa é uma das funções de ciclo de vida do VueJS, ela é 
    // acionada apos algumas propriedades do vue como data() estarem disponiveis.
    this.categories = await getCategories();
  },
  components: {
    CardCategory, Button
  },
  emits: ['addIngredient', 'removeIngredient', 'searchForRecipe']
}
</script>

<template>
  <section class="select-ingredients">
    <h1 class="header title-ingredients">Ingredientes</h1>

    <p class="paragraph instructions">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="category">
      <li v-for="category in categories" v-bind:key="category.name">
        <CardCategory @remove-ingredient="$emit('removeIngredient', $event)"
          @add-ingredient="$emit('addIngredient', $event)" :category="category" />
      </li>
    </ul>

    <p class="paragraph tip">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>

    <Button text="Buscar receitas!" @click="$emit('searchForRecipe')" />
  </section>
</template>

<style scoped>
.select-ingredients {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-ingredients {
  color: var(--medium-green, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions {
  margin-bottom: 2rem;
}

.category {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tip {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .tip {
    margin-bottom: 2.5rem;
  }
}
</style>
