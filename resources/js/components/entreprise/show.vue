<template>
<div>
        <div class="card card-body my-2" v-if="entreprises.length==0">
          <h3>il y'a aucun entreprise</h3>
      </div>

 <b-card v-for="entreprise in entreprises" :key="entreprise.id">
     <b-tabs card>
      <b-tab title="Entreprise" active>
<b-card-body class="text-center">
      <b-card-title>{{ entreprise.titre }}</b-card-title>

      <b-card-text>
        {{ entreprise.adresse }} {{ entreprise.ville }}<br>{{ entreprise.activité }}
      </b-card-text>

      <b-button variant="danger" v-on:click="Delete(entreprise.id)" >Delete</b-button>
      <b-button variant="warning" v-on:click="Update(entreprise)" data-bs-toggle="modal" data-bs-target="#exampleModal" >Update</b-button>
    </b-card-body>      </b-tab>
      <b-tab title="Employes">
            <b-card-body>
                <h6 v-if="entreprise.employes.length==0">Aucun employe </h6>
                <b-container class="bv-example-row text-center">
                <b-row style="text-align:left!important" v-for="employe in entreprise.employes" :key="employe.id">
                    <b-col cols="8" >
                        <b-row><b-col>Nom : {{ employe.nom }} Prenom :  {{employe.prenom }}</b-col></b-row>
                        <b-row><b-col>Cin : {{ employe.cin}} Matricule CNSS : {{ employe.mat_cnss }} </b-col></b-row>
                        <b-row><b-col>Fonction : {{ employe.fonction }}</b-col></b-row>
                    </b-col>
                    <b-col>
                        <b-row>
                            <b-col cols="6">
                            <b-button variant="danger" class="float-end" @click="deleteEmploye(employe.id)"  >Delete</b-button>
                            </b-col>
                            <b-col cols="6">
                            <b-button variant="warning" @click="update(employe)" data-bs-toggle="modal" data-bs-target="#employeModal" >Update</b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                <hr/>
                </b-row>
                </b-container>
            </b-card-body>
      </b-tab>
    </b-tabs>

<formEmploye  @addEmploye="updateEmploye" :entreprises="entreprises" :oldEmploye="employe" />
  </b-card>
        <nav  class="row ">
          <ul class="pagination w-auto mx-auto">
              <li :class="[{disabled:!pagination.prev_page_url}]" class="page-item ">
                  <a  @click="fetchEntreprises(pagination.prev_page_url)" class="btn page-link">Previous</a>
              </li>
              <li class="page-item"><a class="page-link text-dark" href="#">{{pagination.current_page+"/"+pagination.last_page}}</a></li>
              <li :class="[{disabled:!pagination.next_page_url}]" class="page-item">
                  <a  @click="fetchEntreprises(pagination.next_page_url)" class="btn page-link" >Next</a>
              </li>
          </ul>
      </nav>

</div>
</template>

<script>
import formEmploye from '../employe/form.vue';

export default {
    components:{formEmploye},
    props:{
        entreprises : Array,
        pagination : Object,
    },
    emits:['deleteEntreprise','updateEntreprise','fetchEntreprises']
    ,
    data(){
        return{
            employe:{},
        }
    },
    methods:{
        Delete(id){
            this.$emit('deleteEntreprise',id);
        },
        Update(entreprise){
            this.$emit('updateEntreprise',entreprise);
        },
        fetchEntreprises(url){
            this.$emit('fetchEntreprises',url)
        },
        update(employe){
            this.employe=employe;
        },
        updateEmploye(employe){
         fetch('api/employe/' + this.employe.id, {
                    method: 'put',
                    body: JSON.stringify(employe),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                            this.fetchEntreprises();
                        }
                    )
                    .catch(err => console.log(err))
        },
        deleteEmploye(id){
            if (confirm('Delete employe ' + id)) {
                fetch('api/employe/' + id, {method: 'delete'})
                    .then(res => {
                            this.fetchEntreprises();
                    })
                    .then(data => {
                    })
                    .catch(err => console.log(err));
            }
        }
    }
}
</script>

<style>

</style>
