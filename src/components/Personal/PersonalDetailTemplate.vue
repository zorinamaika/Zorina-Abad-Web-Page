<template>
<v-container>
    <v-row>
        <v-col>
            <v-card elevation="0">
                <v-card-title>Books and Reading</v-card-title>
            </v-card>
        </v-col>
        <v-col>
            
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
        <v-col>
            
        </v-col>
        <v-col>
            <v-card elevation="0">
                <v-card-title>Baking and Cooking</v-card-title>     
            </v-card>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
        <v-col>
            <v-card elevation="0">
                <v-card-title>Entertainment</v-card-title>
            </v-card>
        </v-col>
        <v-col>
             
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
