<template>
    <div class="mapsvg-wrap-all" id="mapsvg-map-undefined">

    <svg id="map-svg" xmlns:mapsvg="http://mapsvg.com" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" mapsvg:geoViewBox="-72.004173 19.932499 -68.322347 17.470139" preserveAspectRatio="xMidYMid meet" viewBox="0 0 792.71484 556.42358" style="transform: scale(1);">
        <path v-for="(province, i) in provinces"
              :key="i"
              :index="i"
              :d="province.data"
              :title="province.title"
              :id="province.id"
              @mouseover="mouseOver(province)"
              @mouseleave="mouseLeave(province)"
              @touchstart="handle"
              class="mapsvg-region"
              :style="getStyle(province)">
        </path>
    </svg>
        <div class="mapsvg-tooltip mapsvg-tt-bottom-right" v-if="currentProvince.title" v-bind:style="{left: mouseX + 'px', top: mouseY + 'px'}" style="position:absolute;min-width: 100px; left: 374px; top: 313px;"><!-- Region fields are available in this template -->
           <p>{{currentProvince.title}}</p>
            <p>Infectados: {{ convertToPresentationalNumber(currentProvince.cases) }}</p>
            <p>Muertes: {{ convertToPresentationalNumber(currentProvince.deaths) }}</p>
            <p>Recuperados: {{ convertToPresentationalNumber(currentProvince.recovereds) }}</p>
        </div>
        <div class="map-leyenda container" >
            <ul class="list-group">
                <li class="list-group-item" >
                    <div class="d-flex flex-row">
                        <div class="p-2"><div class="zone-cases" ></div></div>
                        <div class="p-2">Zonas con m&aacute;s contagios</div>
                    </div>
                </li>
                <li class="list-group-item" >
                    <div class="d-flex flex-row">
                        <div class="p-2"><div class="zone-clean" ></div></div>
                        <div class="p-2">Zonas con menos contagios</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapState }  from 'vuex'
    import { convertToPresentationalNumber } from '../tools/parses';

    export default {
        name: "SVGMap",
        data() {
            return {
                showToolTip: false,
                SVGmouseTip: null,
                mouseX: 0,
                mouseY: 0,
                mobilePositionX: 150,
                mobilePositionY: 180,
                currentProvince: {},
                touched: false
            }
        },
        computed: {
            ...mapState(['provinces'])
        },
        methods: {
            getStyle(province) {
                return !province.hover ? province.style : province.styleFilled
            },
            mouseIsMoving(e){
                if(!this.touched) {
                    this.mouseX = Math.max(0, e.pageX - 400);
                    this.mouseY = Math.max(0,e.pageY - 400);
                }
                this.touched = false;

            },
            mouseOver(province) {
                province.hover = true;
                this.currentProvince = province;
            },
            mouseLeave(province) {
                province.hover = false;
                this.currentProvince = {};
            },
            handle() {
                this.touched = true;
                this.mouseX = this.mobilePositionX;
                this.mouseY = this.mobilePositionY;
            },
            convertToPresentationalNumber
        },

        mounted() {
            const svg = document.querySelector("#map-svg");
            svg.addEventListener('mousemove',this.mouseIsMoving);
        }
    }
</script>

<style scoped>
    .mapsvg-tooltip {
        font-weight: 400;
        font-size: 12px;
        font-family: Helvetica,Arial;
        color: #000;
        border-radius: 4px;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        background-color: #fff;
        border: 1px solid #eee;
        padding: 4px 7px;
        -webkit-transition: opacity .16s ease-out;
        -moz-transition: opacity .16s ease-out;
        -ms-transition: opacity .16s ease-out;
        -o-transition: opacity .16s ease-out;
        transition: opacity .16s ease-out;
        pointer-events: none;
        text-align: left;
        z-index: 1;
    }
    .map-leyenda {

    }
    .zone-cases {
        background-color: #E06565;
        width: 25px;
        height: 25px;
    }

    .zone-clean {
        background-color: rgb(253, 245, 246);
        width: 25px;
        height: 25px;
    }
</style>
