<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="12" md="8">
                <v-card class="px-6 py-4">
                    <h1 class="text-h4 mb-2">{{ article.title }}</h1>
                    <div class="text-caption">
                        <p>By Jane Doe | April 30, 2023</p>
                    </div>
                    <v-img :src="article.image" alt="Recycling image" class="my-4" height="320" width="100%" cover />
                    <p class="post-text">Recycling is the process of converting waste materials into new materials and
                        objects. It is an important part of reducing waste in our society and conserving resources.</p>
                    <h2 class="post-subtitle">Benefits of Recycling</h2>
                    <ul class="post-list">
                        <li>Conserves natural resources</li>
                        <li>Reduces landfill waste</li>
                        <li>Reduces greenhouse gas emissions</li>
                        <li>Creates jobs in the recycling industry</li>
                    </ul>
                    <p class="post-text">Recycling also helps to reduce pollution and conserve energy. It is an easy and
                        effective way for individuals to make a positive impact on the environment.</p>
                    <h2 class="post-subtitle">Recycling Tips</h2>
                    <ul class="post-list">
                        <li>Sort recyclables properly</li>
                        <li>Check local recycling guidelines</li>
                        <li>Buy products made from recycled materials</li>
                        <li>Avoid buying single-use plastics</li>
                    </ul>
                    <p class="post-text">By following these simple tips, we can all do our part to reduce waste and protect
                        the planet.</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const article = ref({});
const router = useRoute();

const makeTitle = text => text.toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');

onMounted(async () => {
    const { data } = await axios.get('/posts.json');
    const found = data.find(post => makeTitle(post.title) === router.params.title)
    article.value = found || {};
})


</script>

<style scoped>
.post-text {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1rem;
}

.post-subtitle {
    font-size: 1.8rem;
    font-weight: 500;
    margin: 2rem 0 1rem;
}

.post-list {
    list-style-type: disc;
    margin-left: 2rem;
    margin-bottom: 1rem;
}

@media (min-width: 768px) {
    .post-text {
        font-size: 1.4rem;
    }

    .post-subtitle {
        font-size: 2.5rem;
    }
}
</style>
