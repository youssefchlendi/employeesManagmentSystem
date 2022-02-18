<script>
import { Line } from 'vue-chartjs';

export default {
    extends: Line,
    props: ['labels', 'data'],
    mounted() {
        this.renderChart(
            {
                labels: this.labels,
                datasets: [
                    {
                        label: "fiches",
                        data: this.data,
                        backgroundColor: "white",
                        borderColor: "white",
                        pointBackgroundColor: "white",
                        fontColor:"white"
                    }
                ]
            },
            {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                                  fontColor: 'white',
                    text: "My Data"
                }
            }
        );
    }
};
</script>
