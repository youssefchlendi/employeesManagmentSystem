<template>
  <div>
    <form action="javascript:" class="search-bar">
          <input
              id="search"
              type="search"
              name="search"
              pattern=".*\S.*"
              @keyup="fetchEmployes()"
              required
              v-model="search"
          />
          <button class="search-btn" @click="fetchEmployes()" type="submit">
              <span>Search</span>
          </button>
      </form>    <b-container class="bv-example-row">
    <b-row class="text-center mb-2">
        <b-col cols="8">
            <button type="button" class="btn btn-primary mx-1 float-start"  @click="resetModal1" data-bs-toggle="modal" data-bs-target="#ficheModal">
                New Fiche
            </button>
        </b-col>
        <b-col>
        </b-col>
    </b-row>
</b-container>

    <formFiche  @addFiche="addFiche" :employes="employes"  :oldFiche="fiche" />
    <showFiche :fiches="fiches" @deleteFiche="deleteFiche" @fetchFiches="fetchFiches" @updateFiche="updateFiche"  :pagination="pagination"/>
  </div>
</template>

<script>
import showFiche from './show.vue';
import formFiche from './form.vue';

export default {
    components : {
        showFiche,
        formFiche
    },
    data(){
        return {
            fiches : [],
            fiche : {
                rebriques:[],
                titre:'',
                id:'',
            },
            pagination:{},
            edit:false,
            search:"",
            employes :[]
        }
    },
    created(){
        this.fetchFiches();
        this.fetchEmployes();
    },
    methods : {
        fetchFiches(page_url="/api/fiche"){
            let vm = this;
            // page_url = this.search!=''?'/api/employe':page_url;
            let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            headersi.append('Authorization','auth');
            fetch('api/fiche/calcTotal/',{method:'get'});
            fetch(page_url, {
                method: 'POST',
                body: JSON.stringify({'search' : this.search}),
                headers: headersi

            })
                .then(res => res.json())
                .then(res => {
                    this.fiches = res.data;
                    vm.makePagination(res);
                })
                .catch(err => console.log(err));

        },
        fetchEmployes(page_url="/api/employe"){
            let vm = this;
            // page_url = this.search!=''?'/api/employe':page_url;
            let headersi = new Headers();
            headersi.append('Content-Type', 'application/json');
            headersi.append('Authorization','auth');
            fetch(page_url, {
                method: 'POST',
                body: JSON.stringify({'search' : this.search}),
                headers: headersi

            })
                .then(res => res.json())
                .then(res => {
                    this.employes = res.data;
                })
                .catch(err => console.log(err))
        },
        makePagination(meta) {
            this.pagination = {
                current_page: meta.current_page,
                current_page_url: 'http://localhost:8000/api/fiche?page='+meta.current_page,
                last_page: meta.last_page,
                next_page_url: meta.next_page_url,
                prev_page_url: meta.prev_page_url
            };
        },
        deleteFiche(id) {
            if (confirm('Delete fiche ' + id)) {
                fetch('api/fiche/' + id, {method: 'delete'})
                    .then(res => {
                        this.fetchFiches();
                    })
                    .then(data => {
                    })
                    .catch(err => console.log(err));
            }
        },
        resetModal1(){
            this.fiche={rebriques:[],
                titre:'',
                id:'',
};
            this.edit=false;
        },
        addFiche(fiche) {
            if (!this.edit) {
                fetch('api/fiche/add', {
                    method: 'post',
                    body: JSON.stringify(fiche),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                            this.fiche.id=data.data.id;
                            this.fiche.rebriques.forEach(r=>this.attachRebrique(r.id));
                            this.fetchFiches();
                        }
                    )
                    .catch(err => console.log(err))
            } else {
                fetch('api/fiche/' + this.fiche.id, {
                    method: 'put',
                    body: JSON.stringify(fiche),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                            // this.deleteFicher(this.fiche.id);
                            this.fiche.rebriques.forEach(r=>this.attachRebrique(r.id));
                            this.fetchFiches();
                            this.edit=false;
                        }
                    )
                    .catch(err => console.log(err))
            }
        },
        updateFiche(fiche){
            this.edit=true;
            this.fiche = fiche;
        },
        attachRebrique(RebriqueId){
            fetch('api/fiche/'+ this.fiche.id+'/rebrique/'+RebriqueId, {
                    method: 'post'
                })
                    .then(data => {
                        }
                    )
                    .catch(err => console.log(err));
        },
        deleteFicher(id) {
                fetch('api/fiche/rel/' + id, {method: 'delete'})
                    .then(res => {
                    })
                    .then(data => {
                    })
                    .catch(err => console.log(err));
        },
    }

}
</script>

<style>

</style>
