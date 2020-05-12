<template>
    <section>
        <mdb-card class="mb-4">
            <mdb-card-body class="d-sm-flex justify-content-between">
                <h4 class="mb-sm-0 pt-2">
                    Lista de articulos
                </h4>
            </mdb-card-body>
        </mdb-card>
        <mdb-row>
            <mdb-col md="12" class="mb-4">
                <mdb-card>
                    <mdb-card-header>
                        Articulos
                    </mdb-card-header>
                    <mdb-card-body v-if="posts" >
                        <mdb-row v-for="(post, i) in posts"
                                 :key="i"
                                 :id="i"
                        >
                            <mdb-col lg="5">
                                <mdb-view class="rounded z-depth-2 mb-lg-0 mb-4" hover>
                                    <img class="img-fluid" :src="imageUrl(post)" :alt="post.title.rendered" />
                                    <a>
                                        <mdb-mask overlay="white-slight" waves/>
                                    </a>
                                </mdb-view>
                            </mdb-col>
                            <mdb-col lg="7">
                                <h3 class="font-weight-bold mb-3 p-0">
                                    <strong>{{post.title.rendered}}</strong>
                                </h3>
                                <p>
                                    <span v-html="post.excerpt"></span>
                                </p>
                                <p>by
                                    <a>
                                        <strong>Author</strong>
                                    </a>, {{ post.date }}</p>
                                <mdb-btn color="success" size="md" class="waves-light ">Read more</mdb-btn>
                            </mdb-col>
                            <hr class="my-5" />
                        </mdb-row>
                    </mdb-card-body>
                </mdb-card>
            </mdb-col>
        </mdb-row>
    </section>
</template>

<script>
    import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardHeader, mdbBtn, mdbView, mdbMask } from 'mdbvue'
    const post = require("@/services/wp/post");

    export default {
        name: "AllPost",
        components: {
            mdbRow,
            mdbCol,
            mdbCard,
            mdbCardBody,
            mdbCardHeader,
            mdbBtn,
            mdbView,
            mdbMask
        },
        mounted() {

           post.gets().then( posts => this.posts = posts);
        },
        methods: {
            imageUrl(post) {
                const feature = post._embedded['wp:featuredmedia'];
                return feature ? feature['0'].source_url : '';
            }
        },
        data() {
            return {
                posts: null
            }
        }
    }
</script>

<style scoped>

</style>
