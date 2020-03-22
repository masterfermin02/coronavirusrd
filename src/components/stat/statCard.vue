<template>
    <mdb-col xl="3" md="6" class="mb-r">
        <mdb-card cascade class="cascading-admin-card">
            <div class="admin-up">
                <mdb-icon :class="[icon, color]" far />
                <div class="data">
                    <p>{{label}}</p>
                    <h4>
                        <strong>{{data}}</strong>
                    </h4>
                </div>
            </div>
        </mdb-card>
    </mdb-col>
</template>

<script>
    import { mdbCol, mdbCard,  mdbIcon } from 'mdbvue'

    export default {
        name: "statCard",
        props: ['label', 'data',  'color', 'icon'],
        components: {
            mdbCol,
            mdbCard,
            mdbIcon
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cascading-admin-card {
        margin: 20px 0;
    }
    .cascading-admin-card .admin-up {
        margin-left: 4%;
        margin-right: 4%;
        margin-top: -20px;
    }
    .cascading-admin-card .admin-up .fas,
    .cascading-admin-card .admin-up .far {
        box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19);
        padding: 1.7rem;
        font-size: 2rem;
        color: #fff;
        text-align: left;
        margin-right: 1rem;
        border-radius: 3px;
    }
    .cascading-admin-card .admin-up .data {
        float: right;
        margin-top: 2rem;
        text-align: right;
    }
    .admin-up .data p {
        color: #999999;
        font-size: 12px;
    }
    .classic-admin-card .card-body {
        color: #fff;
        margin-bottom: 0;
        padding: 0.9rem;
    }
    .classic-admin-card .card-body p {
        font-size: 13px;
        opacity: 0.7;
        margin-bottom: 0;
    }
    .classic-admin-card .card-body h4 {
        margin-top: 10px;
    }
</style>
