
<template>
    <div class="sidebara" :class="isOpened ? 'open' : ''" :style="cssVars">
        <div class="logo-details" style="margin: 6px 14px 0 14px;">
            <!-- <img v-if="menuLogo" :src="menuLogo" alt="menu-logo" class="menu-logo icon" /> -->
            <!-- <i  class="bx icon" :class="menuIcon" /> -->
            <div class="logo_name">{{ menuTitle }}</div>
            <i
                class="bx"
                :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'"
                id="btn"
                @click="isOpened = !isOpened"
            />
        </div>

        <div
            style="display: flex ; flex-direction:column; justify-content: space-between; flex-grow: 1; max-height: calc(100% - 60px); "
        >
            <div id="my-scroll" style="margin: 6px 14px 0 14px; overflow-y: revert!important;">
                <ul class="nav-list" style="overflow: visible;padding-left:0!important">
                    <!-- <li v-if="isSearch" @click="isOpened = true">
                        <i class="bx bx-search" />
                        <input
                            type="text"
                            :placeholder="searchPlaceholder"
                            @input="$emit('search-input-emit', $event.target.value)"
                        />
                        <span class="tooltip">{{ searchTooltip }}</span>
                    </li>-->

                    <span v-for="(menuItem, index) in menuItems" :key="index">
                        <li>
                            <router-link :to="menuItem.link">
                                <i class="bx" :class="menuItem.icon || 'bx-square-rounded'" />
                                <!-- <font-awesome-icon :icon="menuItem.icon" /> -->
                                <span class="links_name">{{ menuItem.name }}</span>
                            </router-link>
                            <span class="tooltip">{{ menuItem.tooltip || menuItem.name }}</span>
                        </li>
                    </span>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SidebaraMenuAkahon',
    props: {
        //! Menu settings
        isMenuOpen: {
            type: Boolean,
            default: true,
        },
        menuTitle: {
            type: String,
            default: 'PayTun',
        },
        menuLogo: {
            type: String,
            default: '',
        },
        menuIcon: {
            type: String,
            default: 'bxl-c-plus-plus',
        },
        isPaddingLeft: {
            type: Boolean,
            default: true,
        },
        menuOpenedPaddingLeftBody: {
            type: String,
            default: '250px'
        },
        menuClosedPaddingLeftBody: {
            type: String,
            default: '78px'
        },
        //! Menu items
        menuItems: {
            type: Array,
            default: () => [
                {
                    link: '/',
                    name: 'Dashboard',
                    tooltip: 'Dashboard',
                    icon: 'bxs-user',
                },
                {
                    link: '/Entreprise',
                    name: 'Entreprise',
                    tooltip: 'Entreprise',
                    icon: 'bxs-building',
                },
                {
                    link: '/Employe',
                    name: 'Employe',
                    tooltip: 'Employe',
                    icon: 'bxs-user',
                },
                {
                    link: '/Fiche',
                    name: 'Fiche',
                    tooltip: 'Fiche',
                    icon: 'bxs-file',
                },
                {
                    link: '/Rebrique',
                    name: 'Rebrique',
                    tooltip: 'Rebrique',
                    icon: 'bxs-grid',
                }
            ],
        },
        //! Search
        isSearch: {
            type: Boolean,
            default: true,
        },
        searchPlaceholder: {
            type: String,
            default: 'Search...',
        },
        searchTooltip: {
            type: String,
            default: 'Search',
        },
        //! Profile detailes
        profileImg: {
            type: String,
            default: 'x',
        },
        profileName: {
            type: String,
            default: 'Fayzullo Saidakbarov',
        },
        profileRole: {
            type: String,
            default: 'Frontend vue developer',
        },
        isExitButton: {
            type: Boolean,
            default: true,
        },
        //! Styles
        bgColor: {
            type: String,
            default: '#11101d',
        },
        secondaryColor: {
            type: String,
            default: '#1d1b31',
        },
        homeSectionColor: {
            type: String,
            default: '#e4e9f7',
        },
        logoTitleColor: {
            type: String,
            default: '#fff',
        },
        iconsColor: {
            type: String,
            default: '#fff',
        },
        itemsTooltipColor: {
            type: String,
            default: '#e4e9f7',
        },
        searchInputTextColor: {
            type: String,
            default: '#fff',
        },
        menuItemsHoverColor: {
            type: String,
            default: '#fff',
        },
        menuItemsTextColor: {
            type: String,
            default: '#fff',
        },
        menuFooterTextColor: {
            type: String,
            default: '#fff',
        },
    },
    data() {
        return {
            isOpened: false
        }
    },
    mounted() {
        this.isOpened = this.isMenuOpen
    },
    computed: {
        cssVars() {
            return {
                // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
                '--bg-color': this.bgColor,
                '--secondary-color': this.secondaryColor,
                '--home-section-color': this.homeSectionColor,
                '--logo-title-color': this.logoTitleColor,
                '--icons-color': this.iconsColor,
                '--items-tooltip-color': this.itemsTooltipColor,
                '--serach-input-text-color': this.searchInputTextColor,
                '--menu-items-hover-color': this.menuItemsHoverColor,
                '--menu-items-text-color': this.menuItemsTextColor,
                '--menu-footer-text-color': this.menuFooterTextColor,
            }
        },
    },
    watch: {
        isOpened() {
            window.document.body.style.paddingLeft = this.isOpened && this.isPaddingLeft ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody
        }
    }
}
</script>

<style>
/* Google Font Link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
body {
    transition: all 0.5s ease;
}
.menu-logo {
    width: 30px;
    margin: 0 10px 0 10px;
}
.sidebara {
    position: relative;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    min-height: min-content;
    /* overflow-y: auto; */
    width: 78px;
    background: var(--bg-color);
    /* padding: 6px 14px 0 14px; */
    z-index: 99;
    transition: all 0.5s ease;
}
.sidebara.open {
    width: 250px;
}
.sidebara .logo-details {
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
}
.sidebara .logo-details .icon {
    opacity: 0;
    transition: all 0.5s ease;
}
.sidebara .logo-details .logo_name {
    color: var(--logo-title-color);
    font-size: 20px;
    font-weight: 600;
    opacity: 0;
    transition: all 0.5s ease;
}
.sidebara.open .logo-details .icon,
.sidebara.open .logo-details .logo_name {
    opacity: 1;
}
.sidebara .logo-details #btn {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    font-size: 22px;
    transition: all 0.4s ease;
    font-size: 23px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s ease;
}
.sidebara.open .logo-details #btn {
    text-align: right;
}
.sidebara i {
    color: var(--icons-color);
    height: 60px;
    min-width: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
}
.sidebara .nav-list {
    margin-top: 20px;
    /* margin-bottom: 60px; */
    /* height: 100%; */
    /* min-height: min-content; */
}
.sidebara li {
    position: relative;
    margin: 8px 0;
    list-style: none;
}
.sidebara li .tooltip {
    position: absolute;
    top: -20px;
    left: calc(100% + 15px);
    z-index: 3;
    background: var(--items-tooltip-color);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 400;
    opacity: 0;
    white-space: nowrap;
    pointer-events: none;
    transition: 0s;
}
.sidebara li:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
    transition: all 0.4s ease;
    top: 50%;
    transform: translateY(-50%);
}
.sidebara.open li .tooltip {
    display: none;
}
.sidebara input {
    font-size: 15px;
    color: var(--serach-input-text-color);
    font-weight: 400;
    outline: none;
    height: 50px;
    width: 100%;
    width: 50px;
    border: none;
    border-radius: 12px;
    transition: all 0.5s ease;
    background: var(--secondary-color);
}
.sidebara.open input {
    padding: 0 20px 0 50px;
    width: 100%;
}
.sidebara .bx-search {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 22px;
    background: var(--secondary-color);
    color: var(--icons-color);
}
.sidebara.open .bx-search:hover {
    background: var(--secondary-color);
    color: var(--icons-color);
}
.sidebara .bx-search:hover {
    background: var(--menu-items-hover-color);
    color: var(--bg-color);
}
.sidebara li a {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 12px;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    background: var(--bg-color);
}
.sidebara li a:hover {
    background: var(--menu-items-hover-color);
}
.sidebara li a .links_name {
    color: var(--menu-items-text-color);
    font-size: 15px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s;
}
.sidebara.open li a .links_name {
    opacity: 1;
    pointer-events: auto;
}
.sidebara li a:hover .links_name,
.sidebara li a:hover i {
    transition: all 0.5s ease;
    color: var(--bg-color);
}
.sidebara li i {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    border-radius: 12px;
}
.sidebara div.profile {
    position: relative;
    height: 60px;
    width: 78px;
    /* left: 0;
    bottom: 0; */
    padding: 10px 14px;
    background: var(--secondary-color);
    transition: all 0.5s ease;
    overflow: hidden;
}
.sidebara.open div.profile {
    width: 250px;
}
.sidebara div .profile-details {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}
.sidebara div img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 6px;
    margin-right: 10px;
}
.sidebara div.profile .name,
.sidebara div.profile .job {
    font-size: 15px;
    font-weight: 400;
    color: var(--menu-footer-text-color);
    white-space: nowrap;
}
.sidebara div.profile .job {
    font-size: 12px;
}
.sidebara .profile #log_out {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: var(--secondary-color);
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-radius: 0px;
    transition: all 0.5s ease;
}
.sidebara.open .profile #log_out {
    width: 50px;
    background: var(--secondary-color);
    opacity: 0;
}
.sidebara.open .profile:hover #log_out {
    opacity: 1;
}
.sidebara.open .profile #log_out:hover {
    opacity: 1;
    color: red;
}
.sidebara .profile #log_out:hover {
    color: red;
}
.home-section {
    position: relative;
    background: var(--home-section-color);
    min-height: 100vh;
    top: 0;
    left: 78px;
    width: calc(100% - 78px);
    transition: all 0.5s ease;
    z-index: 2;
}
.sidebara.open ~ .home-section {
    left: 250px;
    width: calc(100% - 250px);
}
.home-section .text {
    display: inline-block;
    color: var(--bg-color);
    font-size: 25px;
    font-weight: 500;
    margin: 18px;
}

#my-scroll {
    height: 100%;
}
#my-scroll::-webkit-scrollbar {
    display: none;
    /* background-color: rgba(255, 255, 255, 0.2);
    width: 10px;
    border-radius:5px  */
}
/* #my-scroll::-webkit-scrollbar-thumb{
    background-color: red;
    border-radius:5px
  }
  #my-scroll::-webkit-scrollbar-button:vertical:start:decrement{
    display:none;
  }
  #my-scroll::-webkit-scrollbar-button:vertical:end:increment{
    display:none;
  } */
</style>
