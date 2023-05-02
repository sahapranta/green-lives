<template>
    <v-container>
        <v-alert color="green" dismissible dark v-model="showAlert">
            {{ `Alert set for ${selectedMaterial} every ${alertFrequency} days.` }}
        </v-alert>
        <v-row>
            <v-col cols="12" md="6">
                <h1 class="mt-3">Customizable Alerts</h1>
                <p class="my-3">Set up alerts for specific materials to never forget to recycle them again!</p>
                <v-form>
                    <v-select v-model="selectedMaterial" :items="materials" label="Select Material" required></v-select>
                    <v-text-field v-model.number="alertFrequency" label="Alert Frequency (in days)" required></v-text-field>
                    <v-btn :disabled="isDisabled" @click="setAlert" color="green">Set
                        Alert</v-btn>
                </v-form>
            </v-col>
            <v-col cols="12" md="6">
                <v-img src="@/assets/recycling-alert.avif" alt="recycling alerts" width="70%" class="mx-auto" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { ref } from 'vue';

const materials = ref(['Plastic', 'Paper', 'Glass', 'Metal']);
const selectedMaterial = ref('');
const alertFrequency = ref('');

const showAlert = ref(false);

const isDisabled = computed(() => selectedMaterial.value === '' || alertFrequency.value === '');

const setAlert = () => {
    showAlert.value = true;
    setTimeout(() => {
        showAlert.value = false
        selectedMaterial.value = '';
        alertFrequency.value = '';
    }, 2500);
}

</script>
