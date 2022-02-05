<template>
  <b-input-group
    class="mt-5 mb-3 "
    style="width: 33%; left:33%"
  >
    <b-form-input v-model="search" @keyup="$emit('fetch',search)"></b-form-input>
    <b-input-group-append >
      <b-button  text="Search" @click="$emit('fetch',search)" variant="secondary">Search</b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
    data () {
        return{
            search:'',
        }
    }
}
</script>

<style>

</style>
