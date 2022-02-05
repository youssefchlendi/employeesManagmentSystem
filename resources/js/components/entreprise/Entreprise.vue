<template>
    <div>
        <b-overlay v-if="show" :show="show" class="d-inline-block" style="height:500px;width:100%"></b-overlay>
        <div v-if="!show">
            <search :search="search" @fetch="searchEntreprise" />
            <b-container class="bv-example-row">
                <b-row class="text-center mb-2">
                    <b-col cols="8">
                        <button
                            type="button"
                            class="btn btn-primary mx-1 float-start"
                            @click="resetModal1"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >Nouveau entreprise</button>
                    </b-col>
                    <b-col></b-col>
                </b-row>
            </b-container>
            <b-alert
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
        this.fetchEntreprises();
    },
    methods: {
        fetchEntreprises(page_url = "/api/entreprise") {
            let vm = this;
            // page_url = this.search!=''?'/api/entreprise':page_url;
            let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            headersi.append('Authorization', 'auth');
            fetch(page_url, {
                method: 'POST',
                body: JSON.stringify({ 'search': this.search }),
                headers: headersi

            })
                .then(res => res.json())
                .then(res => {
                    this.entreprises = res.data;
                    this.show = false;
                    vm.makePagination(res);
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

            if (confirm('Delete Entreprise ' + id)) {
                fetch('api/entreprise/' + id, { method: 'delete' })
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
        },
        resetModal1() {
            this.entreprise = {};
        },
        addEntreprise(entreprise) {
            this.show = true;

            if (!this.edit) {
                fetch('api/entreprise/add', {
                    method: 'post',
                    body: JSON.stringify(entreprise),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        this.fetchEntreprises();
                        this.alert.variant = "success";
                        this.alert.msg = "Entreprise crée avec succès"
                        this.alert.dismissCountDown = 5;
                    }
                    )
                    .catch(err => console.log(err))
            } else {
                fetch('api/entreprise/' + this.entreprise.id, {
                    method: 'put',
                    body: JSON.stringify(entreprise),
                    headers: {
                        "Content-Type": 'application/json'
                    }
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
    margin-left: 100px !important;
    transition: all 0.3s ease-in-out;
}
</style>
