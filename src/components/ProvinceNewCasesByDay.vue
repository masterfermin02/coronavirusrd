<template>
    <section>
        <mdb-row>
            <mdb-col lg="12" class="mb-4">
                <mdb-card>
                    <mdb-card-header>Casos confirmados por d&iacute;a</mdb-card-header>
                    <mdb-card-body  >
                        <mdb-container>
                            <mdb-bar-chart
                                    :data="provincePositiCaseByDateChartData"
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
    import { mapState, mapGetters }  from 'vuex'

    export default {
        name: "ProvinceNewCasesByDay",
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
            ...mapState(['province']),
            ...mapGetters(['provincePositiCaseByDateChartData'])
        },
        data() {
            return {
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
