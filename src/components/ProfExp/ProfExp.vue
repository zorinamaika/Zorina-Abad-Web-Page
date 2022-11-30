<template>
<v-container class="full-width">
    <v-row justify="center">
        <v-col md="10">
            <v-card class="blue--text" elevation="0">
                <h1 class="text-center">Summary</h1>
                <v-card-text>
                    <AboutMe />
                </v-card-text>
            </v-card>
        </v-col>

    </v-row>
    <v-divider></v-divider>
    <v-row justify="center">
        <v-col md="10">
            <v-card class="blue--text" elevation="0">
                <h1 class="text-center">Professional Timeline</h1>
                <v-card-text>
                    <ProfTimeline />
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row justify="center">
        <v-col md="10">
            <v-card class="blue--text" elevation="0">
                <h1 class="text-center">Technical Skills</h1>
                <Skills />
            </v-card>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row justify="center">
        <v-col md="10">
            <v-card class="blue--text" elevation="0">
                <h1 class="text-center">Education</h1>
                <Education />
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import ProfTimeline from '@/components/ProfExp/ProfTimeline.vue';
import Skills from '@/components/ProfExp/Skills.vue';
import Education from '@/components/ProfExp/Education.vue';
import AboutMe from '@/components/ProfExp/AboutMe.vue';

export default {
    name: 'ProfExp',

    components: {
        ProfTimeline,
        Skills,
        Education,
        AboutMe
    }
}
</script>

<style scoped>
.full-width {
    width: 100%;
    align-content: inherit;
}

.skills {
    background-color: lightblue;
}
</style>
