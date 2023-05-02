<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6" md="4">
                <v-card>
                    <v-card-title>Redeem Your Rewards</v-card-title>
                    <v-card-text>
                        <p>Scan the QR code at a participating local business to redeem your recycling rewards. You can earn
                            discounts and loyalty points when you recycle with our app.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary">View Rewards</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-card>
                    <v-card-title>Local Business Partners</v-card-title>
                    <v-card-text>
                        <p>Our program partners with local businesses to offer discounts and loyalty points to our recycling
                            app users. Check out our partners below:</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary">View Partners</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-card>
                    <v-card-title>Earn More Rewards</v-card-title>
                    <v-card-text>
                        <p>Recycling more means earning more rewards! Check out our recycling tips and tricks to help you
                            recycle more efficiently and earn more rewards.</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary">View Tips</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="scss" scoped>
.v-card {
    background: #FCFEFB;
    background: linear-gradient(to right, #f2fcfe, #FCFEFB);
    border: none;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;

    &-title {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    &-text {
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 20px;
    }

    &-actions {
        justify-content: flex-end;
    }
}
</style>
