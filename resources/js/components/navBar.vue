<template>
  <sidebar-menu  :width="'200px'" :menu="menu"/>
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
          }

        ]
      }
    }
}
</script>

<style>

</style>
