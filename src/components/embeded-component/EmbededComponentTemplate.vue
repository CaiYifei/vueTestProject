<template>
    <div>
        <select>
            <slot></slot>
        </select>
    </div>
    
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "embeded-component-template",
        props: ['options', 'value'],
        mounted(){
            const vm = this;
            $(this.$el).select2({data: this.options})
                .val(this.value)
                .trigger('change')
                .on('change', function(){
                    vm.$emit('input', this.value);
                });
        },
        watch: {
            value(value){
                $(this.$el).val(value)
                    .trigger('change');
            },
            options(options){
                $(this.$el).empty()
                    .select2({data: options});
            }
        },
        destroyed(){
            $(this.$el).off().select2('destroy');
        }
    }
</script>

<style scoped>
    select{
        min-width: 300px;
    }
</style>