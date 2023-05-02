<template>
    <v-card>
        <v-card-title class="dashboard-title">Activity Dashboard 👋</v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" md="4">
                    <!-- Donation -->
                    <v-card class="dashboard-card donation-card">
                        <v-card-title>🎁 Donation</v-card-title>
                        <v-card-text class="text-h6 text-white">$2,300</v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <!-- Games -->
                    <v-card class="dashboard-card games-card">
                        <v-card-title>👏 Games</v-card-title>
                        <v-card-text class="text-h6 text-white">5</v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <!-- Charts -->
                    <v-card class="dashboard-card charts-card">
                        <v-card-title>⭐Exchange</v-card-title>
                        <v-card-text class="text-h6 text-white">Thanks for sharing</v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <v-card class="d-flex flex-column mx-auto py-6" height="490" width="360">
                        <div class="d-flex justify-center mt-auto text-h5 ">
                            Rating overview
                        </div>

                        <div class="d-flex align-center flex-column my-auto">
                            <div class="text-h2 mt-5">
                                4.3
                                <span class="text-h6 ml-n3">/5</span>
                            </div>

                            <v-rating :model-value="4.3" color="yellow-darken-3" half-increments></v-rating>
                            <div class="px-3">3,360 ratings</div>
                        </div>

                        <v-list bg-color="transparent" class="d-flex flex-column-reverse" density="compact">
                            <v-list-item v-for="(rating, i) in 5" :key="i">
                                <v-progress-linear :model-value="rating * 15" class="mx-n5" color="yellow-darken-3"
                                    height="20" rounded></v-progress-linear>

                                <template v-slot:prepend>
                                    <span>{{ rating }}</span>
                                    <v-icon icon="mdi-star" class="mx-3"></v-icon>
                                </template>

                                <template v-slot:append>
                                    <div class="rating-values">
                                        <span class="d-flex justify-end"> {{ rating * 224 }} </span>
                                    </div>
                                </template>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<style>
.dashboard-title {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #333;
}

.dashboard-card {
    color: #fff;
    width: 100%;
    max-width: 300px;
    border-radius: 8px;
    padding: 32px;
    margin-bottom: 16px;
}

.donation-card {
    background: linear-gradient(135deg, #FF7F50 0%, #FF4E50 100%) !important;

}

.games-card {
    background: linear-gradient(135deg, #45B649 0%, #DCE35B 100%) !important;

}

.charts-card {
    background: linear-gradient(135deg, #ae86ff 0%, #854be9 100%) !important;
}
</style>



