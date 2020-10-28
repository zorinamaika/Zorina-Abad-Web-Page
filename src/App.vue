<template>
<v-app>
    <v-app-bar app>
        <Navigation />
    </v-app-bar>

    <v-main app height="100%">
        <router-view></router-view>
        <Footer width="100%">
        </Footer>
    </v-main>
</v-app>
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default {
    name: 'App',

    components: {
        Navigation,
        Footer
    },

    data: () => ({
        //
    }),
};
</script>

<style>
h1 {
    font: 54px;
    font-family: 'Open Sans', sans-serif !important;
}
</style>
