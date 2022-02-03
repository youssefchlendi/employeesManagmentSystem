<template>
  <div class="mt-2">
      <b-row><b-col cols="9"></b-col><b-col cols="3">
    <b-button
        :class="visible ? null : 'collapsed'"
        :aria-expanded="visible ? 'true' : 'false'"
        aria-controls="collapse-4"
        @click="visible = !visible"
    >
    Rebriques
    </b-button>
    </b-col>
      </b-row>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
    <b-card>I should start open!</b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
    data() {
        return{
            visible:true,
        }
    }
}
</script>

<style>

</style>
