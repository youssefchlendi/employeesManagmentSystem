<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
    props: ['labels','data'],
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: "Employé/entreprise",
            data: this.data,
            backgroundColor: "#FDE7E7",
            borderColor: "white",
            pointBackgroundColor: "white"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Data"
        }
      }
    );
  }
};
</script>
