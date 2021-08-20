<template>
<v-container>
    <v-row>
        <v-col md="6">
            <v-list>
                <v-list-item v-for="item in items1" :key="item.name">
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-rating v-model="item.rating" readonly size="15"></v-rating>
                </v-list-item>
            </v-list>
        </v-col>
        <v-col md="6">
            <v-list>
                <v-list-item v-for="item in items2" :key="item.name">
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
        items1: [{
                name: 'Java',
                file: 'code',
                rating: '4',
            },
            {
                name: 'Spring',
                file: 'code',
                rating: '3'
            },
            {
                name: 'Maven',
                file: 'code',
                rating: '3'
            },
            {
                name: 'Hibernate',
                file: 'code',
                rating: '3'
            },
            {
                name: 'Javascript',
                file: 'code',
                rating: '2'
            },
            {
                name: 'HTML & CSS',
                file: 'code',
                rating: '2'
            }
        ],
        items2: [{
                name: 'Postman',
                file: 'code',
                rating: '3',
            },
            {
                name: 'JIRA',
                file: 'code',
                rating: '3'
            },
            {
                name: 'JUnit',
                file: 'code',
                rating: '3'
            },
            {
                name: 'Tomcat',
                file: 'code',
                rating: '3'
            },
            {
                name: 'Eclipse',
                file: 'code',
                rating: '4'
            },
            {
                name: 'VS Code',
                file: 'code',
                rating: '3'
            }
        ]
    }),
}
</script>

<style scoped>
.skills {
    background-color: lightblue;
}
</style>
