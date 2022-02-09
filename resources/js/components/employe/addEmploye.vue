<template>
    <div class="wrapper wrapper-content">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-12">
                    <div class="title-div">
                        <h1>Ajouter employé</h1>
                    </div>
                </div>
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
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="p-2 m-2">
                        <div class="form-group">
                            <label>Nom :</label>
                            <input
                                v-model="employe.nom"
                                class="form-control"
                                type="text"
                                name="youElementName"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-2 m-2">
                        <div class="form-group">
                            <label>Prenom :</label>
                            <input
                                v-model="employe.prenom"
                                class="form-control"
                                type="text"
                                name="youElementName"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="p-2 m-2">
                        <div class="form-group">
                            <label>CIN :</label>
                            <input
                                v-model="employe.cin"
                                class="form-control"
                                type="text"
                                name="youElementName"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-2 m-2">
                        <div class="form-group">
                            <label>Matricule cnss :</label>
                            <input
                                v-model="employe.mat_cnss"
                                class="form-control"
                                type="text"
                                name="youElementName"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="p-2 m-2">
                        <div class="form-group">
                            <label>Fonction :</label>
                            <input
                                v-model="employe.fonction"
                                class="form-control"
                                type="text"
                                name="youElementName"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-2 m-2">
                        <div class="form-group">
                            <label>Entreprise :</label>
                            <select
                                class="form-select"
                                v-model="employe.entreprise_id"
                                aria-label="Default select example"
                            >
                                <option
                                    v-for="entreprise in entreprises"
                                    :selected="entreprise.entreprise_id == entreprise.id"
                                    :key="entreprise.id"
                                    :value="entreprise.id"
                                >{{ entreprise.titre }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container d-flex bg-white justify-content-end">
            <div class="p-2 m-2">
                <button class="btn btn-primary ladda-button" type="button">
                    <span class="ladda-label">
                        <span>Annuler</span>
                    </span>
                </button>
                <button class="btn btn-success ladda-button" @click="addEmploye" type="button">
                    <span class="ladda-label">
                        <span>Sauvegarder</span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            employe: {},
            entreprises: [],
            alert: {
                dismissCountDown: 0,
                variant: "",
                msg: "",
            },
            edit:false
        }
    },
    created() {
        this.fetchEntreprises();
        if (typeof this.$route.params.employe !== 'undefined'){
            this.employe=this.$route.params.employe;
            this.edit = true;
        }
    },
    methods: {
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
        addEmploye() {
            if (!this.edit){
                fetch('../api/employe/add', {
                    method: 'post',
                    body: JSON.stringify(this.employe),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        this.employe='';
                        router.push({ name: "Employe" ,params: { add: 1 }})
            })
            }else{
                fetch('../api/employe/' + this.employe.id, {
                    method: 'put',
                    body: JSON.stringify(this.employe),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        router.push({ name: "Employe" ,params: { edit: 1 }})

                    }
                    )
                    .catch(err => console.log(err))
            }
            }


    }
}
</script>

<style >
.title-div {
    width: 400px;
    height: 50px;
    margin: 0 auto;
    background-color: var(--bs-white);
    border-style: solid;
    border-width: 1px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.35);
}

.title-div h1 {
    font-family: "Open Sans";
    font-weight: 500;
    text-align: center;
    margin: 0;
    letter-spacing: 0.6em;
    font-size: 22px;
    text-transform: uppercase;
    margin-right: -0.6em;
    text-align: right;
}

</style>
