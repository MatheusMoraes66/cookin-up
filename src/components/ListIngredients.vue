<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';
export default {
    components: {
        Tag
    },
    props: {
        ingredients: { type: Array as PropType<Array<string>>, required: true}
    }
}
</script>

<template>
    <section>
        <span class="caption-lg your-text-list">
            Sua Lista:
        </span>
        <ul v-if="ingredients.length != 0" class="your-ingredients-list">
            <li v-for="ingredient in ingredients" v-bind:key="ingredient" class="ingredients">
                <Tag :text="ingredient" active />
            </li>
        </ul>
        <p v-else class="paragraph empty-list">
            <img src="../assets/images/icons/empty-list.svg" alt="Icone de pesquisa">
            Sua lista está vazia, selecione ingredientes para iniciar.
        </p>

    </section>
</template>

<style scoped>
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
</style>