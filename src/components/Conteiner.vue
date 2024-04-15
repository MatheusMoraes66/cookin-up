<script lang="ts">
import ListIngredients from './ListIngredients.vue';
import CategoryList from './CategoryList.vue';
import Footer from './Footer.vue';
import RecipeList from './RecipeList.vue';

type Screen = 'CategoryList' | 'RecipeList';
export default {
  data() {
    return {
      ingredients: [] as Array<string>,
      screen: 'CategoryList' as Screen
    }
  },
  components: { CategoryList, ListIngredients, Footer, RecipeList},
  methods: {
    addIngredient(ingredient: string) {
      this.ingredients.push(ingredient);
    },
    removeIngredient(ingredient: string) {
      this.ingredients = this.ingredients.filter((item) => item !== ingredient);
    },
    navigate(screen: Screen){
      this.screen = screen;
    }
  }
}
</script>

<template>
  <main class="main-content">
    <ListIngredients :ingredients="ingredients" />
    <!-- Esse componente mantem os states dos components -->
    <KeepAlive include="CategoryList"> 
      <CategoryList  
        v-if="screen == 'CategoryList'"
        @add-ingredient="addIngredient($event)" 
        @remove-ingredient="removeIngredient($event)" 
        @search-for-recipe="navigate('RecipeList')"
      />
      <RecipeList 
        v-else-if="screen == 'RecipeList'" 
        :ingredients="ingredients"
        @edit-ingredients="navigate('CategoryList')"
        />
    </KeepAlive>
  </main>
  <Footer />
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
