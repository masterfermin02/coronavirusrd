<template>
    <section>
        <mdb-row>
            <mdb-col lg="12" class="mb-4">
                <mdb-card>
                    <mdb-card-header>{{ provincesStat.deathByAge.title }}</mdb-card-header>
                    <mdb-card-body  >
                        <mdb-container>
                            <mdb-pie-chart
                                    datalabels
                                    :data="pieChartData"
                                    :options="pieChartOptions"
                                    :width="200"
                                    :height="300"
                            />
                        </mdb-container>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>
    </section>
</template>

<script>
    import { mdbRow, mdbCol, mdbCard, mdbCardHeader, mdbCardBody, mdbPieChart, mdbContainer } from "mdbvue";
    import { mapState }  from 'vuex'

    export default {
        name: "DeathByAge",
        components: {
            mdbRow,
            mdbCol,
            mdbCard,
            mdbCardHeader,
            mdbCardBody,
            mdbPieChart,
            mdbContainer
        },
        computed: {
            ...mapState(['provincesStat']),
            pieChartData() {
                return {
                    labels: ["Hombres", "Mujeres"],
                    datasets: [
                        {
                            data: provincesStat.deathByAge.data.map( data => parseInt(data)),
                            backgroundColor: provincesStat.deathByAge.colors,
                            hoverBackgroundColor: provincesStat.deathByAge.hoverColors
                        }
                    ]
                }
            }
        },
        data() {
            return {
                pieChartOptions: {
                    responsive: false,
                    maintainAspectRatio: false,
                    plugins: {
                        datalabels: {
                            color: "white",
                            align: "center",
                            font: {
                                size: 16
                            },
                            formatter: value => {
                                const [dataset] = this.pieChartData.datasets;
                                const setValue = dataset.data.reduce((a, b) => a + b);

                                return `${Math.round((value / setValue) * 100)}%`;
                            }
                        }
                    }
                }
            };
        }
    }
</script>

<style scoped>

</style>
