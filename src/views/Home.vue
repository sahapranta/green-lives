<template>
  <v-card prominent extended color="#FCFEFB">
    <div class="top-bar">
      <div class="">
        <p class="title text-h4">Hi, <span>Clawrence</span></p>
        <p class="text-body-1 mb-4 mt-2">
          Let's contribute to our earth.
        </p>
        <v-chip @click="() => router.push({ name: 'Tracker' })" color="error">Check Carbon Footprint</v-chip>
      </div>

      <v-btn icon to="/alert">
        <v-icon>mdi-bell-ring-outline</v-icon>
        <v-tooltip activator="parent" location="start">Get Notified</v-tooltip>
      </v-btn>
    </div>
    <v-card color="#FCFEFB" outlined>
      <v-card-title class="d-flex justify-between pb-2 align-center">
        <p class="font-weight-bold text-body-1">
          Your Mission
        </p>
        <v-spacer />
        <v-btn flat class="text-caption">Show More</v-btn>
      </v-card-title>
      <v-sheet class="mx-auto" elevation="0">
        <v-slide-group v-model="model" center-active selected-class="bg-primary">
          <v-slide-group-item v-for="n in 15" :key="n">
            <v-card color="#9DD549" :class="['ma-4']" height="175" width="320"
              @click="() => router.push({ name: 'Reward' })">
              <div class="d-flex fill-height align-center justify-center">
                <v-img contain height="300" src="@/assets/banner-1.png" />
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-card>
    <v-card color="#FCFEFB" outlined>
      <v-card-title class="d-flex justify-between pb-2 align-center">
        <p class="font-weight-bold text-body-1">
          History
        </p>
        <v-spacer />
        <v-btn class="text-caption" flat>Today <v-icon icon="mdi-chevron-down" /></v-btn>
      </v-card-title>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex" :md="3">
            <v-card class="item-card">
              <v-img :src="card.image" class="align-end" gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.2)"
                height="200px" cover
                @click="() => router.push({ name: 'Article', params: { title: makeTitle(card.title) } })">
                <v-card-title class="text-white">{{ card.title }}</v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

                <v-btn size="small" @click="() => share(card.title)" color="surface-variant" variant="text"
                  icon="mdi-share-variant"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-card>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter();

const model = ref(null);
const cards = ref([]);

onMounted(async () => {
  const { data } = await axios.get('/posts.json');
  cards.value = data;
})

const share = (title) => 'share' in navigator ? navigator.share({ title }) : null;


const makeTitle = text => text.toLowerCase()
  .replace(/[^\w\s]/gi, '')
  .replace(/\s+/g, '-');

</script>

<style>
.top-bar {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.top-bar .title {
  font-weight: 700;
}

.top-bar .title:first-child {
  color: #9DD549;
}

.top-bar .title span::after {
  content: '!';
}

.top-bar .title span:hover {
  color: #88c033;
  user-select: none;
  cursor: pointer;
}

.item-card {
  margin: 5px;
}

.item-card:hover {
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  cursor: pointer;
}
</style>