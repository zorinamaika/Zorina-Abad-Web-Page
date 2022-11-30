<template>
<v-toolbar color="blue" dark>

    <v-toolbar-title>Zorina Maika Developer Resume</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn to="/" text>
            Resume
            <router-link class="white--text link">
            </router-link>
        </v-btn>

        <v-divider vertical></v-divider>

        <v-btn to="/Personal" text>
            Interests
            <router-link class="white--text link">
            </router-link>
        </v-btn>

        <v-divider vertical></v-divider>

        <v-btn to="/Projects" text>
            Projects
            <router-link class="white--text link">
            </router-link>
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
        ]
    })
}
</script>

<style scoped>
.link {
    text-decoration: none;
}
</style>
