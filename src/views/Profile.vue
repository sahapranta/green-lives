<template>
    <div class="main">
        <v-card>
            <v-alert border="top" color="green" dismissible dark v-model="alert">
                Logout Successfull
            </v-alert>
            <v-card-title>
                <h2 class="headline my-3">Clawrence</h2>
                <div>
                    <v-chip class="mr-2" color="primary">Most Active ⭐</v-chip>
                    <v-chip color="error">Award Winner ⚡</v-chip>
                </div>
            </v-card-title>
            <v-card-text>
                <div class="d-flex justify-end"><v-btn color="info" size="small" @click="logout">Logout</v-btn></div>
                <div class="d-flex flex-column align-center pt-4">
                    <v-avatar size="120">
                        <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Profile Picture" />
                    </v-avatar>
                    <div class="mt-2">
                        <v-rating v-model="rating" color="amber" background-color="#eee" empty-icon="mdi-star-outline"
                            full-icon="mdi-star"></v-rating>
                    </div>
                </div>
                <div class="mt-4">
                    <h3 class="subtitle-1 mb-2">About</h3>
                    <p class="body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed est ultricies,
                        facilisis turpis sed, blandit lorem. Nunc ullamcorper orci sit amet risus consequat, sed varius quam
                        aliquam. Fusce sed turpis auctor, vehicula nulla at, placerat odio. Sed eu tortor vel velit
                        tincidunt tristique a a justo.</p>
                </div>
                <div class="mt-4">
                    <h3 class="subtitle-1 mb-2">Achievments</h3>
                    <v-chip-group>
                        <v-chip>Contribution</v-chip>
                        <v-chip>Empathy</v-chip>
                        <v-chip>Compassion</v-chip>
                        <v-chip>Gratitude</v-chip>
                        <v-chip>Satisfaction</v-chip>
                        <v-chip>Impact</v-chip>
                    </v-chip-group>
                </div>
            </v-card-text>
        </v-card>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/auth'

const auth = useAuthStore();

const alert = ref(false);
const rating = ref(5);

const logout = () => {
    alert.value = true;
    setTimeout(() => auth.logout(), 2000);
}
</script>




<style scoped>
h2.headline {
    font-size: 32px;
    font-weight: 700;
    margin: 0;
}

.v-avatar img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}

.v-rating {
    margin: 0;
}

.v-card-title {
    background-color: #fafafa;
    border-bottom: 1px solid #ddd;
}

.v-card {
    max-width: 600px;
    margin: 50px auto;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}

.v-chip {
    font-size: 14px;
    font-weight: 500;
}

.v-chip-group {
    display: flex;
    flex-wrap: wrap;
}
</style>
