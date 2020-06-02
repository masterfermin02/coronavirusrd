<template>
    <section id="details">
        <mdb-card class="mb-4">
            <mdb-card-body class="d-sm-flex justify-content-between">
                <h4 class="mb-sm-0 pt-2">
                    Estado actual  del Coronavirus en REP DOM.
                </h4>
            </mdb-card-body>
        </mdb-card>
        <section>
            <mdb-row>
                <mdb-col lg="12" class="mb-4">
                    <mdb-card>
                        <mdb-card-header id="map" >Mapa De Casos </mdb-card-header>
                        <mdb-card-body  >
                            <s-v-g-map />
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
            </mdb-row>
        </section>
        <section>
            <mdb-row>
                <mdb-col md="12" class="mb-4">
                    <mdb-card>
                        <mdb-card-header>Detalle por provincias</mdb-card-header>
                        <mdb-card-body>
                            <mdb-tbl responsive
                                     striped
                                     bordered
                                     hover>
                                <thead class="blue lighten-4">
                                <tr>
                                    <th>#</th>
                                    <th> Provincia</th>
                                    <th><i @click="sort('total_cases')" class="fas fa-sort float-right"></i> Infectados</th>
                                    <th><i @click="sort('total_deaths')" class="fas fa-sort float-right"></i> Muertes</th>
                                    <th><i @click="sort('total_recovered')" class="fas fa-sort float-right"></i> Recuperados</th>
                                </tr>
                                </thead>
                                <tbody >
                                <tr v-for="(province, i) in provinceWithFormat" :key="i" >
                                    <th scope="row">{{ i + 1}}</th>
                                    <td><a :href=" '/province/' + province.name" >{{ province.name }}</a></td>
                                    <td>{{ province.total_cases }}</td>
                                    <td>{{ province.total_deaths }}</td>
                                    <td>{{ province.total_recovered }}</td>
                                </tr>
                                </tbody>
                            </mdb-tbl>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
            </mdb-row>
        </section>
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
                            <mdb-btn color="primary" @click="urlPush('/province/Distrito%20Nacional')" >Ver Provincias</mdb-btn>
                            <mdb-btn color="primary" @click="urlPush('/graficos')" ><mdb-icon class="fas" icon="chart-line" /> Ver estadística</mdb-btn>
                            <mdb-btn color="primary" @click="urlPush('/acerca')" >Acerca</mdb-btn>
                        </mdb-card-body>
                    </mdb-card>
                </mdb-col>
            </mdb-row>
        </section>
    </section>
</template>

<script>
    import { mdbRow,
        mdbCol,
        mdbCard,
        mdbCardBody,
        mdbCardHeader,
        mdbTbl,
        mdbBtn,
        mdbIcon
    } from 'mdbvue';
    import SVGMap from '../components/SVGMap';
    import {descending, asscending} from "@/tools/comparision";
    import { convertToPresentationalNumber } from '../tools/parses';
    import { mapGetters }  from 'vuex';

    export default {
        name: "Details",
        components: {
            mdbRow,
            mdbCol,
            mdbCard,
            mdbCardBody,
            mdbCardHeader,
            SVGMap,
            mdbTbl,
            mdbBtn,
            mdbIcon
        },
        computed: {
            ...mapGetters(['provincesSortByColumn']),
            provinces() {
                return this.provincesSortByColumn(
                    this.column,
                    this.direction ? descending : asscending
                );
            },
            provinceWithFormat() {
                return  this.provinces.map( (province) => {
                    return {
                        name: province.name,
                        total_cases: this.convertToPresentationalNumber(province.total_cases),
                        total_deaths: this.convertToPresentationalNumber(province.total_deaths),
                        total_recovered: this.convertToPresentationalNumber(province.total_recovered)
                    };
                });
            }
        },
        methods: {
            sort(column) {
                this.direction = !this.direction;
                this.column = column
            },
            convertToPresentationalNumber,
            urlPush(url) {
                this.$router.push(url);
            }
        },
        data () {
            return {
                column: 'total_cases',
                direction: true
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
