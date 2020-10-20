<template>
<v-container class="full-width">
  <v-row>
    <v-col md="2">
    </v-col>
    <v-col md="8">
        <v-card class="blue--text text-center" elevation="0">
            <v-subheader>My Prof Timeline</v-subheader>
            <v-card-text>
            Graduation
            <ProfTimeline />
            Total: 6 years of exp
            </v-card-text>
        </v-card>
    </v-col>
    <v-col md="2">
    </v-col>
  </v-row> 
  <v-divider></v-divider>
  <v-row class="blue lighten-2">
    <v-col md="2">
    </v-col>
    <v-col md="8">
        <v-card class="blue--text" elevation="0">
            <v-subheader>Technical Skills</v-subheader>          
            <Skills />
        </v-card>
    </v-col>
    <v-col md="2">
    </v-col>
  </v-row>
  <v-divider></v-divider> 
  <v-row>
    <v-col md="2">
    </v-col>
    <v-col md="8">
        <v-card class="blue--text" elevation="0">
            <v-subheader>Education</v-subheader> 
            <Education />         
        </v-card>
    </v-col>
    <v-col md="2">
    </v-col>
  </v-row> 
</v-container>
</template>

<script>
  import ProfTimeline from '@/components/ProfExp/ProfTimeline.vue';
  import Skills from '@/components/ProfExp/Skills.vue';
  import Education from '@/components/ProfExp/Education.vue';

  export default {
    name: 'ProfExp',

    components: {
        ProfTimeline,
        Skills,
        Education
    }
  }
</script>

<style scoped>
    .full-width {
        width: 100%;
        align-content: inherit;
    }
    .skills {
        background-color:lightblue;
    }
</style>