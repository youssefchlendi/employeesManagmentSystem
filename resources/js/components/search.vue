<template>
    <div style="width: 50%;">
        <!-- <div class="row  mb-3">
            <div class="col mx-auto"> -->
                <div class="input-group">
                    <input
                        v-model="search"
                        @keyup="$emit('fetch', search)"
                        class="bg-white form-control small"
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
            <!-- </div>
        </div> -->
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
