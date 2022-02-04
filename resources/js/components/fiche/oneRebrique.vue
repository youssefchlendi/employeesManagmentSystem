<template>
    <li class="container list-unstyled">
    <div class="row shadow-sm text-left">
    <div class="">
        <p class="text-left"> {{rebrique.titre}} </p>
        <b-input-group
        class="mb-3"
        prepend="Montant"
        >
        <b-form-input v-on:keyup.enter="updateMontant(rebrique.pivot.montant)" v-model="rebrique.pivot.montant" ></b-form-input>
        <b-input-group-append>
        <b-button  text="Modifier" variant="success" @click="updateMontant(rebrique.pivot.montant)">Modifier</b-button>
        </b-input-group-append>
        </b-input-group>
    </div>
    </div>
    </li>
</template>

<script>
export default {
    emits : ['fetchFiches'],
    props : {
        rebrique : Object
    },
    data(){
        return {

        }
    },
    methods : {
        containsObject(){

        },
        pushTo(){

        },
        fetchFiches(){
            this.$emit('fetchFiches');
        },
        updateMontant(){
            if(typeof this.rebrique !== 'undefined'){
                fetch('api/fiche/'+this.rebrique.pivot.fiche_id+'/rebrique/'+this.rebrique.id, {
                    method: 'PUT',
                    body: JSON.stringify({'montant': this.rebrique.pivot.montant}),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                            console.log('hihi');
                            this.fetchFiches();
                        }
                    )
                    .catch(err => console.log(err))

                fetch('api/fiche/calcTotal/'+this.rebrique.pivot.fiche_id,{method:'get'});
            }
        }
    }

}
</script>

<style>

</style>
