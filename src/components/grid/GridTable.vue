<template>
    <div class="grid-table-demo">
        <table class="table table-bordered table-striped table-hover">
            <thead>
            <tr>
                <th v-for="key in columns"
                    :key="key"
                    @click="sortBy(key)"
                    :class="{active: sortKey === key}">
                    {{key | capitalize}}
                    <span class="arrow" :class="sortOrders[key]>0?'asc':'dsc'"></span>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="entry in filteredData" :key="entry.name">
                <td v-for="key in columns" :key="entry[key]">
                    {{entry[key]}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "grid-table",
        props: {
            data: Array,
            columns: Array,
            filterKey: String,
        },
        data(){
            const sortOrders = {};
            this.columns.forEach(function(key){
                sortOrders[key]=1;
            });
            return {
                sortKey: '',
                sortOrders: sortOrders,
            }
        },
        computed: {
            filteredData: function(){
                const sortKey = this.sortKey;
                const filterKey = this.filterKey && this.filterKey.toLowerCase();
                const order = this.sortOrders[sortKey] || 1;
                let data = this.data;
                if(filterKey){
                    data=data.filter(function(row){
                        return Object.keys(row).some(function(key){
                            return String(row[key]).toLowerCase().indexOf(filterKey)>-1;
                        });
                    });
                }
                if(sortKey){
                    data=data.slice().sort(function(a,b){
                        a=a[sortKey];
                        b=b[sortKey];
                        return (a===b? 0: a>b?1:-1)*order
                    });
                }
                return data;
            }
        },
        filters: {
            capitalize: function(str){
                return str.charAt(0).toUpperCase()+str.slice(1);
            }
        },
        methods: {
            sortBy: function(key){
                this.sortKey= key;
                this.sortOrders[key]=this.sortOrders[key]*-1;
            }
        }
    }
</script>

<style scoped>
    .grid-table-demo {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 14px;
        color: #444;
        margin: 20px;
    }

    th.active .arrow{
        opacity: 1;
    }

    .arrow {
        dispaly: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.6;
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #444;
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #444;
    }
</style>