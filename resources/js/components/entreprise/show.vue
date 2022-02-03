<template>
<div>
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
</div>
</template>

<script>
export default {
    props:{
        entreprises : Array,
        pagination : Object,
    },
    emits:['deleteEntreprise','updateEntreprise']
    ,
    methods:{
        Delete(id){
            this.$emit('deleteEntreprise',id);
        },
        Update(entreprise){
            this.$emit('updateEntreprise',entreprise);
        }
    }
}
</script>

<style>

</style>
