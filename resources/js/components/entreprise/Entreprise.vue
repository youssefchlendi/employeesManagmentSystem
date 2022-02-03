<template>
<div class="contain">
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
<formEntreprise :oldEntreprise="entreprise"/>
<showEntreprises :entreprises="entreprises" @deleteEntreprise="deleteEntreprise"/>
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
                    console.log(this.entreprises);
                    this.entreprises.forEach(entreprises => console.log(entreprises.titre))
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

        }
    }
}
</script>

<style>
.contain{
    margin-left: 275px;
}
</style>
