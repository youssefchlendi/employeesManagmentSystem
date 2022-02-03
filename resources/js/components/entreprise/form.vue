<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Ajouter un entreprise</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form class="mb-3" @submit.prevent="addEntreprise">
                  <div class="modal-body">
                          <div class="form-group mb-2">
                              <label for="">Titre:</label>
                              <input type="text" class="form-control" placeholder="Titre" v-model="oldEntreprise.titre">
                              <label for="">Matricule Fiscale:</label>
                              <input type="text" class="form-control" placeholder="Matricule Fiscale" v-model="oldEntreprise.matricule_fiscale">
                              <label for="">Registre du commerce:</label>
                              <input type="text" class="form-control" placeholder="Registre de commers" v-model="oldEntreprise.registre_commerce">
                              <label for="">Adresse:</label>
                              <input type="text" class="form-control" placeholder="Adreese" v-model="oldEntreprise.adresse">
                              <label for="">Ville:</label>
                              <input type="text" class="form-control" placeholder="Ville" v-model="oldEntreprise.ville">
                              <label for="">Activité:</label>
                              <input type="text" class="form-control" placeholder="Activité" v-model="oldEntreprise.activités">
                          </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" @click='resetModal1' data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary " @click="addEntreprise" data-bs-dismiss="modal" >Add</button>
                  </div>
                  </form>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    props:{
        oldEntreprise : Object,
        edit : Boolean,
    },
    emits:['addEntreprise'],
    data(){
        return{
            entreprise_id:"",
        }
    },
    mounted(){
    }
    ,
    methods:{
        addEntreprise(){
            this.$emit('addEntreprise',this.oldEntreprise);
            this.resetModal1();
        },
        resetModal1(){
              document.querySelectorAll('input').forEach(e=>e.value = "");
        },

    }
}
</script>

<style>

</style>
