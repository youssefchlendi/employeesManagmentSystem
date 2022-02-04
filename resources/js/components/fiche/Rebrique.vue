<template>
  <div class="mt-2">
      <b-row>
        <b-col cols="9">
            <div class="input-group mb-2">
            <input type="text" class="form-control" id="rebname" placeholder="Add new Rebrique" v-model="Rebrique.titre" >
                <div class="input-group-append">
                    <button type="button" @click="addRebrique" class="btn btn-success">Add</button>
                    <button type="button" @click="sendRebrique" class="btn btn-success">send rebriques</button>
                </div>
            </div>
        </b-col>
        <b-col cols="3">
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
    <b-card>

        <li v-for="rebrique in Rebriques" :key="rebrique.id" class="container list-unstyled" >
        <div class="row shadow-sm">
        <div class="col-10">
        <input class="form-check-input checks " :checked="containsObject(rebrique)" @change="pushTo(rebrique.id)" type="checkbox" role="switch" id="flexSwitchCheckDefault">
            {{ rebrique.titre }}
            <!-- <div v-show = "rebrique.edit == false">
            <label @dblclick = "rebrique.edit = true"> {{rebrique.titre}} </label>
            </div>
            <input v-show = "rebrique.edit == true" v-model = "rebrique.titre"
            v-on:blur= "rebrique.edit=false; "
            @keyup.enter = "rebrique.edit=false; "> -->

        </div>
        <div class="col-2">
        <button type="button" class="float-end btn" @click="deleteRebrique(rebrique.id)" ><b-icon icon="trash" scale="1" variant="danger"></b-icon></button>
        </div>
        </div>
        </li>
    </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
    props:{
        Fiche : Object,
    },
    emits:['sendRebrique'],
    data() {
        return{
            visible:true,
            Rebriques : [],
            Rebrique : {titre:""},
            attachedRebriques:[],
            check:[],
            edit:false,
        }
    },
    created(){
        this.fetchRebriques();
    },
    methods : {
        fetchRebriques(page_url="/api/rebrique"){
            let vm = this;
            fetch(page_url, {
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.Rebriques = res;
                    if (typeof this.Fiche.rebriques !== 'undefined'){
                        this.attachedRebriques=this.Fiche.rebriques;
                    }
                    this.Rebriques.forEach((r)=>{
                        Object.assign(r,{edit:false});
                    });
                })
                .catch(err => console.log(err))
        },
        deleteRebrique(id) {
            if (confirm('Delete Rebrique ' + id)) {
                fetch('api/rebrique/' + id, {method: 'delete'})
                    .then(res => {
                        this.fetchRebriques();
                    })
                    .then(data => {
                    })
                    .catch(err => console.log(err));
            }
        },
        resetModal1(){
            this.rebrique={};
        },
        addRebrique() {
            if (!this.edit) {
                fetch('api/rebrique/', {
                    method: 'post',
                    body: JSON.stringify(this.Rebrique),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                            this.Rebrique.titre="";
                            document.querySelector('#rebname').value='';
                            this.fetchRebriques();
                        }
                    )
                    .catch(err => console.log(err))
            } else {
                fetch('api/rebrique/' + this.Rebrique.id, {
                    method: 'put',
                    body: JSON.stringify(Rebrique),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                            this.fetchRebriques();
                            this.edit=false;
                        }
                    )
                    .catch(err => console.log(err))
            }
        },
        updateRebrique(Rebrique){
            this.edit=true;
            this.Rebrique = Rebrique;
        },
        containsObject(obj) {
            if (typeof this.Fiche.rebriques !== 'undefined'){
                var i;
                let list=this.Fiche.rebriques;
                for (i = 0; i < list.length; i++) {
                    if (list[i].id == obj.id) {
                        return true;
                    }
                }
                return false;
            }
        },
        pushTo(id){
            let b = (this.attachedRebriques.reduce(function(a, e, i) {
                if (e.id == id&&typeof e.titre==='undefined')
                a.push(i);
                return a;
            }, []));
            console.log(b);
            if ( b.length != 0 ){
                this.attachedRebriques.splice(b[0],1);
            }else{
                this.attachedRebriques.push({id});
            }
        },
        sendRebrique(){
            this.$emit('sendRebrique',this.attachedRebriques);
        }
    }
}
</script>

<style>

</style>
