<template>
    <section class="mt-lg-5">
        <mdb-row>
            <stat-card v-for="card in cards"
                       :key="card.label"
                       :label="card.label"
                       :data="card.data"
                       :icon="card.icon"
                       :last-update="provincesStat.lastUpdate"
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
        name: "stats",

        computed: {
            ...mapState(['provincesStat']),

            cards() {
                return [
                    {label: 'INFECTADOS', data: convertToPresentationalNumber(this.provincesStat.cases), icon: 'fa-hospital', color: 'red'},
                    {label: 'Activos', data: convertToPresentationalNumber(this.provincesStat.cases - this.provincesStat.recoverers - this.provincesStat.deaths), icon: 'fa-vials',  color: 'fas fas-far warning-color'},
                    {label: 'RECUPERADOS', data: convertToPresentationalNumber(this.provincesStat.recoverers), icon: 'fa-walking', color: 'fas fas-far green lighten-1'},
                    {label: 'MUERTES', data: convertToPresentationalNumber(this.provincesStat.deaths), icon: 'fa-skull-crossbones', color: 'fas fas-far black accent-2'}
                ]
            }
        },

        components: {
            statCard,
            mdbRow
        }
    }
</script>
