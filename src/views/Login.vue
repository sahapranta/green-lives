<template>
    <div class="background">
        <div class="form-container">
            <v-img src="@/assets/recycling.jpg" width="300" class="login-image" />
            <v-card class="px-6 pt-6 -mt" width="344">
                <v-form @submit.prevent="onSubmit">
                    <v-text-field v-model="form.username" :readonly="loading" :rules="[required]" class="mb-2" clearable
                        label="Username"></v-text-field>

                    <v-text-field v-model="form.password" type="password" :readonly="loading" :rules="[required]" clearable
                        label="Password" placeholder="Enter your password"></v-text-field>

                    <v-btn :loading="loading" block color="success" size="large" type="submit" variant="elevated">
                        Sign In
                    </v-btn>
                </v-form>
                <div class="d-flex my-4 justify-center">
                    <v-btn to="/signup" variant="plain">Go to Registration</v-btn>
                </div>
            </v-card>
        </div>

    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/store/auth'

const auth = useAuthStore();

const form = reactive({
    username: '',
    password: ''
});

const loading = ref(false);

const onSubmit = async () => {
    loading.value = true
    await auth.login(form);
    setTimeout(() => (loading.value = false), 5000);
}

const required = (v) => !!v || 'Field is required';
</script>

<style>
.background {
    background: #e7f9ed;
    background: linear-gradient(90deg, #e7f9ed 30%, #c7f3d8 70%);
    height: 100vh;
    overflow: hidden;
}

.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* align-center flex-coulmn */
}

.-mt {
    margin-top: -5rem;
}

.login-image {
    border-radius: 100px;
}
</style>