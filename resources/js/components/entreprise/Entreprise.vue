<template>
<div  >
    <form action="javascript:" class="search-bar">
          <input
              id="search"
              type="search"
              name="search"
              pattern=".*\S.*"
              @keyup="fetchEntreprises(pagination.current_page_url)"
              required
              v-model="search"
          />
          <button class="search-btn" @click="fetchEntreprises(pagination.current_page_url)" type="submit">
              <span>Search</span>
          </button>
      </form>
<b-container class="bv-example-row">
    <b-row class="text-center mb-2">
        <b-col cols="8">
            <button type="button" class="btn btn-primary mx-1 float-start"  @click="resetModal1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                New Activity
            </button>
        </b-col>
        <b-col>
        </b-col>
    </b-row>
</b-container>

<formEntreprise  @addEntreprise="addEntreprise" :oldEntreprise="entreprise" />
<showEntreprises :entreprises="entreprises" :pagination="pagination" @fetchEntreprises="fetchEntreprises" @deleteEntreprise="deleteEntreprise" @updateEntreprise="updateEntreprise"/>
</div>
</template>

<script>
    import showEntreprises from './show.vue';
    import formEntreprise from './form.vue';
export default {
    components:{
        showEntreprises,
        formEntreprise
    },
    data(){
        return {
            entreprises : [],
            entreprise : {
                id:"",
                titre:"",
                matricule_fiscale:"",
                registre_commerce:"",
                addresse:"",
                ville:"",
                activities:""
            },
            pagination:{},
            edit:false,
            search:""


        }
    },
    created(){
        this.fetchEntreprises();
    },
    methods : {
        fetchEntreprises(page_url="/api/entreprise"){
            let vm = this;
            // page_url = this.search!=''?'/api/entreprise':page_url;
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
                    this.entreprises = res.data;
                    vm.makePagination(res);
                })
                .catch(err => console.log(err))
        },
        makePagination(meta) {
            this.pagination = {
                current_page: meta.current_page,
                current_page_url: 'http://localhost:8000/api/entreprise?page='+meta.current_page,
                last_page: meta.last_page,
                next_page_url: meta.next_page_url,
                prev_page_url: meta.prev_page_url
            };
        },
        deleteEntreprise(id) {
            if (confirm('Delete Entreprise ' + id)) {
                fetch('api/entreprise/' + id, {method: 'delete'})
                    .then(res => {
                        this.fetchEntreprises();
                    })
                    .then(data => {
                    })
                    .catch(err => console.log(err));
            }
        },
        resetModal1(){
            this.entreprise={};
        },
        addEntreprise(entreprise) {
            if (!this.edit) {
                fetch('api/entreprise/add', {
                    method: 'post',
                    body: JSON.stringify(entreprise),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                            this.fetchEntreprises();
                        }
                    )
                    .catch(err => console.log(err))
            } else {
                fetch('api/entreprise/' + this.entreprise.id, {
                    method: 'put',
                    body: JSON.stringify(entreprise),
                    headers: {
                        "Content-Type": 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                            this.fetchEntreprises();
                        }
                    )
                    .catch(err => console.log(err))
            }
        },
        updateEntreprise(entreprise){
            this.edit=true;
            this.entreprise = entreprise;
        },
    }
}
</script>

<style>

.contain{
    margin-left: 100px!important;
    transition: all 0.3s ease-in-out;
}
.contain-closed{
    margin-left: 0px!important;
    transition: all 0.3s ease-in-out;

}
#search {
    font: 1em Hind, sans-serif;
    line-height: 1.5em;
}
body,
input {
    color: #171717;
}
.search-bar {
    display: flex;
}

.search-bar input,
.search-btn,
.search-btn:before,
.search-btn:after {
    transition: all 0.25s ease-out;
}
.search-bar input,
.search-btn {
    width: 3em;
    height: 3em;
}
.search-bar input:invalid:not(:focus),
.search-btn {
    cursor: pointer;
}
.search-bar,
.search-bar input:focus,
.search-bar input:valid {
    width: 100%;
}
.search-bar #search:focus,
.search-bar #search:not(:focus) + .search-btn:focus {
    outline: transparent;
}
.search-bar {
    margin: auto;
    padding: 1.5em;
    justify-content: center;
    max-width: 30em;
}
.search-bar #search {
    background: transparent;
    border-radius: 1.5em;
    box-shadow: 0 0 0 0.4em #171717 inset;
    padding: 0.75em;
    transform: translate(0.5em, 0.5em) scale(0.5);
    transform-origin: 100% 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.search-bar #search::-webkit-search-decoration {
    -webkit-appearance: none;
}
.search-bar #search:focus,
.search-bar #search:valid {
    background: #fff;
    border-radius: 0.375em 0 0 0.375em;
    box-shadow: 0 0 0 0.1em #d9d9d9 inset;
    transform: scale(1);
}
.search-btn {
    background: #171717;
    border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
    padding: 0.75em;
    position: relative;
    transform: translate(0.25em, 0.25em) rotate(45deg) scale(0.25, 0.125);
    transform-origin: 0 50%;
}
.search-btn:before,
.search-btn:after {
    content: "";
    display: block;
    opacity: 0;
    position: absolute;
}
.search-btn:before {
    border-radius: 50%;
    box-shadow: 0 0 0 0.2em #f1f1f1 inset;
    top: 0.75em;
    left: 0.75em;
    width: 1.2em;
    height: 1.2em;
}
.search-btn:after {
    background: #f1f1f1;
    border-radius: 0 0.25em 0.25em 0;
    top: 51%;
    left: 51%;
    width: 0.75em;
    height: 0.25em;
    transform: translate(0.2em, 0) rotate(45deg);
    transform-origin: 0 50%;
}
.search-btn span {
    display: inline-block;
    overflow: hidden;
    width: 1px;
    height: 1px;
}
/* Active state */
.search-bar #search:focus + .search-btn,
.search-bar #search:valid + .search-btn {
    background: #008cff;
    border-radius: 0 0.375em 0.375em 0;
    transform: scale(1);
}
.search-bar #search:focus + .search-btn:before,
.search-bar #search:focus + .search-btn:after,
.search-bar #search:valid + .search-btn:before,
.search-bar #search:valid + .search-btn:after {
    opacity: 1;
}
.search-bar #search:focus + .search-btn:hover,
.search-bar #search:valid + .search-btn:hover,
.search-bar #search:valid:not(:focus) + .search-btn:focus {
    background: #0c48db;
}
.search-bar #search:focus + .search-btn:active,
.search-bar #search:valid + .search-btn:active {
    transform: translateY(1px);
}
@media screen and (prefers-color-scheme: dark) {
    body,
    #search {
        color: #f1f1f1;
    }
    body {
        background: #171717;
    }
    .search-bar #search {
        box-shadow: 0 0 0 0.4em #3a3838 inset;
    }
    .search-bar #search:focus,
    .search-bar #search:valid {
        background: #3d3d3d;
        box-shadow: 0 0 0 0.1em #3d3d3d inset;
    }
    .search-btn {
        background: #3a3838;
    }
}
</style>
