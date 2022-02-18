<template>
    <div
        class="modal fade"
        id="employeModal"
        tabindex="-1"
        aria-labelledby="employeModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="employeModalLabel">Ajouter un Employe</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form class="mb-3" @submit.prevent="addEmploye">
                    <div class="modal-body">
                        <div class="form-group mb-2">
                            <label>Nom:</label>
                            <input
                                type="text"
                                class="border-0 form-control"
                                placeholder="Nom"
                                v-model="oldEmploye.nom"
                                required="required"
                            />
                            <label>Prenom:</label>
                            <input
                                type="text"
                                class="border-0 form-control"
                                placeholder="Prenom"
                                v-model="oldEmploye.prenom"
                                required="required"
                            />
                            <label>Cin:</label>
                            <input
                                type="number"
                                min="1000000"
                                max="99999999"
                                class="border-0 form-control"
                                placeholder="cin"
                                v-model="oldEmploye.cin"
                                required="required"
                            />
                            <label>Matricule cnss:</label>
                            <input
                                type="text"
                                class="border-0 form-control"
                                placeholder="Matricule cnss"
                                v-model="oldEmploye.mat_cnss"
                                required="required"
                            />
                            <label>Fonction:</label>
                            <input
                                type="text"
                                class="border-0 form-control"
                                placeholder="Fonction"
                                v-model="oldEmploye.fonction"
                                required="required"
                            />
                            <label>Enretprise:</label>
                            <select
                                class="form-select"
                                v-model="oldEmploye.entreprise_id"
                                aria-label="Default select example"
                                required="required"
                            >
                                <option
                                    v-for="entreprise in entreprises"
                                    :selected="oldEmploye.entreprise_id == entreprise.id"
                                    :key="entreprise.id"
                                    :value="entreprise.id"
                                >{{ entreprise.titre }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            @click="resetModal1"
                            data-bs-dismiss="modal"
                        >Fermer</button>
                        <button type="submit" class="btn btn-primary">Sauvegarder</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        oldEmploye: Object,
        edit: Boolean,
        entreprises: Array,
    },
    emits: ['addEmploye']
    ,
    mounted() {
    }
    ,
    methods: {
        addEmploye() {

            $('#employeModal').hide();
            $('body').removeClass('modal-open');
            $('body').removeAttr('style');
            $('.modal-backdrop').remove();
            this.$emit('addEmploye', this.oldEmploye);
            this.resetModal1();
        },
        resetModal1() {
            document.querySelectorAll('input').forEach(e => e.value = "");
        },

    }
}
</script>

<style>
</style>
