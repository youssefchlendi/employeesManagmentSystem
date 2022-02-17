<template>
    <div class="container">
        <b-overlay v-if="show" :show="show" class="d-inline-block" style="height:500px;width:100%"></b-overlay>
        <div v-if="!show">
            <navb :name="name" show="false" />
            <b-card v-if="employes.length == 0">
                <b-card-body>
                    <b-container class="bv-example-row text-center">
                        <b-row class="mb-2">
                            <b-row>
                                <h6>Aucun employe ou fiche a afficher</h6>
                            </b-row>
                        </b-row>
                    </b-container>
                </b-card-body>
            </b-card>
            <div v-for="employe in employes" :key="employe.id">
                <b-card v-for="fiche in employe.fiches" :key="fiche.id">
                    <b-card-body>
                        <b-container class="bv-example-row text-center">
                            <b-row class="mb-2">
                                <b-row>
                                    <b-col>employe :{{ employe.nom + ' ' + employe.prenom }}</b-col>
                                </b-row>
                                <b-row>
                                    <b-col>date : {{ fiche.date }}</b-col>
                                </b-row>
                                <b-row>
                                    <b-col>total : {{ fiche.total }}</b-col>
                                </b-row>
                            </b-row>

                            <b-button
                                variant="success"
                                v-on:click="getPdf(fiche.id, employe.id)"
                            >Afficher</b-button>
                        </b-container>
                    </b-card-body>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
import navb from '../topnav.vue';
export default {
    components: {
        navb
    },
    data() {
        return {
            name: '',
            id: '',
            fiches: '',
            employes: '',
            pagination: {},
            show: true,
        }
    },
    created() {

        this.getSessionId();


    },
    methods: {
        fetchEntreprises(page_url = "/api/entreprise") {
            let vm = this;
            page_url = "/api/entreprise/" + this.id;
            let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            fetch(page_url, {
                method: 'POST',
                headers: headersi

            })
                .then(res => res.json())
                .then(res => {
                    this.employes = res.employes;
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
        getSessionId() {
            fetch('../sessionEntreprise', {
                method: 'get',

            })
                .then(res => res.json())
                .then(res => {
                    this.id = res.id;
                    console.log(res.id);
                    this.name = res.titre;
                    this.fetchEntreprises();
                })
                .catch(err => console.log(err))
        }, getPdf(fid, eid) {
            window.open(window.location.protocol + "//" + window.location.host + "/generatePdf/" + eid + "/fiche/" + fid);
        },

    }
}

</script>

<style>
</style>
