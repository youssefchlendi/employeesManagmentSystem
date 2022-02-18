<template>
    <div>
        <b-alert
            :show="alert.dismissCountDown"
            dismissible
            :variant="alert.variant"
            @dismissed="alert.dismissCountDown = 0"
        >
            <p>{{ alert.msg }}</p>
        </b-alert>
        <div class="card card-body my-2" v-if="entreprises.length == 0">
            <h3>il y'a aucun entreprise</h3>
        </div>
        <div class=" pb-2">
        <b-card>
            <main>
                <data-table v-bind="parameters" @actionTriggered="handleAction" />
            </main>
        </b-card>
        </div>
        <!-- <b-card v-for="entreprise in entreprises" :key="entreprise.id">
            <md-tabs>
                <md-tab id="tab-home" md-label="Entreprise">
                    <b-card-body class="text-center">
                        <b-card-title>{{ entreprise.titre }}</b-card-title>

                        <b-card-text>
                            {{ entreprise.adresse }} {{ entreprise.ville }}
                            <br />
                            {{ entreprise.activité }}
                        </b-card-text>

                        <b-button variant="danger" v-on:click="Delete(entreprise.id)">Supprimer</b-button>
                        <b-button
                            variant="warning"
                            v-on:click="Update(entreprise)"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >Modifier</b-button>
                    </b-card-body>
                </md-tab>
                <md-tab id="tab-pages" md-label="Employes">
                    <b-card-body>
                        <b-container class="bv-example-row text-center">
                            <h3 v-if="entreprise.employes.length == 0">il y'a aucun entreprise</h3>
                            <b-row
                                style="text-align:left!important"
                                v-for="employe in entreprise.employes"
                                :key="employe.id"
                            >
                                <b-col cols="8">
                                    <b-row>
                                        <b-col>Nom : {{ employe.nom }} Prenom : {{ employe.prenom }}</b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col>Cin : {{ employe.cin }} Matricule CNSS : {{ employe.mat_cnss }}</b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col>Fonction : {{ employe.fonction }}</b-col>
                                    </b-row>
                                </b-col>
                                <b-col>
                                    <b-row>
                                        <b-col cols="6">
                                            <b-button
                                                variant="danger"
                                                class="float-end"
                                                @click="deleteEmploye(employe.id)"
                                            >Supprimer</b-button>
                                        </b-col>
                                        <b-col cols="6">
                                            <b-button
                                                variant="warning"
                                                @click="update(employe)"
                                                data-bs-toggle="modal"
                                                data-bs-target="#employeModal"
                                            >Modifier</b-button>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <hr />
                            </b-row>
                        </b-container>
                    </b-card-body>
                </md-tab>
            </md-tabs>

            <formEmploye
                @addEmploye="updateEmploye"
                :entreprises="entreprises"
                :oldEmploye="employe"
            />
        </b-card>-->
        <!-- <nav class="row">
            <ul class="pagination w-auto mx-auto">
                <li :class="[{ disabled: !pagination.prev_page_url }]" class="page-item">
                    <a
                        @click="fetchEntreprises(pagination.prev_page_url)"
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
                        @click="fetchEntreprises(pagination.next_page_url)"
                        :class="[!pagination.next_page_url ? 'disabled' : 'link-primary btun']"
                        class="btn page-link"
                    >Suivant</a>
                </li>
            </ul>
        </nav>-->
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
                        <h5 class="modal-title" id="employeModalLabel">Les employés</h5>
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
                                <b-col
                                    v-if="entreprise.employes.length == 0"
                                    cols="10"
                                >Aucun employé</b-col>
                            </b-row>
                            <b-row
                                style="text-align:left!important"
                                v-for="employe in entreprise.employes"
                                :key="employe.id"
                            >
                                <b-row>
                                    <b-col cols="8">
                                        <b-row>
                                            <b-col>Nom : {{ employe.nom }} Prenom : {{ employe.prenom }}</b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>Cin : {{ employe.cin }} Matricule CNSS : {{ employe.mat_cnss }}</b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>Fonction : {{ employe.fonction }}</b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col cols="6">
                                        <b-button
                                            variant="danger"
                                            class="float-end"
                                            @click="deleteEmploye(employe.id)"
                                        >Supprimer</b-button>
                                    </b-col>
                                    <b-col cols="6">
                                        <b-button
                                            variant="warning"
                                            @click="update(employe)"
                                            data-bs-toggle="modal"
                                            data-bs-target="#employeModal"
                                        >Modifier</b-button>
                                    </b-col>
                                </b-row>
                            </b-row>
                            <hr />
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
import formEmploye from '../employe/form.vue';

export default {
    components: { formEmploye },
    props: {
        entreprises: Array,
        pagination: Object,
    },
    emits: ['deleteEntreprise', 'updateEntreprise', 'fetchEntreprises']
    ,
    data() {
        return {
            employe: {},
            entreprise: { employes: {} },
            alert: {
                dismissCountDown: 0,
                variant: "",
                msg: "",
            }
        }
    },
    methods: {
        Delete(id) {
            this.$emit('deleteEntreprise', id);
        },
        Update(entreprise) {
            console.log(entreprise.id);

            this.$emit('updateEntreprise', entreprise);
        },
        fetchEntreprises(url) {
            this.$emit('fetchEntreprises', url)
        },
        update(employe) {
            this.employe = employe;
        },
        updateEmploye(employe) {
            fetch('api/employe/' + this.employe.id, {
                method: 'put',
                body: JSON.stringify(employe),
                headers: {
                    "Content-Type": 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    this.fetchEntreprises();
                    this.alert.variant = "warning";
                    this.alert.msg = "Employe modifié avec succès"
                    this.alert.dismissCountDown = 5;

                }
                )
                .catch(err => console.log(err))
        },
        deleteEmploye(id) {
            if (confirm('Delete employe ' + id)) {
                fetch('api/employe/' + id, { method: 'delete' })
                    .then(res => {
                        this.fetchEntreprises();
                        this.alert.variant = "danger";
                        this.alert.msg = "Employe supprimé avec succès"
                        this.alert.dismissCountDown = 5;

                    })
                    .then(data => {
                    })
                    .catch(err => console.log(err));
            }
        },
        handleAction(action, payload) {
            if (action == 'delete') {
                this.Delete(payload.id);
            } else if (action == 'edit') {
                this.Update(payload);
                $("#exampleModal").modal('show');
            } else if (action == "view") {
                this.entreprise = payload;
                this.id = payload.id;
                $("#ficheModal").modal('show');
            }
        }
    },
    computed: {
        parameters() {
            return {
                data: this.entreprises,
                text: {
                    perPageText: 'Afficher :entries lignes',
                    infoText: 'Affichage de :first a :last de :total lignes',
                    infoTextFiltered: 'Affichage de :first a :last de :total lignes(filtrée de :total)',
                    nextButtonText: 'Suiva',
                    previousButtonText: 'Prec',
                    paginationSearchText: 'Aller vers page',
                    searchText: 'recherche',
                    downloadButtonText: 'TELECHARGER',
                    emptyTableText: 'Aucun entreprise trouvée'
                },
                actionMode: "single",
                columns: [
                    {
                        key: "titre",
                        title: "Titre"
                    },
                    {
                        key: "matricule_fiscale",
                        title: "Matricule fiscale"
                    },
                    {
                        key: "registre_commerce",
                        title: "Registre de commerce"
                    },
                    {
                        key: "adresse",
                        title: "Adresse"
                    },
                    {
                        key: "activités",
                        title: "Activités"
                    }
                ]
            };
        }
    },

}
</script>

<style>
</style>
