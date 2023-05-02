<template>
    <v-container>
        <v-card outlined elevation="0" class="py-6">
            <v-card-title class="text-h5 text-center pb-2 text-uppercase">Scan Your Item</v-card-title>
            <div v-if="openCamera" :style="`width: ${mobile ? '70' : '18'}dvw; height: 60dvh; margin: 0 auto;`">
                <Camera ref="camera" :resolution="{ width: 800, height: 800 }" autoplay></Camera>
            </div>
            <v-img v-else contain height="60dvh" src="@/assets/scan.jpg" />
            <div class="d-flex justify-center pt-6">
                <v-btn @click="() => openCamera = true" color="#4CA632" class="text-white" elevation="4">Scan Now</v-btn>
            </div>
        </v-card>
        <v-row>
            <v-col cols="12" md="6">
                <v-card class="px-2">
                    <v-card-title class="text-center">What Can Be Recycled?</v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item>✔ Plastic bottles and containers</v-list-item>
                            <v-list-item>✔ Aluminum cans</v-list-item>
                            <v-list-item>✔ Glass bottles and jars</v-list-item>
                            <v-list-item>✔ Paper and cardboard</v-list-item>
                            <v-list-item>✔ Steel cans and containers</v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card class="px-2">
                    <v-card-title class="text-center">What Can't Be Recycled?</v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item>✔ Plastic bags and film</v-list-item>
                            <v-list-item>✔ Styrofoam</v-list-item>
                            <v-list-item>✔ Food waste</v-list-item>
                            <v-list-item>✔ Electronics and batteries</v-list-item>
                            <v-list-item>✔ Medical waste</v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card class="px-2">
                    <v-card-title class="text-center">Tips for Reducing Waste</v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item>👍 Use a reusable water bottle</v-list-item>
                            <v-list-item>👍 Bring your own reusable bags to the store</v-list-item>
                            <v-list-item>👍 Buy products with minimal packaging</v-list-item>
                            <v-list-item>👍 Avoid single-use products like straws and utensils</v-list-item>
                            <v-list-item>👍 Recycle as much as possible</v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import Camera from "simple-vue-camera";
import { ref } from "vue";
import { useDisplay } from 'vuetify'

const openCamera = ref(false);
const { mobile } = useDisplay()

const camera = ref('');

</script>

<style>
#video {
    object-fit: cover !important;
    border-radius: 30px;
}
</style>