<template>
    <section>
        <mdb-card class="mb-4">
            <mdb-card-body class="d-sm-flex justify-content-between">
                <h4 class="mb-sm-0 pt-2">
                    Estado actual  del Coronavirus en REP DOM.
                </h4>
            </mdb-card-body>
        </mdb-card>

        <evolutionary-infects-by-day />
        <evolutionary-deaths-by-day />
        <evolutionary-recoverers-by-day />

        <section>
            <mdb-row>
                <mdb-col md="12" class="mb-4">
                    <mdb-card reverse>
                        <mdb-card-header>Edad media de fallecidos</mdb-card-header>
                        <mdb-card-body class="text-center" cascade>
                            <mdb-card-title><strong>{{provincesStat.avrgAge}}</strong> a&ntilde;os</mdb-card-title>
                            <mdb-card-text>Rango de: {{provincesStat.minAge}} a {{provincesStat.maxAge}} a&ntilde;os</mdb-card-text>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
            </mdb-row>
        </section>

        <gender-comparision />

        <new-cases-by-day />

        <section class="mt-lg-5">
            <mdb-row>
                <mdb-col xl="12" md="6" class="mb-r">
                    <mdb-card cascade class="cascading-admin-card">
                        <div class="admin-up">
                            <img src="../assets/android-chrome-192x192.png" />
                            <div class="data">
                                <p>¿Qué deseas ver ahora?</p>
                            </div>
                        </div>
                        <mdb-card-body>
                            <mdb-btn color="primary" @click="urlPush('/details')" >Ver mapa</mdb-btn>
                            <mdb-btn color="primary" @click="urlPush('/acerca')" >Acerca</mdb-btn>
                            <p><a href="/" ><mdb-icon class="fas" icon="male" /> Ver mas Datos</a></p>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
            </mdb-row>
        </section>

    </section>
</template>

<script>
    import GenderComparision from '../components/GenderComparision';
    import EvolutionaryInfectsByDay from '../components/EvolutionaryInfectsByDay';
    import EvolutionaryDeathsByDay from '../components/EvolutionaryDeathsByDay';
    import EvolutionaryRecoverersByDay from '../components/EvolutionaryRecoverersByDay';
    import NewCasesByDay from '../components/NewCasesByDay';
    import { mdbRow,
        mdbCol,
        mdbCard,
        mdbCardBody,
        mdbCardHeader,
        mdbCardTitle,
        mdbCardText,
        mdbBtn,
        mdbIcon
    } from 'mdbvue';
    import  { mapState } from 'vuex';


    export default {
        name: "Graphs",
        components: {
            GenderComparision,
            EvolutionaryInfectsByDay,
            EvolutionaryRecoverersByDay,
            EvolutionaryDeathsByDay,
            NewCasesByDay,
            mdbRow,
            mdbCol,
            mdbCard,
            mdbCardBody,
            mdbCardHeader,
            mdbCardTitle,
            mdbCardText,
            mdbBtn,
            mdbIcon
        },
        computed: {
            ...mapState(['provincesStat'])
        },
        methods: {
            urlPush(url) {
                this.$router.push(url);
            }
        }
    }
</script>

<style scoped>
    .cascading-admin-card {
        margin: 20px 0;
    }
    .cascading-admin-card .admin-up {
        margin-left: 4%;
        margin-right: 4%;
        margin-top: -20px;
    }

    .cascading-admin-card .admin-up img {
        box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
        font-size: 1.45rem;
        color: #fff;
        text-align: left;
        margin-right: 1rem;
        border-radius: 3px;
        width: 52px;
    }
    .classic-admin-card .card-body .fas {
        font-size: 1.45rem;
    }
    .cascading-admin-card .admin-up .data {
        padding-left: 5rem;
    }
    .admin-up .data p {
        font-size: 20px;
        font-weight: bold;
    }

    .classic-admin-card .card-body {
        color: #fff;
        margin-bottom: 0;
        padding: 0.9rem;
    }
    .classic-admin-card .card-body p {
        font-size: 2rem;
        opacity: 0.7;
        margin-bottom: 0;
        margin-top: 10px;
    }
    .classic-admin-card .card-body h4 {
        margin-top: 10px;
    }

    .btn {
        width: 100%;
    }

    @media only screen and (min-width: 550px) {
        .btn {
            width: 50%;
        }
        .card-body {
            text-align: center;
        }
    }
</style>
