<template>
    <div class="draggable-header-demo" @touchmove.prevent>
        <draggable-header-view>
            <template slot="header">
                <h3>Elastic Draggable SVG Header</h3>
                <p>Width <a href="http://vuejs.org">Vue.js</a>+<a href="http://dynamicsjs.com">dynamics.js</a></p>
            </template>

            <template slot="content">
                <p>
                    Note this is just an effect demo - there are of course many additional details.
                </p>
            </template>
        </draggable-header-view>
    </div>
    
</template>

<script>
    import DraggableHeaderTemplate from './DraggableHeaderTemplate.vue'

    export default {
        name: "draggable-header",
        components: {
            'draggable-header-view': DraggableHeaderTemplate
        }
    }
</script>

<style scoped>

    h3{
        margin-top: 0;
    }

    a{
        color: #fff;
    }

</style>