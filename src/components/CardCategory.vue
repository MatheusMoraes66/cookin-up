<script lang="ts">
import type ICategory from '@/interface/ICategory';
import type { PropType } from 'vue';
import SelectIngredients from './SelectIngredients.vue';

export default {
  props: {
    category: { type: Object as PropType<ICategory>, required: true }
  },
  components: {
    SelectIngredients
  },
  emits: ['addIngredient', 'removeIngredient']
}
</script>

<template>
  <article class="category">
    <header class="category__header">
      <img v-bind:src="`/image/icons/category_ingredients/${category.image}`" 
      alt="Imagem das categorias dos igredientes" 
      class="category__image">

      <h2 class="paragraph-lg category__name">
        {{ category.name }}
      </h2>

      <ul class="category__ingredients">
        <li v-for="ingredient in category.ingredients" v-bind:key="ingredient">
          <SelectIngredients 
          @remove-ingredient="$emit('removeIngredient', $event)"
          @add-ingredient="$emit('addIngredient', $event)"
          :ingredient="ingredient"/>
        </li>
      </ul>
    </header>
  </article>
</template>

<style scoped>
.category {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--white, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.category__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.category__image {
  width: 3.5rem;
}

.category__name {
  text-align: center;
  color: var(--medium-green, #3D6D4A);
  font-weight: 700;
}

.category__ingredients {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>