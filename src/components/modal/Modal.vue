<template>
    <div class="modal-demo">
        <button id="show-modal" @click="showModal = true;">Show Modal</button>

        <modal-template v-if="showModal" @close="showModal = false;">
            <h3 slot="header"></h3>
        </modal-template>
    </div>
</template>

<script>
    import ModalTemplate from './ModalTemplate.vue';

    export default {
        name: "modal",
        components: {
             ModalTemplate
        },
        data(){
            return {
                showModal: false
            };
        }
    }
</script>

<style scoped>

</style>