<template>
<div class="contain">
<showEntreprises :entreprises="entreprises" @deleteEntreprise="deleteEntreprise"/>
</div>
</template>

<script>
    import showEntreprises from './show.vue';
export default {
    components:{
        showEntreprises
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
    }
}
</script>

<style>
.contain{
    margin-left: 275px;
}
</style>
