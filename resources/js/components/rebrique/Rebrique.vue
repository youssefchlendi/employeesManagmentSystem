<template>
    <div class style>
        <div class="content">
            <div class="pt-3 pb-3 container-fluid">
                <topnav show="false" />
                <b-overlay
                    v-if="show"
                    :show="show"
                    class="d-inline-block"
                    style="height:500px;width:100%"
                ></b-overlay>
                <div v-if="!show">
                    <div class="row mt-3 mb-3">
                        <div class="col-3"></div>
                        <div class="col-6 mx-auto">
                            <div class="input-group">
                                <input
                                    v-model="Rebrique.titre"
                                    class="bg-light border-0 form-control small"
                                    type="text"
                                    placeholder="titre"
                                />
                                <button
                                    @click="addRebrique"
                                    class="btn btn-success py-0"
                                    type="button"
                                >Sauvegarder</button>
                            </div>
                        </div>
                        <div class="col-3"></div>
                    </div>

                    <b-alert
                        class="mt-4"
                        :show="alert.dismissCountDown"
                        dismissible
                        :variant="alert.variant"
                        @dismissed="alert.dismissCountDown = 0"
                    >
                        <p>{{ alert.msg }}</p>
                    </b-alert>
                    <div class="card card-body my-5 py-5 text-center" v-if="Rebriques.length == 0">
                        <h3>il y'a aucune rubrique</h3>
                    </div>
                    <b-card v-if="Rebriques.length != 0">
                        <main>
                            <data-table v-bind="parameters" @actionTriggered="handleAction" />
                        </main>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            visible: true,
            Rebriques: [],
            Rebrique: { titre: "", id: 'false' },
            check: [],
            edit: false,
            show: true,
            alert: {
                dismissCountDown: 0,
                variant: "",
                msg: "",
            },
        }
    },
    created() {
        document.title = 'Rubriques';
        this.fetchRebriques();

        // $('.btn-outline-success').forEach(e => e.addClass('d-none'));
    },
    updated(){
let docs = document.querySelectorAll('.btn-outline-success');
// console.log(docs);
                    for (let i=0; i < docs.length; i++) {
                        docs[i].classList.add('d-none');
                        // console.log(docs[i]);
                        // buttons[i].className += " d-none";
                    }
    },
    methods: {

        fetchRebriques(page_url = "/api/rebrique") {
            let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            headersi.append('auth', 5);
            let vm = this;
            fetch(page_url, {
                method: 'GET',
                headers:headersi
            })
                .then(res => res.json())
                .then(res => {
                    this.Rebriques = res;

                    this.show = false;

                })
                .catch(err => console.log(err))
        },
        deleteRebrique(id) {
            let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            headersi.append('auth', 5);
            if (confirm('Delete Rubrique ' + id)) {
                fetch('api/rebrique/' + id, { method: 'delete',headers:headersi })
                    .then(res => {
                        this.fetchRebriques();
                        this.alert.variant = "danger";
                        this.alert.msg = "Rubrique suprimée avec succès"
                        this.alert.dismissCountDown = 5;

                    })
                    .then(data => {
                    })
                    .catch(err => console.log(err));
            }
        },
        resetModal1() {
            this.rebrique = {};
        },
        addRebrique() {
            let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            headersi.append('auth', 5);
            if (!this.edit) {
                fetch('api/rebrique/add', {
                    method: 'post',
                    body: JSON.stringify(this.Rebrique),
                    headers: headersi
                })
                    .then(res => res.json())
                    .then(data => {
                        this.Rebrique.titre = "";
                        this.alert.variant = "success";
                        this.alert.msg = "Rubrique ajoutée avec succès"
                        this.alert.dismissCountDown = 5;
                        this.fetchRebriques();
                    }
                    )
                    .catch(err => console.log(err))
            } else {
                fetch('api/rebrique/' + this.Rebrique.id, {
                    method: 'put',
                    body: JSON.stringify(this.Rebrique),
                    headers: headersi
                })
                    .then(res => res.json())
                    .then(data => {
                        this.fetchRebriques();
                        this.alert.variant = "warning";
                        this.alert.msg = "Rubrique modifiée avec succès"
                        this.alert.dismissCountDown = 5;
                        this.Rebrique = { titre: "", id: 'false' };
                        this.edit = false;
                    }
                    )
                    .catch(err => console.log(err))
            }
        },
        updateRebrique(Rebrique) {
            this.edit = true;
            this.Rebrique = Rebrique;
        },
        handleAction(action, payload) {
            if (action == 'delete') {
                this.deleteRebrique(payload.id);
            } else if (action == 'edit') {
                this.updateRebrique(payload);
            }
            console.log(action, payload)
        }

    },
    computed: {
        parameters() {
            return {
                data: this.Rebriques,
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
                        key: "titre",
                        title: "Titre"
                    }
                ]
            };
        }
    },
}
</script>

<style>
.btun {
    color: white !important;
    background-color: #d32f2f !important;
}
</style>
