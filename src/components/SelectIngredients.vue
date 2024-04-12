<script lang="ts">
import Tag from './Tag.vue';
export default {
    props: {
        ingredient: { type: String, required: true}
    },
    data() {
        return {
            select: false
        }
    },
    components: {
        Tag
    },
    methods: {
        handleClick(){
            this.select = !this.select;

            if(this.select){
                this.$emit('addIngredient', this.ingredient);
            } else {
                this.$emit('removeIngredient', this.ingredient);
            }

        }
    },
    emits: ['addIngredient', 'removeIngredient']
}
</script>

<template>
    <button class="ingredient" v-on:click="handleClick" v-bind:aria-pressed="select">
        <Tag :text="ingredient"  :active="select" />
    </button>
</template>

<style scoped>
.ingredient{
    cursor: pointer;
}
</style>