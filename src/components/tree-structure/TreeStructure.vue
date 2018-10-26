<template>
    <div class="tree-structure-demo">
        <h3>Tree Structure</h3>
        <p>
            (You can double click on an item to true it into a folder)
        </p>
        <ul id="demo">
            <item class="item"
                  :model="treeData">
            </item>
        </ul>
    </div>
</template>

<script>
    import TreeStructureItem from '@/components/tree-structure/TreeStructureItem.vue';

    const data = {
        name: 'My Tree',
        children: [
            { name: 'hello'},
            { name: 'wat' },
            {
                name: 'child folder',
                children: [
                    {
                        name: 'child folder',
                        children : [
                            { name: 'hello' },
                            { name: 'wat' }
                        ]
                    },
                    { name: 'hello' },
                    { name: 'wat' },
                    {
                        name: 'child folder',
                        children: [
                            { name: 'hello' },
                            { name: 'wat' }
                        ]
                    },
                ]
            },
        ]
    };

    export default {
        name: "tree-structure",
        components: {
            'item': TreeStructureItem
        },
        data(){
            return {
                treeData: data
            };
        }
    }
</script>

<style scoped>
    .item {
        cursor: pointer;
    }

    ul {
        text-align: left;
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
    }
</style>