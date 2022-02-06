<template>
    <div>
        <b-card v-for="fiche in fiches" :key="fiche.id">
            <b-tabs>
                <b-tab title="Fiches">
                    <b-card-body>
                        <h6 v-if="fiches.length == 0">Aucun employe</h6>
                        <b-container class="bv-example-row text-center">
                            <b-row class="mb-2">
                                <b-row>
                                    <b-col>date : {{ fiche.date }} employe : {{ fiche.employe_id }}</b-col>
                                </b-row>
                                <b-row>
                                    <b-col>total : {{ fiche.total }}</b-col>
                                </b-row>
                                <oneRebrique
                                    @fetchFiches="fetchFiches('/api/fiche')"
                                    @attachRebrique="attachRebrique"
                                    :rebrique="rebrique"
                                    :alert="alert"
                                    v-for="rebrique in fiche.rebriques"
                                    :key="rebrique.id"
                                />
                            </b-row>
                            <b-button variant="danger" v-on:click="Delete(fiche.id)">Delete</b-button>
                            <b-button
                                variant="warning"
                                v-on:click="Update(fiche)"
                                data-bs-toggle="modal"
                                data-bs-target="#ficheModal"
                            >Update</b-button>
                            <b-button
                                variant="warning"
                                v-on:click="select(fiche)"
                                data-bs-toggle="modal"
                                data-bs-target="#rebriqueModal"
                            >Ajouter rubrique</b-button>

                            <b-button variant="success" v-on:click="getPdf(fiche)">Afficher</b-button>
                        </b-container>
                    </b-card-body>
                </b-tab>
            </b-tabs>
        </b-card>
        <nav class="row">
            <ul class="pagination w-auto mx-auto">
                <li :class="[{ disabled: !pagination.prev_page_url }]" class="page-item">
                    <a @click="fetchFiches(pagination.prev_page_url)" class="btn page-link">Previous</a>
                </li>
                <li class="page-item">
                    <a
                        class="page-link text-dark"
                        href="#"
                    >{{ pagination.current_page + "/" + pagination.last_page }}</a>
                </li>
                <li :class="[{ disabled: !pagination.next_page_url }]" class="page-item">
                    <a @click="fetchFiches(pagination.next_page_url)" class="btn page-link">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import oneRebrique from './oneRebrique.vue';
export default {
    components: {
        oneRebrique
    },
    props: {
        fiches: Array,
        pagination: Object,
        alert :Object
    },
    emits: ['deleteFiche', 'updateFiche', 'fetchFiches','attachRebrique','selectFiche']
    ,
    methods: {
        Delete(id) {
            this.$emit('deleteFiche', id);
        },
        Update(fiche) {
            this.$emit('updateFiche', fiche);
        },
        select(fiche) {
            this.$emit('selectFiche', fiche);
        },
        fetchFiches(url) {
            this.$emit('fetchFiches', url)
        },
        getPdf(fiche) {
            // console.log(fiche.employes.id);
            window.open("http://localhost:8000/generatePdf/" + fiche.employes.id + "/fiche/" + fiche.id);
        },
        attachRebrique(RebriqueId) {
            this.$emit('attachRebrique', RebriqueId);
        }
    }
}
</script>

<style>
</style>
