<template>
    <div class="grid-demo">
        <h3>Grid</h3>
        <form id="search">
            Search <input name="query" v-model="searchQuery">
        </form>
        <demo-grid
                :data="gridData"
                :columns="gridColumns"
                :filter-key="searchQuery">
        </demo-grid>
    </div>
</template>



<script>
    import GridTable from '@/components/grid/GridTable.vue';

    export default {
        name: "grid",
        data(){
            return {
                searchQuery: '',
                gridColumns: ['name', 'power'],
                gridData: [
                    { name: 'Chunk Norris', power: Infinity },
                    { name: 'Bruce Lee', power: 9000 },
                    { name: 'Jackie Chan', power: 7000 },
                    { name: 'Jet Li', power: 8000}
                ]
            };
        },
        components: {
            'demo-grid': GridTable
        }
    }
</script>

<style scoped>

</style>