<template>
<div>
        <div class="card card-body my-2" v-if="entreprises.length==0">
          <h3>il y'a aucun entreprise</h3>
      </div>

 <b-card v-for="entreprise in entreprises" :key="entreprise.id">
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Inactive</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </b-card-header>

    <b-card-body class="text-center">
      <b-card-title>{{ entreprise.titre }}</b-card-title>

      <b-card-text>
        {{ entreprise.adresse }} {{ entreprise.ville }}<br>{{ entreprise.activité }}
      </b-card-text>

      <b-button variant="danger" v-on:click="Delete(entreprise.id)" >Delete</b-button>
      <b-button variant="danger" v-on:click="Update(entreprise)" data-bs-toggle="modal" data-bs-target="#exampleModal" >Update</b-button>
    </b-card-body>
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
export default {
    props:{
        entreprises : Array,
        pagination : Object,
    },
    emits:['deleteEntreprise','updateEntreprise','fetchEntreprises']
    ,
    methods:{
        Delete(id){
            this.$emit('deleteEntreprise',id);
        },
        Update(entreprise){
            this.$emit('updateEntreprise',entreprise);
        },
        fetchEntreprises(url){
            this.$emit('fetchEntreprises',url)
        }
    }
}
</script>

<style>

</style>
