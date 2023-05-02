<template>
    <v-card>
        <v-container>
            <v-row>
                <v-col cols="12" sm="3">
                    <p class="text-h5"><v-icon>mdi-delete-variant</v-icon> Recycling Point</p>
                </v-col>
                <v-col cols="6" sm="3">
                    <v-text-field v-model="place.latitude" label="Latitude" append-inner-icon="mdi-map-marker"
                        density="compact" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="6" sm="3">
                    <v-text-field v-model="place.longitude" label="Logitude" append-inner-icon="mdi-map-marker"
                        density="compact" variant="outlined"></v-text-field>
                </v-col>
            </v-row>
            <div class="map-container">
                <l-map ref="map" v-model:zoom="zoom" :center="[place.latitude, place.longitude]"
                    :use-global-leaflet="false">
                    <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                        name="OpenStreetMap"></l-tile-layer>
                </l-map>
            </div>
        </v-container>
    </v-card>
</template>
<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { ref, onMounted } from 'vue';

const zoom = ref(5);

const place = ref({
    latitude: 23.8103,
    longitude: 90.4125
});
// const location = ref([30.3753, 69.3451]); // Pakistan

onMounted(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            place.value = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            zoom.value = 14;
        })
    }
})
</script>

<style>
.map-container {
    width: 90dvw;
    height: 75dvh;
}
</style>