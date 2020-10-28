<template>
<v-container>
    <v-row>
        <v-col>
            <v-card elevation="0">
                <v-card-title>Dogs</v-card-title>
                Hi, I am Zorina Maika, a software engineer.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card>
        </v-col>
        <v-col>
            <img :src="'assets/grad.jpg'" />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'PersonalDetailTemplate',

    data: () => ({
        //
    })
}
</script>
