<template>
<div class="contain">khra</div>
</template>

<script>
export default {
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
        console.log("khra")
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
                    this.entreprise = res.data;
                    console.log(this.entreprise);
                    this.entreprise.forEach(entreprise => console.log(entreprise.titre))
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
    }
}
</script>

<style>

</style>
