// TODO:FIX REBRIQUES AFFECTATION
<template>
    <div>
        <b-overlay v-if="show" :show="show" class="d-inline-block" style="height:500px;width:100%"></b-overlay>
        <div v-if="!show">
            <search :search="search" @fetch="searchFiches" />
            <b-container class="bv-example-row">
                <b-row class="text-center mb-2">
                    <b-col cols="8">
                        <button
                            type="button"
                            class="btn btn-primary mx-1 float-start"
                            @click="resetModal1"
                            data-bs-toggle="modal"
                            data-bs-target="#ficheModal"
                        >Nouvelle fiche</button>
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

            <formFiche @addFiche="addFiche" :employes="employes" :oldFiche="fiche" />
            <showFiche
                :fiches="fiches"
                @deleteFiche="deleteFiche"
                @fetchFiches="fetchFiches"
                @updateFiche="updateFiche"
                @attachRebrique="attachRebrique"
                :alert="alert"
                :pagination="pagination"
            />
        </div>
    </div>
</template>

<script>
import showFiche from './show.vue';
import formFiche from './form.vue';
import search from '../search.vue';
export default {
    components: {
        showFiche,
        formFiche,
        search,
    },
    data() {
        return {
            fiches: [],
            fiche: {
                rebriques: [],
                titre: '',
                id: '',
            },
            pagination: {},
            edit: false,
            search: "",
            employes: [],
            show: true,
            alert: {
                dismissCountDown: 0,
                variant: "",
                msg: "",
            }

        }
    },
    created() {
        this.fetchFiches();
        this.fetchEmployes();
    },
    methods: {
        fetchFiches(page_url = "/api/fiche") {
            let vm = this;
            // page_url = this.search!=''?'/api/employe':page_url;
            let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            headersi.append('Authorization', 'auth');
            fetch('api/fiche/calcTotal/', { method: 'get' });
            fetch(page_url, {
                method: 'POST',
                body: JSON.stringify({ 'search': this.search }),
                headers: headersi

            })
                .then(res => res.json())
                .then(res => {
                    this.fiches = res.data;
                    this.show = false;
                    vm.makePagination(res);
                })
                .catch(err => console.log(err));

        },
        fetchEmployes(page_url = "/api/employe") {
            let vm = this;
            // page_url = this.search!=''?'/api/employe':page_url;
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
                    this.employes = res.data;
                })
                .catch(err => console.log(err))
        },
        makePagination(meta) {
            this.pagination = {
                current_page: meta.current_page,
                current_page_url: 'http://localhost:8000/api/fiche?page=' + meta.current_page,
                last_page: meta.last_page,
                next_page_url: meta.next_page_url,
                prev_page_url: meta.prev_page_url
            };
        },
        deleteFiche(id) {
            this.show = true;

            if (confirm('Delete fiche ' + id)) {
                fetch('api/fiche/' + id, { method: 'delete' })
                    .then(res => {
                        this.fetchFiches();
                        this.alert.variant = "danger";
                        this.alert.msg = "Fiche suprimée avec succès"
                        this.alert.dismissCountDown = 5;

                    })
                    .then(data => {
                    })
                    .catch(err => console.log(err));
            }
        },
        resetModal1() {
            this.fiche = {
                rebriques: [],
                titre: '',
                id: '',
            };
            this.edit = false;
        },
        addFiche(fiche) {
            this.show = true;

            if (!this.edit) {
                fetch('api/fiche/add', {
                    method: 'post',
                    body: JSON.stringify(fiche),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        this.fiche.id = data.data.id;
                        this.fiche.rebriques.forEach(r => this.attachRebrique(r.id));
                        this.fetchFiches();
                        this.alert.variant = "success";
                        this.alert.msg = "Fiche ajoutée avec succès"
                        this.alert.dismissCountDown = 5;

                    }
                    )
                    .catch(err => console.log(err))
            } else {
                fetch('api/fiche/' + this.fiche.id, {
                    method: 'put',
                    body: JSON.stringify(fiche),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        // this.deleteFicher(this.fiche.id);
                        this.fiche.rebriques.forEach(r => this.attachRebrique(r.id));
                        this.fetchFiches();
                        this.alert.variant = "warning";
                        this.alert.msg = "Fiche modifiée avec succès"
                        this.alert.dismissCountDown = 5;

                        this.edit = false;
                    }
                    )
                    .catch(err => console.log(err))
            }
        },
        updateFiche(fiche) {
            this.edit = true;
            this.fiche = fiche;
        },
        attachRebrique(RebriqueId) {
            fetch('api/fiche/' + RebriqueId.fid + '/rebrique/' + RebriqueId.rid, {
                method: 'post'
            }).then(res=>res.json())
                .then(data => {
                    if (data.attached==true){
                        this.alert.variant = "success";
                        this.alert.msg = "Rebrique attachée avec succès"
                        this.alert.dismissCountDown = 5;
                    }else{
                        this.alert.variant = "danger";
                        this.alert.msg = "Rebrique détachée avec succès"
                        this.alert.dismissCountDown = 5;
                    }
                    this.fetchFiches();
                }
                )
                .catch(err => console.log(err));
        },
        deleteFicher(id) {
            fetch('api/fiche/rel/' + id, { method: 'delete' })
                .then(res => {
                })
                .then(data => {
                })
                .catch(err => console.log(err));
        },
        searchFiches(search) {
            this.search = search;
            this.fetchFiches();
        }
    }

}
</script>

<style>
</style>
