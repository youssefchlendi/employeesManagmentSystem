<template>
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ajouter un entreprise</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form class="mb-3" @submit.prevent="addEntreprise">
                    <div class="modal-body">
                        <div class="form-group mb-2">
                            <label>Titre:</label>
                            <input
                                type="text"
                                class="border-0 form-control"
                                placeholder="Titre"
                                v-model="oldEntreprise.titre"
                                required="required"
                            />
                            <label>Matricule Fiscale:</label>
                            <input
                                type="text"
                                class="border-0 form-control"
                                placeholder="Matricule Fiscale"
                                v-model="oldEntreprise.matricule_fiscale"
                                required="required"
                            />
                            <label>Registre du commerce:</label>
                            <input
                                type="text"
                                class="border-0 form-control"
                                placeholder="Registre de commers"
                                v-model="oldEntreprise.registre_commerce"
                                required="required"
                            />
                            <label>Adresse:</label>
                            <input
                                type="text"
                                class="border-0 form-control"
                                placeholder="Adreese"
                                v-model="oldEntreprise.adresse"
                                required="required"
                            />
                            <label>Ville:</label>
                            <input
                                type="text"
                                class="border-0 form-control"
                                placeholder="Ville"
                                v-model="oldEntreprise.ville"
                                required="required"
                            />
                            <label>Activité:</label>
                            <input
                                type="text"
                                class="border-0 form-control"
                                placeholder="Activité"
                                v-model="oldEntreprise.activités"
                                required="required"
                            />
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
        oldEntreprise: Object,
        edit: Boolean,
    },
    emits: ['addEntreprise']
    ,
    mounted() {
    }
    ,
    methods: {
        addEntreprise() {
            $('#exampleModal').hide();
            $('body').removeClass('modal-open');
            $('body').removeAttr('style');
            $('.modal-backdrop').remove();
            this.$emit('addEntreprise', this.oldEntreprise);
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
