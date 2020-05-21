<template>
    <section class="mt-lg-5">
        <mdb-row>
            <stat-card v-for="card in cards"
                       :key="card.label"
                       :label="card.label"
                       :data="card.data"
                       :icon="card.icon"
                       :last-update="lastUpdate"
                       md="4"
                       :color="card.color" ></stat-card>
        </mdb-row>
    </section>
</template>

<script>
    import statCard from './statCard'
    import { mdbRow } from 'mdbvue'
    import { mapState }  from 'vuex'
    import { convertToPresentationalNumber } from '../../tools/parses'

    export default {
        name: "StatProvinces",

        data() {
            return {
                totalColumns: {
                    total_cases: 0,
                    total_deaths: 0,
                    total_recovered: 0
                }
            }
        },
        computed: {
            ...mapState(['provincesStat', 'province']),
            getProvince() {
                if (this.provincesStat.province) {
                    return  this.provincesStat.province.provinces.find(item => item.name.toLowerCase() === this.province.toLowerCase());
                }
                return {};
            },
            lastCase () {
                if (!this.getProvince.cases) {
                    return {};
                }

                return this.getProvince.cases[this.getProvince.cases.length - 1]
            },
            totals() {
                if (!this.getProvince.cases) {
                    return this.totalColumns;
                }

                return this.lastCase;
            },
            lastUpdate() {
                return this.lastCase.date;
            },
            cards() {
                return [
                    {label: 'INFECTADOS', data: convertToPresentationalNumber(this.totals.total_cases), icon: 'fa-hospital', color: 'red'},
                    {label: 'RECUPERADOS', data: convertToPresentationalNumber(this.totals.total_recovered), icon: 'fa-walking', color: 'fas fas-far green lighten-1'},
                    {label: 'MUERTES', data: convertToPresentationalNumber(this.totals.total_deaths), icon: 'fa-skull-crossbones', color: 'fas fas-far black accent-2'}
                ]
            }
        },

        components: {
            statCard,
            mdbRow
        }
    }
</script>
