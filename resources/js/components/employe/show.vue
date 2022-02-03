<template>
<div>
    <div class="card card-body my-2" v-if="employes.length==0">
          <h3>il y'a aucun employe</h3>
      </div>
 <b-card v-for="employe in employes" :key="employe.id">
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Inactive</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body class="text-center">
      <b-card-title>{{ employe.nom }} {{ employe.prenom }}</b-card-title>

      <b-card-text>
        {{ employe.cin }} {{ employe.mat_cnss }}<br>{{ employe.fonction }}<br>{{ employe.entreprise_id }}
      </b-card-text>

      <b-button variant="danger" v-on:click="Delete(employe.id)" >Delete</b-button>
      <b-button variant="danger" v-on:click="Update(employe)" data-bs-toggle="modal" data-bs-target="#employeModal" >Update</b-button>
    </b-card-body>
  </b-card>
        <nav  class="row ">
          <ul class="pagination w-auto mx-auto">
              <li :class="[{disabled:!pagination.prev_page_url}]" class="page-item ">
                  <a  @click="fetchEmployes(pagination.prev_page_url)" class="btn page-link">Previous</a>
              </li>
              <li class="page-item"><a class="page-link text-dark" href="#">{{pagination.current_page+"/"+pagination.last_page}}</a></li>
              <li :class="[{disabled:!pagination.next_page_url}]" class="page-item">
                  <a  @click="fetchEmployes(pagination.next_page_url)" class="btn page-link" >Next</a>
              </li>
          </ul>
      </nav>

</div>
</template>

<script>
export default {
    props:{
        employes : Array,
        pagination : Object,
    },
    emits:['deleteEmploye','updateEmploye','fetchEmployes']
    ,
    methods:{
        Delete(id){
            this.$emit('deleteEmploye',id);
        },
        Update(employe){
            this.$emit('updateEmploye',employe);
        },
        fetchEmployes(url){
            this.$emit('fetchEmployes',url)
        }
    }
}
</script>

<style>

</style>
