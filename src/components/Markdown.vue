<template>
    <div id="markdown-editor">
        <h3>Mark Down</h3>
        <textarea :value="input" @input="update"></textarea>
        <div v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
    import marked from 'marked';
    import debounce from 'lodash/debounce';

    export default {
        name: 'mark-down',
        data() {
            return {
                input: '#hello'
            }
        },
        computed: {
            compiledMarkdown: function () {
                return marked(this.input, {sanitize: true});
            }
        },
        methods: {
            update: debounce(function (e) {
                this.input = e.target.value;
            }, 300)
        }
    }

</script>

<style scoped>
    textarea, #markdown-editor div {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
    }

    textarea {
        border: none;
        border-right: 1px solid #ccc;
        resize: none;
        outline: none;
        background-color: #f6f6f6;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
    }

    code {
        color: #f66;
    }
</style>
