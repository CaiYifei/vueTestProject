<template>
    <li>
        <div :class="{bold:isFolder}"
             @click = "toggle"
             @dbclick="changeType">
            {{model.name}}
            <!--<span v-if="isFolder">[{{open?'-':'+'}}]</span>-->
            <span v-if="isFolder">
                <i v-if="open" class="fa fa-folder-open-o" aria-hidden="true"></i>
                <i v-if="!open" class="fa fa-folder-o" aria-hidden="true"></i>
            </span>



        </div>
        <ul v-show="open" v-if="isFolder">
            <item class="item"
                  v-for="(model, index) in model.children"
                  :key="index"
                  :model="model">
            </item>
            <li class="add" @click="addChild">
                +
            </li>
        </ul>
    </li>
</template>

<script>
    export default {
        name: "item",
        props: {
            model: Object
        },
        data(){
            return {
                open: false
            }
        },
        computed: {
            isFolder(){
                return this.model.children && this.model.children.length;
            }
        },
        methods: {
            toggle(){
                if(this.isFolder){
                    this.open=!this.open;
                }
            },
            changeType(){
                if(!this.isFolder){
                    Vue.set(this.model, 'children', []);
                    this.addChild();
                    this.open = true;
                }
            },
            addChild(){
                this.model.children.push({
                    name: 'new stuff'
                });
            }
        }
    }
</script>

<style scoped>
    .item {
        cursor: pointer;
    }

    .bold {
        font-weight: bold;
    }

    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
    }
</style>