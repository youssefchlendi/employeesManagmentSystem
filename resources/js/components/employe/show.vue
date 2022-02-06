<template>
    <div>
        <div class="card card-body my-2" v-if="employes.length == 0">
            <h3>il y'a aucun employe</h3>
        </div>
        <b-card v-for="employe in employes" :key="employe.id">
            <b-tabs card>
                <b-tab title="Employe" active>
                    <b-container class="bv-example-row text-center">
                        <b-row class="mb-2">
                            <b-row>
                                <b-col>Nom : {{ employe.nom }} Prenom : {{ employe.prenom }}</b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    Cin : {{ employe.cin }} Matricule CNSS :
                                    {{ employe.mat_cnss }}
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>Fonction : {{ employe.fonction }}</b-col>
                            </b-row>
                            <b-row>
                                <b-col>Entreprise : {{ entrepriseById(employe.entreprise_id) }}</b-col>
                            </b-row>
                        </b-row>
                        <b-button variant="danger" v-on:click="Delete(employe.id)">Delete</b-button>
                        <b-button
                            variant="warning"
                            v-on:click="Update(employe)"
                            data-bs-toggle="modal"
                            data-bs-target="#employeModal"
                        >Update</b-button>
                    </b-container>
                </b-tab>
                <b-tab title="Employe fiches">
                    <b-container
                        class="ml-4 bv-example-row text-center pl-4 row justify-content-center"
                        style="text-align: left !important"
                        v-for="fiche in employe.fiches"
                        :key="fiche.id"
                    >
                        <b-row class="justify-content-center mb-2">
                            <b-col cols="10">
                                <b-row>
                                    <b-col>date : {{ fiche.date }}</b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                        <h6>
                                            <b>Rebriques:</b>
                                        </h6>
                                    </b-col>
                                </b-row>
                                <b-row v-for="rebrique in fiche.rebriques" :key="rebrique.id">
                                    <b-col>
                                        <b>{{ rebrique.titre }}</b>
                                        : {{ rebrique.pivot.montant }}
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>total : {{ fiche.total }}</b-col>
                                </b-row>
                            </b-col>
                            <b-col>
                                <b-button
                                    variant="success"
                                    v-on:click="getPdf(employe.id, fiche.id)"
                                >Afficher</b-button>
                            </b-col>
                        </b-row>
                        <hr />
                    </b-container>
                </b-tab>
            </b-tabs>
        </b-card>
        <nav class="row">
            <ul class="pagination w-auto mx-auto">
                <li :class="[{ disabled: !pagination.prev_page_url }]" class="page-item">
                    <a
                        @click="fetchEmployes(pagination.prev_page_url)"
                        class="btn page-link"
                    >Previous</a>
                </li>
                <li class="page-item">
                    <a
                        class="page-link text-dark"
                        href="#"
                    >{{ pagination.current_page + "/" + pagination.last_page }}</a>
                </li>
                <li :class="[{ disabled: !pagination.next_page_url }]" class="page-item">
                    <a @click="fetchEmployes(pagination.next_page_url)" class="btn page-link">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        employes: Array,
        pagination: Object,
        entreprises : Array,
    },
    emits: ["deleteEmploye", "updateEmploye", "fetchEmployes"],
    methods: {
        Delete(id) {
            this.$emit("deleteEmploye", id);
        },
        Update(employe) {
            this.$emit("updateEmploye", employe);
        },
        fetchEmployes(url) {
            this.$emit("fetchEmployes", url);
        },
        getPdf(empId, fID) {
            window.open(
                "http://localhost:8000/generatePdf/" + empId + "/fiche/" + fID
            );
        },
        entrepriseById(id){
            let ent='';
            let found = false;
            for (let i=0; i<this.entreprises.length&&!found; i++){
                if(this.entreprises[i].id==id){
                    ent=this.entreprises[i].titre;
                }
            }
            return ent;
        }
    },
};
</script>

<style>
</style>
