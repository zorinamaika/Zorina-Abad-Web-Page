<template>
<v-container>
    <v-row>
        <v-col md="6">
            <v-list>
                <v-list-item v-for="item in items" :key="item.name">
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-rating v-model="item.rating" readonly size="15"></v-rating>
                </v-list-item>
            </v-list>
        </v-col>
        <v-col md="6">
            <v-list>
                <v-list-item v-for="item in items" :key="item.name">
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-rating v-model="item.rating" readonly size="15"></v-rating>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: 'Skills',

    data: () => ({
        open: ['public'],
        files: {
            html: 'mdi-language-html5',
            js: 'mdi-nodejs',
            json: 'mdi-code-json',
            md: 'mdi-language-markdown',
            pdf: 'mdi-file-pdf',
            png: 'mdi-file-image',
            txt: 'mdi-file-document-outline',
            xls: 'mdi-file-excel',
            code: 'mdi-checkbox-marked-circle-outline'
        },
        tree: [],
        items: [{
                name: 'Languages',
                file: 'code',
                rating: '4',
            },
            {
                name: 'Java Tech',
                file: 'code',
                rating: '3'
            },
            {
                name: 'Front End',
                file: 'code',
                rating: '3'
            },
            {
                name: 'Tools',
                file: 'code',
                rating: '1'
            },
            {
                name: 'Server',
                file: 'code',
                rating: '1'
            },
            {
                name: 'Operating Systems',
                file: 'code',
                rating: '1'
            }
        ],
    }),
}
</script>

<style scoped>
.skills {
    background-color: lightblue;
}
</style>
