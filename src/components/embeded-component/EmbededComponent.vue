<template>
    <div>
        <p>Selected: {{selected}}</p>
        <select2 :option="options" v-model="selected">
            <option disabled value="0"></option>
        </select2>
    </div>
</template>

<script>
    import EmbededComponentTemplate from './EmbededComponentTemplate.vue';

    export default {
        name: "embeded-component",
        components: {
            select2: EmbededComponentTemplate
        },
        data(){
            return {
                selected: 2,
                options: [
                    {id: 1, text: 'Hello'},
                    {id:2, text: 'World'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>