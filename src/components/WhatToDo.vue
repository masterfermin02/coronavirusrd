<template>
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
                            <mdb-btn color="primary" @click="urlPush('/details')" >Ver Mapa</mdb-btn>
                            <mdb-btn color="primary" @click="urlPush('/acerca')" >Acerca</mdb-btn>
                            <mdb-btn color="primary" @click="urlPush('/province/santiago')" >Ver provincia</mdb-btn>
                            <mdb-btn color="primary" @click="urlPush('/graficos')" ><mdb-icon class="fas" icon="chart-line" /> Ver Graficas</mdb-btn>
                        <p><a href="https://teespring.com/stores/coronavirus-rd" @click="shopClick" target="_blank" ><mdb-icon class="fas" icon="shopping-bag" /> Shop</a></p>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>
    </section>
</template>

<script>
    import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbBtn, mdbIcon } from 'mdbvue'

    export default {
        name: "WhatToDo",
        components: {
            mdbCol,
            mdbCard,
            mdbCardBody,
            mdbRow,
            mdbBtn,
            mdbIcon
        },
        methods: {
            urlPush(url) {
                this.$router.push(url);
            },
            shopClick() {

                this.$ga.event({
                    eventCategory: 'Outbound Link',
                    eventAction: 'click',
                    eventLabel: 'https://teespring.com/stores/coronavirus-rd',
                    eventValue: 1
                });
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
