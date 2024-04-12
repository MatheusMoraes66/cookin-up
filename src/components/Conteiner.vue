<script lang="ts">
import ListIngredients from './ListIngredients.vue';
import ListCategories from './ListCategories.vue';
    export default {
        data(){
            return {
                ingredients: []as Array<string>
            }
        },
        components: {ListCategories, ListIngredients},
        methods: {
          addIngredient(ingredient: string){
            this.ingredients.push(ingredient);
          },
          removeIngredient(ingredient: string){
           this.ingredients = this.ingredients.filter((item) => item !== ingredient);
          }
        }
    }
</script>

<template>
    <main class="main-content">
        <ListIngredients :ingredients="ingredients"/>
        <ListCategories 
          @add-ingredient="addIngredient($event)" 
          @remove-ingredient="removeIngredient($event)"/>
    </main>
</template>

<style scoped>
.main-content {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--cream, #FFFAF3);
  color: var(--gray, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}



@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
