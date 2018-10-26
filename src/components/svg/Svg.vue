<template>
    <div id="svg-demo">
        <svg width="200" height="200">
            <polygraph :stats="stats"></polygraph>
        </svg>

        <div v-for="stat in stats" :key="stat.label">
            <label>{{stat.label}}</label>
            <input type="range" v-model="stat.value" min="0" max="100">
            <span>{{stat.value}}</span>
            <button @click="remove(stat)" class="remove">&times;</button>
        </div>

        <form id="add">
            <input name="newlabel" v-model="newLabel">
            <button @click.prevent="add">Add a Stat</button>
        </form>

        <pre id="raw">{{stats}}</pre>

        <p sytle="font-size: 12px">* input[type='range'] requires IE10 or above</p>

    </div>
</template>

<script>
    import Polygraph from './SvgImg.vue';

    const stats = [
        {label: 'A', value: 100},
        {label: 'B', value: 100},
        {label: 'C', value: 100},
        {label: 'D', value: 100},
        {label: 'E', value: 100},
        {label: 'F', value: 100}
    ];

    export default {
        name: "svg",
        data(){
            return {
                newLabel: '',
                stats
            }
        },
        components: {
            polygraph: Polygraph
        },
        methods: {
            add(){
                if(!this.newLabel) return;
                this.stats.push({
                    label: this.newLabel,
                    value: 100
                });
                this.newLabel = '';
            },
            remove(stat){
                if(this.stats.lenght>3){
                    this.stats.splice(this.stats.indexOf(stat), 1);
                }else{
                    alert('Can\'t delete more!');
                }
            }
        }
    }
</script>

<style scoped>
    polygon{
        fill: #42b983;
        opacity: 0.75;
    }

    label {
        display: inline-block;
        margin-left: 10px;
        width: 20px;
    }

    #raw{
        position: absolute;
        top: 150px;
        right: 50px;
    }

</style>