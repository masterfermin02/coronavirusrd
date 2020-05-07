<template>
    <section class="mt-lg-5">
        <mdb-row>
            <stat-card v-for="card in cards"
                       :key="card.label"
                       :label="card.label"
                       :data="card.data"
                       :icon="card.icon"
                       :last-update="lastUpdate"
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
                    infects: 0,
                    recoverers: 0,
                    discarted: 0,
                    deaths: 0
                }
            }
        },
        computed: {
            ...mapState(['provinces', 'province']),
            getProvince() {
                return this.provinces.find(item => item.title.toLowerCase() === this.province.toLowerCase()) || {};
            },
            totals() {
                if (!this.getProvince.stats) {
                    return this.totalColumns;
                }

                return this.getProvince.stats.reduce((totals, stat) => {
                    return Object.keys(this.totalColumns).reduce((columnTotal, column) => {
                        totals[column] += parseInt(stat[column] || 0);
                        return totals;
                    }, totals);
                }, this.totalColumns);
            },
            lastUpdate() {
                if (this.getProvince.stats && this.getProvince.stats.length) {
                    return this.getProvince.stats[this.getProvince.stats.length - 1].date;
                }

                return '';
            },
            cards() {
                return [
                    {label: 'INFECTADOS', data: convertToPresentationalNumber(this.totals.infects), icon: 'fa-hospital', color: 'red'},
                    {label: 'DESCARTADOS', data: convertToPresentationalNumber(this.totals.discarted), icon: 'fa-vials', color: 'fas fas-far warning-color'},
                    {label: 'RECUPERADOS', data: convertToPresentationalNumber(this.totals.recoverers), icon: 'fa-walking', color: 'fas fas-far green lighten-1'},
                    {label: 'MUERTES', data: convertToPresentationalNumber(this.totals.deaths), icon: 'fa-skull-crossbones', color: 'fas fas-far black accent-2'}
                ]
            }
        },

        components: {
            statCard,
            mdbRow
        }
    }
</script>
