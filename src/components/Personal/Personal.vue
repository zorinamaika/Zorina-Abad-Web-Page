<template>
<v-container class="full-width">
    <h1>Personal</h1>
    <v-row justify="center">
        <v-col md="8">
            <v-card class="blue--text text-center pa-12" elevation="0">
                <PersonalDetailTemplate />
            </v-card>
        </v-col>    
    </v-row>
</v-container>
</template>

<script>
import PersonalDetailTemplate from '@/components/Personal/PersonalDetailTemplate.vue';

export default {
    name: 'Personal',

    components: {
        PersonalDetailTemplate
    }
}
</script>
