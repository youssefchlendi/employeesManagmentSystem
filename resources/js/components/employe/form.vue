<template>
  <div class="modal fade" id="employeModal" tabindex="-1" aria-labelledby="employeModalLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="employeModalLabel">Ajouter un Employe</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <form class="mb-3" @submit.prevent="addEmploye">
                  <div class="modal-body">
                          <div class="form-group mb-2">
                              <label for="">Nom:</label>
                              <input type="text" class="form-control" placeholder="Nom" v-model="oldEmploye.nom">
                              <label for="">Prenom:</label>
                              <input type="text" class="form-control" placeholder="Prenom" v-model="oldEmploye.prenom">
                              <label for="">Cin:</label>
                              <input type="number" class="form-control" placeholder="cin" v-model="oldEmploye.cin">
                              <label for="">Matricule cnss:</label>
                              <input type="text" class="form-control" placeholder="Matricule cnss" v-model="oldEmploye.mat_cnss">
                              <label for="">Fonction:</label>
                              <input type="text" class="form-control" placeholder="Fonction" v-model="oldEmploye.fonction">
                              <label for="">Enretprise:</label>
                              <input type="text" class="form-control" placeholder="Enretprise" v-model="oldEmploye.entreprise_id">
                          </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" @click='resetModal1' data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary " @click="addEmploye" data-bs-dismiss="modal" >Add</button>
                  </div>
                  </form>
              </div>
          </div>
      </div>
</template>

<script>
export default {
    props:{
        oldEmploye : Object,
        edit : Boolean,
    },
    emits:['addEmploye']
    ,
    mounted(){
    }
    ,
    methods:{
        addEmploye(){
            this.$emit('addEmploye',this.oldEmploye);
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
