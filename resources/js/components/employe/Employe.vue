<template>
    <div style>
        <div class="content">
            <div class="pt-3 pb-3 container-fluid">
                <topnav show="true" :search="search" @fetch="searchEmploye" />

                <b-overlay
                    v-if="show"
                    :show="show"
                    class="d-inline-block"
                    style="height:500px;width:100%"
                ></b-overlay>
                <div v-if="!show">
                    <b-container class="bv-example-row py-0">
                        <b-row class="text-center">
                            <b-col cols="8">
                                <button
                                    type="button"
                                    class="btn btn-primary mx-1 float-start"
                                    @click="$router.push({ name: 'addEmploye', params: { edit: false } });"
                                >Nouvel employé</button>
                            </b-col>
                            <b-col></b-col>
                        </b-row>
                    </b-container>
                    <b-alert
                        class="mt-4"
                        :show="alert.dismissCountDown"
                        dismissible
                        :variant="alert.variant"
                        @dismissed="alert.dismissCountDown = 0"
                    >
                        <p>{{ alert.msg }}</p>
                    </b-alert>

                    <formEmploye
                        @addEmploye="addEmploye"
                        :entreprises="entreprises"
                        :oldEmploye="employe"
                    />
                    <!-- <b-card> -->
                    <showEmploye
                        :employes="employes"
                        @deleteEmploye="deleteEmploye"
                        @fetchEmployes="fetchEmployes"
                        @updateEmploye="updateEmploye"
                        :pagination="pagination"
                        :entreprises="entreprises"
                    />
                    <!-- </b-card> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import showEmploye from './show.vue';
import formEmploye from './form.vue';
import search from '../search.vue';

export default {
    components: {
        showEmploye,
        formEmploye,
        search
    },
    data() {
        return {
            entreprises: [],
            employes: [],
            employe: {},
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
        document.title = 'Employe';
        this.fetchEntreprises();
        this.fetchEmployes();
        if (this.$route.params.add == 1) {
            this.alert.variant = "success";
            this.alert.msg = "Employé ajouté avec succès"
            this.alert.dismissCountDown = 5;
        } else if (this.$route.params.edit == 1) {
            this.alert.variant = "warning";
            this.alert.msg = "Employé modifié avec succès"
            this.alert.dismissCountDown = 5;

        } else if (this.$route.params.add == 2) {
            this.alert.variant = this.$route.params.alert.variant;
            this.alert.msg = this.$route.params.alert.msg;
            this.alert.dismissCountDown = 5;
        }
    },
    methods: {
        fetchEmployes(page_url = "/api/employe/e") {
            let vm = this;
            let headersi = new Headers();
            headersi.append('auth', 5);
            headersi.append('Content-Type', 'application/json');
            fetch(page_url, {
                method: 'POST',
                body: JSON.stringify({ 'search': this.search }),
                headers: headersi
            })
                .then(res => res.json())
                .then(res => {
                    this.employes = res.data;
                    this.show = false;

                    vm.makePagination(res);
                })
                .catch(err => console.log(err))
        },
        fetchEntreprises() {
            let headersi = new Headers();
            headersi.append('auth', 5);
            fetch("/api/entreprise/", {
                method: 'GET',
                headers: headersi

            })
                .then(res => res.json())
                .then(res => {
                    this.entreprises = res.data;
                })
                .catch(err => console.log(err))
        },
        makePagination(meta) {
            this.pagination = {
                current_page: meta.current_page,
                current_page_url: 'http://localhost:8000/api/employe?page=' + meta.current_page,
                last_page: meta.last_page,
                next_page_url: meta.next_page_url,
                prev_page_url: meta.prev_page_url
            };
        },
        deleteEmploye(id) {
            let headersi = new Headers();
            headersi.append('auth', 5);
            if (confirm('Delete employe ' + id)) {
                this.show = true;
                fetch('api/employe/' + id, { method: 'delete', headers: headersi })
                    .then(res => {
                        this.fetchEmployes();
                        this.alert.variant = "danger";
                        this.alert.msg = "Employé suprimée avec succès"
                        this.alert.dismissCountDown = 5;

                    })
                    .then(data => {
                    })
                    .catch(err => console.log(err));
            }
        },
        resetModal1() {
            this.employe = {};
        },
        addEmploye(employe) {
            let headersi = new Headers();
            headersi.append('auth', 5);
            headersi.append('Content-Type', 'application/json');

            this.show = true;
            if (!this.edit) {
                fetch('api/employe/add', {
                    method: 'post',
                    body: JSON.stringify(employe),
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
                            this.alert.msg = `Employé existant :
                            ${err}`;
                            this.alert.dismissCountDown = 5;

                        } else {
                            this.alert.variant = "success";
                            this.alert.msg = "Employé ajouté avec succès"
                            this.alert.dismissCountDown = 5;
                        }
                        this.fetchEmployes();

                    }
                    )
                    .catch(err => console.log(err))
            } else {
                fetch('api/employe/' + this.employe.id, {
                    method: 'put',
                    body: JSON.stringify(employe),
                    headers: headersi
                })
                    .then(res => res.json())
                    .then(data => {
                        this.fetchEmployes();
                        this.edit = false;
                        this.alert.variant = "warning";
                        this.alert.msg = "Employé modifié avec succès"
                        this.alert.dismissCountDown = 5;

                    }
                    )
                    .catch(err => console.log(err))
            }
        },
        updateEmploye(employe) {
            this.edit = true;
            this.employe = employe;
        },
        searchEmploye(search) {
            console.log(search);
            this.search = search;
            this.fetchEmployes();
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

    }
}
</script>

<style>
.btun {
    color: white !important;
    background-color: #d32f2f !important;
}
</style>
