<template>
    <div class="mt-4">
        <b-overlay v-if="show" :show="show" class="d-inline-block" style="height:500px;width:100%"></b-overlay>
        <div v-if="!show">
            <div class="input-group mb-4" style="width: 50%; left:25%">
                <input
                    type="text"
                    class="form-control"
                    id="rebname"
                    placeholder="titre"
                    v-model="Rebrique.titre"
                />
                <div class="input-group-append">
                    <button type="button" @click="addRebrique" class="btn btn-success">Sauvegarder</button>
                </div>
            </div>
            <b-alert
                :show="alert.dismissCountDown"
                dismissible
                :variant="alert.variant"
                @dismissed="alert.dismissCountDown = 0"
            >
                <p>{{ alert.msg }}</p>
            </b-alert>
            <div id="app">
                <link
                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    rel="stylesheet"
                    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                    crossorigin="anonymous"
                />
                <main>
                    <data-table v-bind="parameters" @actionTriggered="handleAction" />
                </main>
            </div>
            <!-- <b-card>
                <li
                    v-for="(rebrique) in Rebriques"
                    :key="rebrique.id"
                    class="container list-unstyled"
                >
                    <div class="row shadow-sm">
                        <div class="col-10">
                            <div>
                                <label @dblclick="rebrique.edit = true">{{ rebrique.titre }}</label>
                            </div>
                        </div>
                        <div class="col-2">
                            <button
                                type="button"
                                class="float-end btn"
                                @click="deleteRebrique(rebrique.id)"
                            >
                                <b-icon icon="trash" scale="1" variant="danger"></b-icon>
                            </button>
                            <button
                                type="button"
                                class="float-end btn"
                                @click="updateRebrique(rebrique)"
                            >
                                <b-icon icon="pen" scale="1" variant="warning"></b-icon>
                            </button>
                        </div>
                    </div>
                </li>
            </b-card> -->
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
        this.fetchRebriques();
    },
    methods: {
        fetchRebriques(page_url = "/api/rebrique") {
            let vm = this;
            fetch(page_url, {
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.Rebriques = res;
                    this.show = false;
                })
                .catch(err => console.log(err))
        },
        deleteRebrique(id) {
            if (confirm('Delete Rebrique ' + id)) {
                fetch('api/rebrique/' + id, { method: 'delete' })
                    .then(res => {
                        this.fetchRebriques();
                        this.alert.variant = "danger";
                        this.alert.msg = "Rebrique suprimée avec succès"
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
            if (!this.edit) {
                fetch('api/rebrique/', {
                    method: 'post',
                    body: JSON.stringify(this.Rebrique),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        this.Rebrique.titre = "";
                        this.alert.variant = "success";
                        this.alert.msg = "rebriqe ajoutée avec succès"
                        this.alert.dismissCountDown = 5;
                        this.fetchRebriques();
                    }
                    )
                    .catch(err => console.log(err))
            } else {
                fetch('api/rebrique/' + this.Rebrique.id, {
                    method: 'put',
                    body: JSON.stringify(this.Rebrique),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        this.fetchRebriques();
                        this.alert.variant = "warning";
                        this.alert.msg = "rebriqe modifiée avec succès"
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
</style>
