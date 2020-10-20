<template>
  <v-footer
    dark
    padless
    width="100%"
  >
    <v-card
      flat
      tile
      class="blue lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          :href="icon.link"
          target="_blank"
        >
          <v-icon size="24px">
            {{ icon.logo }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
       ( {{ new Date().getFullYear() }} ) <strong>ZM</strong> version 1.0
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',

    data: () => ({
    icons: [
      {
          logo: 'mdi-facebook',
          link: 'https://www.fb.com/abadzorina'
      }
      ,
      {
          logo: 'mdi-linkedin',
          link: 'https://www.linkedin.com/in/abadzorina'
      }
      ,
      {
          logo: 'mdi-instagram',
          link: 'https://instagram.com/zorinabad'
      }
      ,
      {
          logo: 'mdi-github',
          link: 'https://github.com/zorinamaika'
      }
    ],
    }),
  }
</script>

<style scoped>
    .full-width {
        width: 100%;
    }
</style>