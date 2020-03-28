<template>
    <section>
        <mdb-row>
            <mdb-col lg="12" class="mb-4">
                <mdb-card>
                    <mdb-card-header>Casos confirmados por d&iacute;a</mdb-card-header>
                    <mdb-card-body  >
                        <mdb-container>
                            <mdb-bar-chart
                                    :data="barChartData"
                                    :options="barChartOptions"
                                    :width="600"
                                    :height="400"
                            ></mdb-bar-chart>
                        </mdb-container>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>
    </section>
</template>

<script>
    import { mdbRow, mdbCol, mdbCard, mdbCardHeader, mdbCardBody, mdbBarChart, mdbContainer } from "mdbvue";
    import { mapState }  from 'vuex'

    export default {
        name: "NewCasesByDay",
        components: {
            mdbRow,
            mdbCol,
            mdbCard,
            mdbCardHeader,
            mdbCardBody,
            mdbBarChart,
            mdbContainer
        },
        computed: {
            ...mapState(['provincesStat'])
        },
        data() {
            return {
                barChartData: {
                    labels: [
                        "1/03/2020",
                        "2/03/2020",
                        "5/03/2020",
                        "7/03/2020",
                        "13/03/2020",
                        "16/03/2020",
                        "18/03/2020",
                        "19/03/2020",
                        "20/03/2020",
                        "21/03/2020",
                        "22/03/2020",
                        "23/03/2020",
                        "24/03/2020",
                        "25/03/2020",
                        "26/03/2020",
                        "27/03/2020"
                    ],
                        datasets: [
                        {
                            label: "Infectados",
                            backgroundColor:  "rgba(127, 249, 216, 0.4)",
                            borderColor: "rgba(127, 249, 216, 1)",
                            borderWidth: 0.8,
                            data: [0,0,1,3,6,10,13,38,40,90,43,67,80,96, 93, 138]
                        }
                    ]
                },
                barChartOptions: {
                    responsive: true,
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
