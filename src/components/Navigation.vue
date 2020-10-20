<template>
<v-toolbar
      color="blue"
      dark
    >
      <v-avatar>
        <img
          src="https://icon-library.net//images/icon-developer/icon-developer-17.jpg"
        >
      </v-avatar>
      
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>

      <v-toolbar-title>Zorina.Dev</v-toolbar-title>
  
      <v-spacer></v-spacer>
  
      <v-spacer></v-spacer>
  
      <v-toolbar-items>
        <v-btn text>
          <router-link to="/components/ProfExp" class="white--text link">
            Resume
          </router-link>
        </v-btn>

        <v-divider vertical></v-divider>

        <v-btn text>
          <router-link to="/components/Personal" class="white--text link">
            Personal
          </router-link>
        </v-btn>
  
        <v-divider vertical></v-divider>
  
        <v-btn text>
          Contact Me
        </v-btn>
  
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
  export default {
    name: 'Navigation',

    data: () => ({
      links: [
        'Home',
        'About Me',
        'Experience',
        'Personal',
        'Contact Me'
    ]})
  }
</script>

<style scoped>
    .link {
        text-decoration: none;
    }
</style>
