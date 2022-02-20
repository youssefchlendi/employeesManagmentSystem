<template>
    <div>
        <div class="card card-body my-5 py-5 text-center" v-if="employes.length == 0">
            <h3>il y'a aucun employe</h3>
        </div>
        <!-- <main>
            <data-table v-bind="parameters" @actionTriggered="handleAction" />
        </main>-->
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
        <b-card v-for="employe in employes" :key="employe.id">
            <md-tabs>
                <md-tab id="tab-home" md-label="Employe">
                    <b-container class="bv-example-row text-center">
                        <b-row class="mb-2">
                            <b-row>
                                <b-col>Nom : {{ employe.nom }} Prenom : {{ employe.prenom }}</b-col>
                            </b-row>
                            <b-row>
                                <b-col>Cin : {{ employe.cin }} Matricule CNSS : {{ employe.mat_cnss }}</b-col>
                            </b-row>
                            <b-row>
                                <b-col>Fonction : {{ employe.fonction }}</b-col>
                            </b-row>
                        </b-row>
                        <b-button variant="danger" v-on:click="Delete(employe.id)">Delete</b-button>
                        <b-button
                            variant="warning"
                            v-on:click="$router.push({ name: 'addEmploye', params: { employe: employe, edit: true } });"
                        >Update</b-button>
                    </b-container>
                </md-tab>
                <md-tab id="tab-empf" md-label="Employe fiches">
                    <b-container
                        :class="$screen.width < 768 ? '' : 'ml-4 pl-4 row'"
                        class="bv-example-row text-center justify-content-center"
                    >
                        <h3 v-if="employe.fiches.length == 0">il y'a aucun fiche</h3>
                    </b-container>
                    <b-container
                        :class="$screen.width < 768 ? '' : 'ml-4 pl-4 row'"
                        class="bv-example-row text-center justify-content-center"
                        style="text-align:left!important"
                        v-for="fiche in employe.fiches"
                        :key="fiche.id"
                    >
                        <b-row class="justify-content-center mb-2">
                            <b-col :cols="$screen.width < 768 ? '12' : '10'">
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
                                <b-row v-for="rebrique in fiche.rebriques" :key="rebrique.id">
                                    <b-col>
                                        <b>{{ rebrique.titre }}</b>
                                        : {{ rebrique.pivot.montant }}
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>total : {{ fiche.total }}</b-col>
                                </b-row>
                                <b-row v-if="$screen.width < 768">
                                    <b-button
                                        variant="success"
                                        v-on:click="getPdf(employe.id, fiche.id)"
                                    >Afficher</b-button>
                                </b-row>
                            </b-col>
                            <b-col v-if="$screen.width > 768">
                                <b-button
                                    variant="success"
                                    v-on:click="getPdf(employe.id, fiche.id)"
                                >Afficher</b-button>
                            </b-col>
                        </b-row>
                        <hr />
                    </b-container>
                </md-tab>
            </md-tabs>
        </b-card>
        <nav class="row">
            <ul class="pagination w-auto mx-auto">
                <li :class="[{ disabled: !pagination.prev_page_url }]" class="page-item">
                    <a
                        @click="fetchEmployes(pagination.prev_page_url)"
                        :class="[!pagination.prev_page_url ? 'disabled' : 'link-primary btun']"
                        class="btn page-link"
                    >Precedent</a>
                </li>
                <li class="page-item">
                    <a
                        class="page-link text-dark"
                        href="#"
                    >{{ pagination.current_page + "/" + pagination.last_page }}</a>
                </li>
                <li :class="[{ disabled: !pagination.next_page_url }]" class="page-item">
                    <a
                        @click="fetchEmployes(pagination.next_page_url)"
                        :class="[!pagination.next_page_url ? 'disabled' : 'link-primary btun']"
                        class="btn page-link"
                    >Suivant</a>
                </li>
            </ul>
        </nav>
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
        fetchEmployes(emp) {
            this.$emit("fetchEmployes", emp);
        },
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
                    emptyTableText: 'Aucun employé trouvée'
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
