<template>
    <div class="mapsvg-wrap-all" id="mapsvg-map-undefined">
        <div class="mapsvg-header mapsvg-top-container" style="flex-basis: auto; height: auto; display: none;"></div>
        <div class="mapsvg-wrap" style="width: 100%; height: auto;">
            <div class="mapsvg-sidebar mapsvg-top-container mapsvg-sidebar-left" style="flex-basis: 250px; display: none;"></div>
            <div class="mapsvg-map-container">
                <div id="mapsvg" class="mapsvg no-transitions-markers" style="background: transparent; width: 100%; height: 0px; padding-bottom: 70.1921%;">
                    <div class="mapsvg-scrollpane" style="transform: translate(0px, 0px);">
                        <div class="mapsvg-layers-wrap"><div class="mapsvg-layer mapsvg-layer-markers"></div>
                            <div class="mapsvg-layer mapsvg-layer-popovers"><div class="mapsvg-popover" style="width: 300px; max-width: 50%; max-height: 258.305px;"></div></div></div>
    <svg xmlns:mapsvg="http://mapsvg.com" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" mapsvg:geoViewBox="-72.004173 19.932499 -68.322347 17.470139" preserveAspectRatio="xMidYMid meet" viewBox="0 0 792.71484 556.42358" style="transform: scale(1);">
        <path v-for="(province, i) in provinces" :key="i" :index="i" :d="province.data" :title="province.title" :id="province.id" @mouseover="province.hover = true" @mouseleave="province.hover = false" class="mapsvg-region" :style="getStyle(province)"></path>
    </svg></div>
     <div class="mapsvg-loading" style="margin-left: -50.6955px; margin-top: -17px; display: none;">Loading map...</div>
     <div style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden;">
         <div style="position: absolute; left: 0px; top: 0px; width: 1e+07px; height: 1e+07px;"></div>
     </div>
         <div style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden;"><div style="position: absolute; left: 0px; top: 0px; width: 200%; height: 200%;"></div></div><div class="mapsvg-buttons right" style="display: none;"><div class="mapsvg-btn-group"><div class="mapsvg-btn-map mapsvg-in"></div><div class="mapsvg-btn-map mapsvg-out"></div></div><div class="mapsvg-btn-map mapsvg-btn-location"></div></div><div class="mapsvg-tooltip mapsvg-tt-bottom-right" style="min-width: 100px; left: 374px; top: 313px;"><!-- Region fields are available in this template -->
        DO-21 - San Cristóbal</div></div><div class="mapsvg-details-container" style="width: 100%; background-color: rgba(255, 255, 255, 0.9);"></div></div><div class="mapsvg-sidebar mapsvg-top-container mapsvg-sidebar-right" style="flex-basis: 250px; display: none;"></div></div><div class="mapsvg-footer mapsvg-top-container" style="flex-basis: auto; height: auto; display: none;"></div>
    </div>
</template>

<script>
    import provincePath from '@/services/provincePath';

    export default {
        name: "SVGMap",
        data() {
            return {
                provinces: [],
                hover: false
            }
        },
        methods: {
            loadPaths() {
                this.provinces = provincePath.gets();
            },
            getStyle(province) {
                return !province.hover ? province.style : province.styleFilled
            }
        },

        mounted() {
            this.loadPaths();
        }
    }
</script>

<style scoped>

</style>
