<template>
    <li class="container list-unstyled">
        <div class="row shadow-sm text-left">
            <div class>
                <p class="text-left">{{ rebrique.titre }}</p>
                <b-input-group class prepend="$">
                    <b-form-input
                        style="background-color:#eceff1; border:0!important;"
                        v-on:keyup.enter="updateMontant(rebrique.pivot.montant)"
                        v-model="rebrique.pivot.montant"
                    ></b-form-input>
                    <b-input-group-append>
                        <b-button
                            variant="success"
                            class="small"
                            :class="$screen.width<768?'p-2':''"
                            @click="updateMontant(rebrique.pivot.montant)"
                        >
                            <b-icon icon="check" scale="2"></b-icon>
                        </b-button>
                        <b-button :class="$screen.width<768?'p-2':''" variant="danger" @click="attachRebrique(rebrique.id)">
                            <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                        </b-button>
                    </b-input-group-append>
                </b-input-group>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    emits: ["fetchFiches", "attachRebrique"],
    props: {
        rebrique: Object,
        alert: Object
    },
    data() {
        return {};
    },
    methods: {
        containsObject() { },
        pushTo() { },
        fetchFiches() {
            console.log('hihihi');
            this.$emit("fetchFiches");
        },
        updateMontant() {
            if (typeof this.rebrique !== "undefined") {
                fetch(
                    "api/fiche/" +
                    this.rebrique.pivot.fiche_id +
                    "/rebrique/" +
                    this.rebrique.id,
                    {
                        method: "PUT",
                        body: JSON.stringify({ montant: this.rebrique.pivot.montant }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        this.fetchFiches();
                        this.alert.variant = "warning";
                        this.alert.msg = "Montant modifié avec succès"
                        this.alert.dismissCountDown = 5;

                    })
                    .catch((err) => console.log(err));

                fetch("api/fiche/calcTotal/" + this.rebrique.pivot.fiche_id, {
                    method: "get",
                });
            }
        },
        attachRebrique(RebriqueId) {
            if (confirm('Dissocier rubrique ' + RebriqueId)) {
            this.$emit('attachRebrique', { rid: RebriqueId, fid: this.rebrique.pivot.fiche_id });
            }
        },
    },
};
</script>

<style>
</style>
