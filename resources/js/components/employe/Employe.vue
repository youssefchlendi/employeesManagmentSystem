<template>
<div>
    <b-overlay v-if="show" :show="show" class="d-inline-block" style="height:500px;width:100%" >    </b-overlay>
    <div v-if="!show">
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
      </form>
    <b-container class="bv-example-row">
    <b-row class="text-center mb-2">
        <b-col cols="8">
            <button type="button" class="btn btn-primary mx-1 float-start"  @click="resetModal1" data-bs-toggle="modal" data-bs-target="#employeModal">
                New Employe
            </button>
        </b-col>
        <b-col>
        </b-col>
    </b-row>
    </b-container>
    <formEmploye  @addEmploye="addEmploye" :entreprises="entreprises" :oldEmploye="employe" />
    <showEmploye :employes="employes" @deleteEmploye="deleteEmploye" @fetchEmployes="fetchEmployes" @updateEmploye="updateEmploye"  :pagination="pagination"/>
</div>
</div>
</template>

<script>
import showEmploye from './show.vue';
import formEmploye from './form.vue';

export default {
    components:{
        showEmploye,
        formEmploye
    },
data(){
        return {
            entreprises:[],
            employes : [],
            employe : {},
            pagination:{},
            edit:false,
            search:"",
            show:true
        }
    },
    created(){
        this.fetchEntreprises();
        this.fetchEmployes();
    },
    methods : {
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
                    this.show=false;
                    vm.makePagination(res);
                })
                .catch(err => console.log(err))
        },
        fetchEntreprises(){
            fetch("/api/entreprise/", {
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.entreprises = res.data;
                })
                .catch(err => console.log(err))
        },
        makePagination(meta) {
            this.pagination = {
                current_page: meta.current_page,
                current_page_url: 'http://localhost:8000/api/employe?page='+meta.current_page,
                last_page: meta.last_page,
                next_page_url: meta.next_page_url,
                prev_page_url: meta.prev_page_url
            };
        },
        deleteEmploye(id) {
            if (confirm('Delete employe ' + id)) {
                this.show = true;
                fetch('api/employe/' + id, {method: 'delete'})
                    .then(res => {
                        this.fetchEmployes();
                    })
                    .then(data => {
                    })
                    .catch(err => console.log(err));
            }
        },
        resetModal1(){
            this.employe={};
        },
        addEmploye(employe) {
            this.show = true;
            if (!this.edit) {
                fetch('api/employe/add', {
                    method: 'post',
                    body: JSON.stringify(employe),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                            this.fetchEmployes();
                        }
                    )
                    .catch(err => console.log(err))
            } else {
                fetch('api/employe/' + this.employe.id, {
                    method: 'put',
                    body: JSON.stringify(employe),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                            this.fetchEmployes();
                            this.edit=false;
                        }
                    )
                    .catch(err => console.log(err))
            }
        },
        updateEmploye(employe){
            this.edit=true;
            this.employe = employe;
        },
    }
}
</script>

<style>

</style>
