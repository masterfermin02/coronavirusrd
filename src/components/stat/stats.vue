<template>
    <section class="mt-lg-5">
        <mdb-row>
            <stat-card v-for="card in cards" :key="card.label" :label="card.label" :data="card.data" :icon="card.icon" :color="card.color" ></stat-card>
        </mdb-row>
    </section>
</template>

<script>
    import statCard from './statCard'
    import { mdbRow } from 'mdbvue'
    import DRService from '@/services/DRService'
    const fb = require('@/firebaseConfig.js')

    const CountryStat = (data) => {
        return {
            cases: data.cases || 0,
            observes: data.observes || 0,
            deaths: data.deaths || 0,
            recovereds: data.recovereds || 0
        };
    };

    export default {
        name: "stats",
        data () {
            return {
                countryStat: new CountryStat({}),
                cards: [
                    {label: 'INFECTADOS', data: 0, icon: 'fa-hospital', color: 'red'},
                    {label: 'INVESTIGACION', data: 0, icon: 'fa-vials',  color: 'fas fas-far warning-color'},
                    {label: 'RECUPERADOS', data: 0, icon: 'fa-walking', color: 'fas fas-far green lighten-1'},
                    {label: 'MUERTES', data: 0, icon: 'fa-skull-crossbones', color: 'fas fas-far black accent-2'}
                ],
                observes: 0
            }
        },

        components: {
            statCard,
            mdbRow
        },

        methods: {
            async loadData() {
                const stat = await DRService.getStat();
                const latestCountry = stat.latest_stat_by_country.shift();

                this.countryStat = new CountryStat({
                    cases: latestCountry.total_cases,
                    deaths: latestCountry.total_deaths,
                    recovereds: latestCountry.total_recovered
                });

                this.cards = [
                    {label: 'INFECTADOS', data: this.countryStat.cases, icon: 'fa-hospital', color: 'red'},
                    {label: 'INVESTIGACION', data: this.observes, icon: 'fa-vials',  color: 'fas fas-far warning-color'},
                    {label: 'RECUPERADOS', data: this.countryStat.recovereds, icon: 'fa-walking', color: 'fas fas-far green lighten-1'},
                    {label: 'MUERTES', data: this.countryStat.deaths, icon: 'fa-skull-crossbones', color: 'fas fas-far black accent-2'}
                ];
            }
        },

        mounted() {

            fb.investigation.on('value', (snapshot) => {
               this.observes = snapshot.val() || 0;
                this.loadData();
            });

        }
    }
</script>
