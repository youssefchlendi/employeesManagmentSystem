<template>
    <div style="margin-right:25px!important">
        <b-overlay v-if="show" :show="show" class="d-inline-block" style="height:500px;width:100%"></b-overlay>
        <div v-if="!show">
            <search :search="search" @fetch="searchEmploye" />
                <b-row class="text-center mb-2">
                    <b-col cols="8">
                        <button
                            type="button"
                            class="btn btn-primary mx-1 float-start"
                            @click="resetModal1"
                            data-bs-toggle="modal"
                            data-bs-target="#employeModal"
                        >Nouvel employé</button>
                    </b-col>
                    <b-col></b-col>
                </b-row>
            <b-alert
                :show="alert.dismissCountDown"
                dismissible
                :variant="alert.variant"
                @dismissed="alert.dismissCountDown = 0"
            >
                <p>{{ alert.msg }}</p>
            </b-alert>

            <formEmploye @addEmploye="addEmploye" :entreprises="entreprises" :oldEmploye="employe" />
            <showEmploye
                :employes="employes"
                @deleteEmploye="deleteEmploye"
                @fetchEmployes="fetchEmployes"
                @updateEmploye="updateEmploye"
                :pagination="pagination"
                :entreprises="entreprises"
            />
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
        this.fetchEntreprises();
        this.fetchEmployes();
        if (this.$route.params.add == 1){
            this.alert.variant = "success";
            this.alert.msg = "Employé ajouté avec succès"
            this.alert.dismissCountDown = 5;
        }else if (this.$route.params.edit==1){
            this.alert.variant = "warning";
            this.alert.msg = "Employé modifié avec succès"
            this.alert.dismissCountDown = 5;

        }
    },
    methods: {
        fetchEmployes(page_url = "/api/employe/a") {
            let vm = this;
            // page_url = this.search!=''?'/api/employe':page_url;
            let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            headersi.append('Authorization', 'auth');
            fetch(page_url, {
                method: 'GET',
                // body: JSON.stringify({ 'search': this.search }),
                headers: headersi

            })
                .then(res => res.json())
                .then(res => {
                    this.employes = res.data;
                    this.employes.forEach(e=>e.entreprise=this.entrepriseById(e.entreprise_id));
                    this.show = false;
                    vm.makePagination(res);
                })
                .catch(err => console.log(err))
        },
        fetchEntreprises() {
            fetch("/api/entreprise/", {
                method: 'GET',
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
            if (confirm('Delete employe ' + id)) {
                this.show = true;
                fetch('api/employe/' + id, { method: 'delete' })
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
            this.show = true;
            if (!this.edit) {
                fetch('api/employe/add', {
                    method: 'post',
                    body: JSON.stringify(employe),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        this.fetchEmployes();
                        this.alert.variant = "success";
                        this.alert.msg = "Employé ajouté avec succès"
                        this.alert.dismissCountDown = 5;

                    }
                    )
                    .catch(err => console.log(err))
            } else {
                fetch('api/employe/' + this.employe.id, {
                    method: 'put',
                    body: JSON.stringify(employe),
                    headers: {
                        "Content-Type": 'application/json'
                    }
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
</style>
