<template>
    <section>
        <mdb-row>
            <mdb-col lg="12" class="mb-4">
                <mdb-card>
                    <mdb-card-header>Evoluci&oacute;n De Recuperados</mdb-card-header>
                    <mdb-card-body  >
                        <mdb-container>
                            <mdb-line-chart
                                    :data="ProvinceRecoverersChartData"
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
    import { mapState, mapGetters }  from 'vuex'

    export default {
        name: "ProvinceEvolutionaryRecoverersByDay",
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
            ...mapState(['province']),
            ...mapGetters(['ProvinceRecoverersChartData'])
        },
        data() {
            return {
                lineChartOptions: {
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
