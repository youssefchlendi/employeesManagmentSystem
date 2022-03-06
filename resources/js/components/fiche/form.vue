<template>
    <div
        class="modal fade"
        id="ficheModal"
        tabindex="-1"
        aria-labelledby="employeModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="employeModalLabel">Ajouter un fiche</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <form class="mb-3" @submit.prevent="addFiche">
                    <div class="modal-body">
                        <div class="form-group mb-2">
                            <label>Date:</label>
                            <input
                                type="date"
                                class="border-0 form-control"
                                placeholder="date"
                                v-model="oldFiche.date"
                                required="required"
                            />
                            <label>Employe:</label>
                            <select
                                class="form-select"
                                v-model="oldFiche.employe_id"
                                aria-label="Default select example"
                                required="required"
                            >
                                <option
                                    v-for="employe in employes"
                                    :selected="oldFiche.employe_id == employe.id"
                                    :key="employe.id"
                                    :value="employe.id"
                                >{{ employe.nom }} {{ employe.prenom }}</option>
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
    components: {
    },
    props: {
        oldFiche: Object,
        edit: Boolean,
        employes: Array,
    },
    emits: ['addFiche']
    ,
    mounted() {
    }
    ,
    methods: {
        addFiche() {
            $('#ficheModal').hide();
            $('body').removeClass('modal-open');
            $('body').removeAttr('style');
            $('.modal-backdrop').remove();
            this.$emit('addFiche', this.oldFiche);
            this.resetModal1();
        },
        resetModal1() {
            // document.querySelectorAll('input').forEach(e => e.value = "");
        },
        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [year, month, day].join('-');
        },
        sendRebrique(reb) {
            this.oldFiche.rebriques = reb;
        }

    }
}
</script>

<style>
</style>
