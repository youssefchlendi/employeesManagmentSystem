<template>
    <div>
        <div class="card card-body my-2" v-if="employes.length == 0">
            <h3>il y'a aucun employe</h3>
        </div>
        <main>
            <data-table v-bind="parameters" @actionTriggered="handleAction" />
        </main>
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
                        <h5 class="modal-title" id="employeModalLabel">Les fiches</h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group mb-2">
                            <b-row class="jutify-content-center mb-2">
                                <b-col v-if="fiches.length == 0" cols="10">Aucune fiche de paie</b-col>
                            </b-row>
                            <b-row
                                v-show="fiches.length != 0"
                                v-for="fiche in fiches"
                                :key="fiche.id"
                                class="justify-content-center mb-2"
                            >
                                <b-col cols="10">
                                    <b-row>
                                        <b-col>date : {{ fiche.date }}</b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col>
                                            <h6>
                                                <b>Rebriques:</b>
                                            </h6>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="9">total : {{ fiche.total }}</b-col>
                                        <b-col cols="3">
                                            <b-button
                                                variant="success"
                                                v-on:click="getPdf(id, fiche.id)"
                                            >Afficher</b-button>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <hr />
                            </b-row>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        employes: Array,
        pagination: Object,
        entreprises: Array,
    },
    data() {
        return {
            fiches: {},
            id: ''
        }
    },
    emits: ["deleteEmploye", "updateEmploye", "fetchEmployes"],
    methods: {
        Delete(id) {
            this.$emit("deleteEmploye", id);
        },
        Update(employe) {
            this.$emit("updateEmploye", employe);
        },
        fetchEmployes(url) {
            this.$emit("fetchEmployes", url);
        },
        getPdf(empId, fID) {
            window.open(window.location.protocol + "//" + window.location.host + "/generatePdf/" + empId + "/fiche/" + fID);

        },
        entrepriseById(id) {
            let ent = '';
            let found = false;
            for (let i = 0; i < this.entreprises.length && !found; i++) {
                if (this.entreprises[i].id == id) {
                    ent = this.entreprises[i].titre;
                }
            }
            return ent;
        },
        handleAction(action, payload) {
            if (action == 'delete') {
                this.Delete(payload.id);
            } else if (action == 'edit') {
                //  $("#employeModal").modal('show');
                router.push({ name: "addEmploye", params: { employe: payload, edit: true } });
                this.Update(payload);
            } else if (action == "view") {
                this.fiches = payload.fiches;
                this.id = payload.id;
                $("#ficheModal").modal('show');
            }
            console.log(action, payload)
        }
    },
    computed: {
        parameters() {
            return {
                data: this.employes,
                text: {
                    perPageText: 'Afficher :entries lignes',
                    infoText: 'Affichage de :first a :last de :total lignes',
                    infoTextFiltered: 'Affichage de :first a :last de :total lignes(filtrée de :total)',
                    nextButtonText: 'Suiva',
                    previousButtonText: 'Prec',
                    paginationSearchText: 'Aller vers page',
                    searchText: 'recherche',
                    downloadButtonText: 'TELECHARGER',
                    emptyTableText: 'Aucun rubrique trouvée'
                },
                actionMode: "single",
                columns: [
                    {
                        key: "nom",
                        title: "Nom"
                    },
                    {
                        key: "prenom",
                        title: "Prenom"
                    },
                    {
                        key: "cin",
                        title: "Cin"
                    },
                    {
                        key: "mat_cnss",
                        title: "Matricule cnss"
                    },
                    {
                        key: "fonction",
                        title: "Fonction"
                    },
                    {
                        key: "entreprise",
                        title: "Entreprise"
                    },
                ]
            };
        }
    },
};
</script>

<style>
</style>
