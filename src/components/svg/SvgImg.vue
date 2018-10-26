<template>
    <g>
        <polygon :points="points"></polygon>
        <circle cx="100" cy="100" r="80"></circle>
        <axis-label v-for="(stat, index) in stats"
                    :stat="stat"
                    :index="index"
                    :total="stats.length">
        </axis-label>
    </g>
</template>

<script>
    function valueToPoint(value, index, total){
        let x = 0;
        let y = -value*0.8;
        let angle = Math.PI * 2 / total * index;
        let cos = Math.cos(angle);
        let sin = Math.sin(angle);
        let tx=x*cos-y*sin +100;
        let ty=x*sin+y*cos+100;
        return {
            x: tx,
            y: ty
        }
    }

    export default {
        name: "svg-img",
        props: ['stats'],
        computed: {
            points(){
                const total = this.stats.length;
                return this.stats.map(function(stat, i){
                    const point = valueToPoint(stat.value, i, total);
                    return point.x+','+point.y;
                }).join(' ');
            }
        },
        components: {
            'axis-label': {
                props: {
                    stat: Object,
                    index: Number,
                    total: Number,
                },
                template: '<text :x="point.x" :y="point.y">{{stat.label}}</text>',
                computed: {
                    point(){
                        return valueToPoint(
                            +this.stat.value + 10,
                            this.index,
                            this.total
                        );
                    }
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

    circle{
        fill: transparent;
        stroke: #999;
    }

    text {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 10px;
        fill: #666;
    }

</style>