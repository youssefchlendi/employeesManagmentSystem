<template>
  <sidebar-menu @toggle-collapse="checkWidth" :width="'200px'" :menu="menu"/>
</template>

<script>
export default {
 data() {
      return {
        menu: [
          {
            header: 'Main Navigation',
            hiddenOnCollapse: true
          },
          {
            href: '/',
            title: 'Dashboard',
            icon: 'fas fa-user',
            child: [
              {
                href: '/charts/sublink',
                title: 'Sub Link'
              }
            ]
          },
          {
            href: '/Entreprise',
            title: 'Entreprise',
            icon: 'fas fa-building',
          },
          {
            href: '/Employe',
            title: 'Employe',
            icon: 'fas fa-user',
          }

        ]
      }
    },
    methods :{
            checkWidth(){
        let docs = document.querySelectorAll('.vsm_expanded');
        if (docs.length==0){
            document.querySelector('#contain').classList.add('contain');
            document.querySelector('#contain').classList.remove('contain-closed');
        }else{
            document.querySelector('#contain').classList.remove('contain');
            document.querySelector('#contain').classList.add('contain-closed');
        }
    }

    }
}
</script>

<style>

</style>
