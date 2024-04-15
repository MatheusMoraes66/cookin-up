<script lang="ts">
import type IRecipe from '@/interface/IRecipe';
import type { PropType } from 'vue';

export default {
  props: {
    recipe: { type: Object as PropType<IRecipe>, required: true }
  }
}
</script>

<template>
  <article class="recipe">

    <head class="recipe__header">
      <img v-bind:src="`/image/recipes/${recipe.image}`" alt="Imagem da receita" class="recipe__image">
    </head>
    <footer class="recipe__footer">
      <p class="recipe__name">
        {{ recipe.name }}
      </p>
    </footer>
  </article>
</template>

<style scoped>
.recipe {
  width: 19.5rem;
  border-radius: 1rem;
  background: var(--white, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipe__header {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
}

.recipe__footer {
  display: flex;
  padding: 32px 0px 32px 0px;
  align-items: center;
  gap: 0.5rem;
}

.recipe__image {
  border-radius: 16px 16px 0px 0px;
  width: 100%;
  height: 150px;
  gap: 10px
}

.recipe__name {
  text-align: center;
  color: var(--medium-green, #3D6D4A);
  font-weight: 700;
}
</style>