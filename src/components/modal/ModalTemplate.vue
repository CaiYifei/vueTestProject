<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot class="header">
                            default header
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot class="body">
                            default body
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot class="footer">
                            <button class="modal-default-button"
                                    @click="$emit('close')">
                                OK
                            </button>
                        </slot>
                    </div>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "modal-template"
    }
</script>

<style scoped>
    .modal-mask{
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        dispaly: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 100px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3{
        margin-top: 0;
        color: #42b983;
    }
</style>