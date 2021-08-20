<template>
<v-container>
    <v-row>
        <v-col>
            <v-card elevation="0">
                <v-card-title>Dogs</v-card-title>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card>
        </v-col>
        <v-col>
            <v-carousel v-model="model">
                <v-carousel-item
                    v-for="(color, i) in colors"
                    :key="color"
                    >
                <v-sheet
                    :color="color"
                    height="100%"
                    tile
                >
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                <div class="text-h2">
                    Slide {{ i + 1 }}
                </div>
                 </v-row>
                </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
        <v-col>
            <v-carousel v-model="model">
                <v-carousel-item
                    v-for="(color, i) in colors"
                    :key="color"
                    >
                <v-sheet
                    :color="color"
                    height="100%"
                    tile
                >
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                <div class="text-h2">
                    Slide {{ i + 1 }}
                </div>
                 </v-row>
                </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-col>
        <v-col>
            <v-card elevation="0">
                <v-card-title>Baking</v-card-title>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
        <v-col>
            <v-card elevation="0">
                <v-card-title>Entertainment</v-card-title>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card>
        </v-col>
        <v-col>
             <v-carousel v-model="model">
                <v-carousel-item
                    v-for="(color, i) in colors"
                    :key="color"
                    >
                <v-sheet
                    :color="color"
                    height="100%"
                    tile
                >
                <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                >
                <div class="text-h2">
                    Slide {{ i + 1 }}
                </div>
                 </v-row>
                </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'PersonalDetailTemplate',

    data: () => ({
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    })
}
</script>
