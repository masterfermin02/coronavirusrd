<template>
    <section>
        <mdb-row>
            <mdb-col lg="12" class="mb-4">
                <mdb-card>
                    <mdb-card-header>Evolucion De Casos</mdb-card-header>
                    <mdb-card-body  >
                        <mdb-container>
                            <mdb-line-chart
                                    :data="lineChartData"
                                    :options="lineChartOptions"
                                    :width="600"
                                    :height="400"
                            ></mdb-line-chart>
                        </mdb-container>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>
    </section>
</template>

<script>
    import { mdbRow, mdbCol, mdbCard, mdbCardHeader, mdbCardBody, mdbLineChart, mdbContainer } from "mdbvue";
    import { mapState }  from 'vuex'

    export default {
        name: "EvolutionaryCasesByDay",
        components: {
            mdbRow,
            mdbCol,
            mdbCard,
            mdbCardHeader,
            mdbCardBody,
            mdbLineChart,
            mdbContainer
        },
        computed: {
            ...mapState(['provincesStat'])
        },
        data() {
            return {
                lineChartData: {
                    labels: [
                        "28/02/2020",
                        "29/02/2020",
                        "1/03/20",
                        "4/03/2020",
                        "5/03/2020",
                        "6/03/2020",
                        "8/03/2020",
                        "9/03/2020",
                        "10/03/2020",
                        "11/03/2020",
                        "12/03/2020",
                        "13/03/2020",
                        "15/03/2020",
                        "17/03/2020",
                        "18/03/2020",
                        "19/03/2020",
                        "20/03/2020",
                        "21/03/2020",
                        "22/03/2020",
                        "23/03/2020",
                        "24/03/2020"
                    ],
                        datasets: [
                        {
                            label: "Importado",
                            backgroundColor: "rgba(255, 99, 132, 0.1)",
                            borderColor: "rgba(255, 99, 132, 1)",
                            borderWidth: 0.7,
                            data: [2,1,2,3,2,1,2,2,5,5,6,0,0,25,0,40]
                        },
                        {
                            label: "Investigacion",
                            backgroundColor: "rgba(151,187,205,0.2)",
                            borderColor: "rgba(151,187,205,1)",
                            borderWidth: 0.8,
                            data: [0,0,0,0,0,1,1,0,1,1,1,0,0,10,5,35]
                        },
                        {
                            label: "Local",
                            backgroundColor: "rgba(127, 249, 216, 0.4)",
                            borderColor: "rgba(127, 249, 216, 1)",
                            borderWidth: 0.8,
                            data: [0,0,0,0,0,0,0,0,0,0,0,2,1,35,0,45,60,90,50,70,80]
                        }
                    ]
                },
                lineChartOptions: {
                    responsive: false,
                        maintainAspectRatio: false,
                        scales: {
                        xAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    color: "rgba(0, 0, 0, 0.1)"
                                }
                            }
                        ],
                            yAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    color: "rgba(0, 0, 0, 0.1)"
                                }
                            }
                        ]
                    }
                }
            };
        }
    }
</script>

<style scoped>

</style>
