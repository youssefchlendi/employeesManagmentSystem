<script>
import { Bar } from "vue-chartjs";

export default {
    extends: Bar,
    props: ['labels', 'data'],

    data() {
        return {
        };
    },
    mounted() {

        this.renderChart(
            {
                labels: this.labels,

                datasets: [
                    {
                        label: "Salaire moyenne/entreprise",
                        data: this.data,
                        backgroundColor: "white",
                        borderColor: "white",
                        pointBackgroundColor: "white",
                        width: 20
                    }
                ]
            },
            {
                responsive: true, maintainAspectRatio: false, title: {
                    display: true,
                    text: "My Data"
                }
            }
        );
    }
};
</script>
