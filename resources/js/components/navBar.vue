<template>
    <sidebar-menu
        :show-one-child="true"
        @toggle-collapse="checkWidth(1)"
        @item-click="checkWidth(0)"
        :width="'200px'"
        :menu="menu"
    />
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
                    // child: [
                    //     {
                    //         href: '/charts/sublink',
                    //         title: 'Sub Link'
                    //     }
                    // ]
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
                    child: [
                        {
                            href: '/Employe/addEmploye',
                            title: 'Ajouter employé'
                        }
                    ]
                },
                {
                    href: '/Fiche',
                    title: 'Fiche',
                    icon: 'fas fa-file',
                },
                {
                    href: '/Rebrique',
                    title: 'Rubrique',
                    icon: 'fas fa-puzzle-piece',
                }

            ]
        }
    },
    updated() {
        this.checkWidth();
        console.log('tes');
    },
    methods: {
        checkWidth(t = 0) {
            let docs = document.querySelectorAll('.vsm_expanded');
            if (t == 1) {
                console.log("1");
                if (docs.length == 0) {
                    document.querySelector('#contain').classList.add('contain');
                    document.querySelector('#contain').classList.remove('contain-closed');
                } else {
                    document.querySelector('#contain').classList.remove('contain');
                    document.querySelector('#contain').classList.add('contain-closed');
                }
            } else {
                console.log("0");
                if (docs.length == 0) {
                    document.querySelector('#contain').classList.remove('contain');
                    document.querySelector('#contain').classList.add('contain-closed');
                } else {
                    document.querySelector('#contain').classList.add('contain');
                    document.querySelector('#contain').classList.remove('contain-closed');
                }
            }
        }

    }
}
</script>

<style>
</style>
