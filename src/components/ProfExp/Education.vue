<template>
<v-card md="6" tile elevation="0">
    <v-list-item two-line class="text-center">
        <v-list-item-content>
            <v-list-item-title>College</v-list-item-title>
            <v-list-item-subtitle>
                <v-avatar>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/University_of_The_Philippines_seal.svg/175px-University_of_The_Philippines_seal.svg.png">
                </v-avatar>
                Bachelor of Science in Computer Science, University of the Philippines Diliman, Philippines
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>

    <v-list-item two-line class="text-center">
        <v-list-item-content>
            <v-list-item-title>High School</v-list-item-title>
            <v-list-item-subtitle>
                <v-avatar>
                    <img src="http://112.199.66.12/sites/default/files/pictures/School%20of%20Holy%20Spirit%20Quezon%20City.png">
                </v-avatar>
                School of the Holy Spirit of Quezon City
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</v-card>
</template>

<script>
export default {
    name: 'Education',

    data: () => ({
        //
    })
}
</script>
