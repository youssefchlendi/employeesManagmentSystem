<template>
    <div style>
        <div class="content">
            <div class="pt-3 container-fluid">
                <topnav show="false" :search="search" @fetch="searchEntreprise" />

                <b-overlay
                    v-if="show"
                    :show="show"
                    class="d-inline-block"
                    style="height:500px;width:100%"
                ></b-overlay>
                <div v-if="!show">
                    <b-container class="bv-example-row py-0">
                        <b-row class="text-center ">
                            <b-col cols="8">
                                <button
                                    type="button"
                                    class="btn btn-primary mx-1 float-start"
                                    @click="resetModal1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >Nouvelle entreprise</button>
                            </b-col>
                            <b-col></b-col>
                        </b-row>
                    </b-container>
                    <b-alert class="mt-4"
                        style="white-space: pre-line;"
                        :show="alert.dismissCountDown"
                        dismissible
                        :variant="alert.variant"
                        @dismissed="alert.dismissCountDown = 0"
                    >
                        <p>{{ alert.msg }}</p>
                    </b-alert>
                    <formEntreprise @addEntreprise="addEntreprise" :oldEntreprise="entreprise" />
                    <showEntreprises
                        :entreprises="entreprises"
                        :pagination="pagination"
                        @fetchEntreprises="fetchEntreprises"
                        @deleteEntreprise="deleteEntreprise"
                        @updateEntreprise="updateEntreprise"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import showEntreprises from './show.vue';
import formEntreprise from './form.vue';
import search from '../search.vue';
export default {
    components: {
        showEntreprises,
        formEntreprise,
        search
    },
    data() {
        return {
            entreprises: [],
            entreprise: {
                id: "",
                titre: "",
                matricule_fiscale: "",
                registre_commerce: "",
                addresse: "",
                ville: "",
                activities: "",
            },
            pagination: {},
            edit: false,
            search: "",
            show: true,
            alert: {
                dismissCountDown: 0,
                variant: "",
                msg: "",
            }
        }
    },
    created() {
        document.title = 'Entreprise';

        this.fetchEntreprises();
    },
    methods: {
        fetchEntreprises(page_url = "/api/entreprise/") {
            let vm = this;
            let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            headersi.append('auth', 5);
            fetch(page_url, {
                method: 'get',
                // body: JSON.stringify({ 'search': this.search }),
                headers: headersi

            })
                .then(res => res.json())
                .then(res => {
                    this.entreprises = res.data;
                    this.show = false;
                    // vm.makePagination(res);
                })
                .catch(err => console.log(err))
        },
        makePagination(meta) {
            this.pagination = {
                current_page: meta.current_page,
                current_page_url: 'http://localhost:8000/api/entreprise?page=' + meta.current_page,
                last_page: meta.last_page,
                next_page_url: meta.next_page_url,
                prev_page_url: meta.prev_page_url
            };
        },
        deleteEntreprise(id) {
            this.show = true;
             let headersi = new Headers();
            headersi.append('auth', 5);
            if (confirm('Delete Entreprise ' + id)) {

                fetch('api/entreprise/' + id, { method: 'delete' ,headers: headersi})
                    .then(res => {
                        this.fetchEntreprises();
                        this.alert.variant = "danger";
                        this.alert.msg = "Entreprise suprimée avec succès"
                        this.alert.dismissCountDown = 5;

                    })
                    .then(data => {
                    })
                    .catch(err => console.log(err));
            }
            this.show = false;
        },
        resetModal1() {
            this.entreprise = {};
        },
        addEntreprise(entreprise) {
            this.show = true;
let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            headersi.append('auth', 5);
            if (!this.edit) {
                fetch('api/entreprise/add', {
                    method: 'post',
                    body: JSON.stringify(entreprise),
                    headers: headersi
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success == false) {
                            this.alert.variant = "danger";
                            let err = '';
                            for (const property in data.data) {
                                err += `${data.data[property]}
                                `;
                            }
                            this.alert.msg = `Entreprise existant
                            ${err}`;
                            this.alert.dismissCountDown = 5;

                        } else {
                            this.alert.variant = "success";
                            this.alert.msg = "Entreprise crée avec succès"
                            this.alert.dismissCountDown = 5;
                        }
                        this.fetchEntreprises();
                    }
                    )
                    .catch(err => console.log(err))
            } else {
                fetch('api/entreprise/' + this.entreprise.id, {
                    method: 'put',
                    body: JSON.stringify(entreprise),
                    headers: headersi
                })
                    .then(res => res.json())
                    .then(data => {
                        this.fetchEntreprises();
                        this.alert.variant = "warning";
                        this.alert.msg = "Entreprise modifier avec succès"
                        this.alert.dismissCountDown = 5;

                        this.edit = false;
                    }
                    )
                    .catch(err => console.log(err))
            }
        },
        updateEntreprise(entreprise) {
            this.edit = true;
            this.entreprise = entreprise;
        },
        searchEntreprise(search) {
            this.search = search;
            this.fetchEntreprises();
        }
    }
}
</script>

<style>
.contain {
    margin-left: 225px !important;
    transition: all 0.3s ease-in-out;
}
.btun{
    color:white!important;
    background-color:#d32f2f!important;
}
</style>
