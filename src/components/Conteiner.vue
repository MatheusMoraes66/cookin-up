<script lang="ts">
import SelectIngredients from './SelectIngredients.vue';
import Tag from './Tag.vue';
    export default {
        data(){
            return {
                ingredients: ['Alho', 'Manteiga', 'Orégano']
            }
        },
        components: {SelectIngredients, Tag}
    }
</script>

<template>
    <main class="main-content">
        <section>
            <span class="caption-lg your-text-list">
                Sua Lista:
            </span>
            <ul v-if="ingredients.length != 0" class="your-ingredients-list">
                <li v-for="ingredient in ingredients" v-bind:key="ingredient" class="ingredients">
                  <Tag :text="ingredient" active/>
                </li>
            </ul>
            <p v-else class="paragraph empty-list">
              <img src="../assets/images/icons/empty-list.svg" alt="Icone de pesquisa">
              Sua lista está vazia, selecione ingredientes para iniciar.
            </p>
        
        </section>
        <SelectIngredients/>
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

.your-text-list {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.your-ingredients-list {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}



.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
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
