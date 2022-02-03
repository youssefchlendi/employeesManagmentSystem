<template>
<div>
    <div class="card card-body my-2" v-if="fiches.length==0">
          <h3>il y'a aucun fiche</h3>
      </div>
 <b-card v-for="fiche in fiches" :key="fiche.id">
    <b-card-header header-tag="nav">
      <b-nav card-header tabs>
        <b-nav-item active>Fiches</b-nav-item>
      </b-nav>
    </b-card-header>


        <b-card-body>
        <b-container class="bv-example-row text-center">
        <b-row  class="mb-2">
        <b-row><b-col>date : {{ fiche.date }} employe :  {{fiche.employe_id }}</b-col></b-row>
        <b-row><b-col>total : {{ fiche.total}}</b-col></b-row>
        </b-row>
      <b-button variant="danger" v-on:click="Delete(fiche.id)" >Delete</b-button>
      <b-button variant="warning" v-on:click="Update(fiche)" data-bs-toggle="modal" data-bs-target="#ficheModal" >Update</b-button>
    </b-container>
    </b-card-body>
  </b-card>
        <nav  class="row ">
          <ul class="pagination w-auto mx-auto">
              <li :class="[{disabled:!pagination.prev_page_url}]" class="page-item ">
                  <a  @click="fetchFiches(pagination.prev_page_url)" class="btn page-link">Previous</a>
              </li>
              <li class="page-item"><a class="page-link text-dark" href="#">{{pagination.current_page+"/"+pagination.last_page}}</a></li>
              <li :class="[{disabled:!pagination.next_page_url}]" class="page-item">
                  <a  @click="fetchFiches(pagination.next_page_url)" class="btn page-link" >Next</a>
              </li>
          </ul>
      </nav>

</div>
</template>

<script>
export default {
    props:{
        fiches : Array,
        pagination : Object,
    },
    emits:['deleteFiche','updateFiche','fetchFiches']
    ,
    methods:{
        Delete(id){
            this.$emit('deleteFiche',id);
        },
        Update(fiche){
            this.$emit('updateFiche',fiche);
        },
        fetchfiches(url){
            this.$emit('fetchFiches',url)
        }
    }
}
</script>

<style>

</style>
