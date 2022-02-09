<template>
    <div>
        <!-- <b-input-group class="mt-5 mb-3" style="width: 33%; left:33%">
        <b-form-input v-model="search" @keyup="$emit('fetch', search)"></b-form-input>
        <b-input-group-append>
            <b-button text="Search" @click="$emit('fetch', search)" variant="secondary">Recherche</b-button>
        </b-input-group-append>
    </b-input-group>
<form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search" >
    <div class="input-group"  >
        <input v-model="search" @keyup="$emit('fetch', search)" class="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
        <button @click="$emit('fetch', search)" class="btn btn-primary py-0" type="button">
            <i class="fas fa-search">
            </i>
        </button>
        </div>
        </form>-->
        <div class="row mt-5 mb-3">
            <div class="col-3"></div>
            <div class="col-6 mx-auto">
                <div class="input-group">
                    <input
                        v-model="search"
                        @keyup="$emit('fetch', search)"
                        class="bg-light form-control small"
                        type="text"
                        placeholder="Search for ..."
                    />
                    <button
                        @click="$emit('fetch', search)"
                        class="btn btn-primary py-0"
                        type="button"
                    >
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: '',
        }
    }
}
</script>

<style>
</style>
