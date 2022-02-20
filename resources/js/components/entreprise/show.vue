<template>
    <div>
        <formEmploye @addEmploye="updateEmploye" :entreprises="entreprises" :oldEmploye="employe" />
        <b-alert
            class="mt-4"
            :show="alert.dismissCountDown"
            dismissible
            :variant="alert.variant"
            @dismissed="alert.dismissCountDown = 0"
        >
            <p>{{ alert.msg }}</p>
        </b-alert>
        <div class="text-center card card-body my-5 py-5" v-if="entreprises.length == 0">
            <h3>il y'a aucune entreprise</h3>
        </div>
        <div class="pb-2">
            <b-card v-if="entreprises.length != 0">
                <main>
                    <data-table v-bind="parameters" @actionTriggered="handleAction" />
                </main>
            </b-card>
        </div>
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
                            <b-row class="text-center jutify-content-center mb-2">
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
            let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            headersi.append('auth', 5);
            fetch('api/employe/' + this.employe.id, {
                method: 'put',
                body: JSON.stringify(employe),
                headers: headersi
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
            let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            headersi.append('auth', 5);
            if (confirm('Delete employe ' + id)) {
                fetch('api/employe/' + id, { method: 'delete', headers: headersi })
                    .then(res => {
                        this.fetchEntreprises();
                        this.alert.variant = "danger";
                        this.alert.msg = "Employe supprimé avec succès"
                        this.alert.dismissCountDown = 5;
                        $("#ficheModal").modal('hide');

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
                console.log(payload.employes);
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
