<template>
    <div>
        <div>
            <div class="content">
                <div class="pt-3 container-fluid">
                    <topnav show="false" />
                                    <b-overlay
                    v-if="show"
                    :show="show"
                    class="d-inline-block"
                    style="height:500px;width:100%"
                ></b-overlay>
                <div v-if="!show">

                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <md-card md-with-hover >
                                <div class="card card-stats">
                                    <div class="card-header card-header-warning card-header-icon">
                                        <div class="card-icon">
                                            <i class="material-icons">apartment</i>
                                        </div>
                                        <p class="card-category">total entreprises</p>
                                        <h3 class="card-title">{{ totalEntreprise }}</h3>
                                    </div>
                                    <div class="card-footer">
                                        <div class="stats">
                                            <a
                                                @click="$router.push({ name: 'Entreprise' })"
                                            >Voir entreprise</a>
                                        </div>
                                    </div>
                                </div>
                            </md-card>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <md-card md-with-hover >
                                <div class="card card-stats">
                                    <div class="card-header card-header-success card-header-icon">
                                        <div class="card-icon">
                                            <i class="material-icons">person</i>
                                        </div>
                                        <p class="card-category">total employés</p>
                                        <h3 class="card-title">{{ totalEmploye }}</h3>
                                    </div>
                                    <div class="card-footer">
                                        <div class="stats">
                                            <a
                                                @click="$router.push({ name: 'Employe' })"
                                            >Voir employés</a>
                                        </div>
                                    </div>
                                </div>
                            </md-card>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <md-card md-with-hover >

                                <div class="card card-stats">
                                    <div class="card-header card-header-danger card-header-icon">
                                        <div class="card-icon">
                                            <i class="material-icons">article</i>
                                        </div>
                                        <p class="card-category">total fiches</p>
                                        <h3 class="card-title">{{ totalFiche }}</h3>
                                    </div>
                                    <div class="card-footer">
                                        <div class="stats">
                                            <a @click="$router.push({ name: 'Fiche' })">Voir fiches</a>
                                        </div>
                                    </div>
                                </div>

                            </md-card>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <md-card md-with-hover >

                                <div class="card card-chart">
                                    <div
                                        class="card-header card-header-success"
                                        style="background: linear-gradient(130deg, rgba(106,191,105,1) 0%, rgba(56,142,60,1) 100%); "
                                    >
                                        <LineChart v-if="loaded" :labels="labels" :data="data" />
                                    </div>
                                      <md-ripple @click="fetchStats">

                                    <div class="card-body">
                                        <h4 class="card-title">Fréquence de génération des fiches</h4>
                                    </div>
                                    <div class="card-footer">
                                        <div class="stats">
                                            <i class="material-icons">access_time</i>
                                            Derniere modification {{ lastAddedFiche }}
                                        </div>
                                    </div>
                                      </md-ripple>
                                </div>

                            </md-card>
                        </div>
                        <div class="col-md-4">
                            <md-card md-with-hover >

                                <div class="card card-chart">
                                    <div
                                        class="card-header card-header-warning"
                                        style="background: linear-gradient(130deg, rgba(255,138,80,1) 0%, rgba(255,87,34,1) 100%);"
                                    >
                                        <BarChart v-if="loaded" :labels="labelsE" :data="dataE" />
                                    </div>
                                      <md-ripple @click="fetchStats">
                                    <div class="card-body">
                                        <h4 class="card-title">Nombre d'employés par entreprise</h4>
                                    </div>
                                    <div class="card-footer">
                                        <div class="stats">
                                            <i class="material-icons">access_time</i>
                                            Derniere modification {{ lastAddedEmploye }}
                                        </div>
                                    </div>
                                </md-ripple>
                                </div>
                            </md-card>
                        </div>
                        <div class="col-md-4">
                            <md-card md-with-hover >
                                <div class="card card-chart">
                                    <div
                                        class="card-header card-header-danger"
                                        style="background-image: linear-gradient(130deg, rgb(128, 214, 255) 0%, rgb(66, 165, 245) 100%);"
                                    >
                                        <AreaChart
                                            style="color:white!important"
                                            v-if="loaded"
                                            :labels="labelsA"
                                            :data="dataA"
                                        />
                                    </div>
                                      <md-ripple @click="fetchStats">

                                    <div class="card-body">
                                        <h4 class="card-title">Salaire moyen par entreprise</h4>
                                    </div>
                                    <div class="card-footer">
                                        <div class="stats">
                                            <i class="material-icons">access_time</i>
                                            Derniere modification {{ lastAddedFiche }}
                                        </div>
                                    </div>
                                    </md-ripple>
                                </div>
                            </md-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import LineChart from "./lineChart.vue"
import BarChart from "./barChart.vue"
import AreaChart from "./areaChart.vue"
import topnav from "../topnav.vue"

export default {
    components: {
        LineChart,
        BarChart,
        AreaChart,
        topnav
    },
    data() {
        return {
            totalEntreprise: 0,
            totalEmploye: 0,
            totalFiche: 0,
            employeParEntreprise: '',
            frequenceFiches: '',
            labels: '',
            data: '',
            chartdata: null,
            loaded: false,
            labelsA: '',
            dataA: '',
            lastAddedEmploye: '',
            lastAddedFiche: '',
            labelsE: '',
            dataE: '',
            show: true,

        }
    },
    async mounted() {
        this.fetchStats();
    },

    methods: {
        fetchStats() {
            fetch('api/stats', {
                method: 'GET',
            })
                .then(res => res.json())
                .then(res => {
                    this.totalEntreprise = res.totalEntreprise;
                    this.totalEmploye = res.totalEmploye;
                    this.totalFiche = res.totalFiche;
                    this.employeParEntreprise = res.employeParEntreprise;
                    this.frequenceFiches = res.frequenceFiches;

                    this.labelsA = res.entrepriseMoySalaire.labels;
                    this.dataA = res.entrepriseMoySalaire.data;

                    this.lastAddedEmploye = res.lastAddedEmploye;
                    this.lastAddedFiche = res.lastAddedFiche;

                    this.labelsE = this.employeParEntreprise.labels;
                    this.dataE = this.employeParEntreprise.data;

                    this.labels = this.frequenceFiches.labels;
                    this.data = this.frequenceFiches.data;
                    this.loaded = true;
                    this.show=false;
                })
                .catch(err => console.log(err))
        },

    }
}
</script>

<style>
</style>
