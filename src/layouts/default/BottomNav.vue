<template>
    <v-bottom-navigation v-model="value" :bg-color="color" mode="shift" :active="active">
        <v-btn :to="{ name: 'Home' }" exact>
            <v-icon>mdi-home-variant-outline</v-icon>
            <span>Home</span>
        </v-btn>

        <v-btn :to="{ name: 'Location' }" exact>
            <v-icon>mdi-map-marker</v-icon>
            <span>Location</span>
        </v-btn>

        <v-btn :to="{ name: 'Scan' }" exact>
            <v-icon>mdi-barcode-scan</v-icon>
            <span>Scan</span>
        </v-btn>

        <v-btn :to="{ name: 'Activity' }" exact>
            <v-icon>mdi-poll</v-icon>
            <span>Activity</span>
        </v-btn>
        <v-btn :to="{ name: 'Profile' }" exact>
            <v-icon>mdi-account-outline</v-icon>
            <span>Profile</span>
        </v-btn>
    </v-bottom-navigation>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/store/auth'
const auth = useAuthStore();

const value = ref(0);


const active = computed(() => auth.user !== null)

const color = computed(() => {
    switch (value.value) {
        case 0: return 'success'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
        default: return 'green'
    }
})

</script>