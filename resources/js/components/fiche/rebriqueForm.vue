<template>
    <div
        class="modal fade"
        id="rebriqueModal"
        tabindex="-1"
        aria-labelledby="employeModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="employeModalLabel">Ajouter une rebrique</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form class="mb-3" @submit.prevent="attachRebrique">
                    <div class="modal-body">
                        <div class="form-group mb-2">
                            <label>Rebrique:</label>
                            <select
                                class="form-select"
                                v-model="rebrique"
                                aria-label="Default select example"
                            >
                                <option
                                    v-show="!containsObject(rebrique)"
                                    v-for="rebrique in rebriques"
                                    :key="rebrique.id"
                                    :value="rebrique.id"
                                >{{ rebrique.titre }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >Fermer</button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="attachRebrique"
                            data-bs-dismiss="modal"
                        >Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        oldFiche: Object,
        rebriques: Array
    },
    emits: ['attachRebrique']
    ,
    data() {
        return {
            rebrique: '',
        }
    },
    mounted() {
    }
    ,
    methods: {
        attachRebrique() {
            this.$emit('attachRebrique', this.rebrique);
        },
        containsObject(obj) {
            if (typeof this.oldFiche.rebriques !== 'undefined') {
                var i;
                let list = this.oldFiche.rebriques;
                for (i = 0; i < list.length; i++) {
                    if (list[i].id == obj.id) {
                        return true;
                    }
                }
                return false;
            }
        }
    }
}
</script>

<style>
</style>
