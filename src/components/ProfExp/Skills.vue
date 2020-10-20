<template>
  <v-treeview
    v-model="tree"
    :open="open"
    :items="items"
    activatable
    item-key="name"
    open-on-click
    class="blue lighten-2"
  >
    <template v-slot:prepend="{ item, open }">
      <v-icon v-if="!item.file">
        {{ open ? 'mdi-folder-open' : 'mdi-folder' }}
      </v-icon>
      <v-icon v-else>
        {{ files[item.file] }}
      </v-icon>
    </template>
  </v-treeview>
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
      },
      tree: [],
      items: [
        {
          name: 'Languages',
          children: [
            {
              name: 'Java',
              file: 'json'
            },
            {
              name: 'JS',
              file: 'js'
            },
            {
              name: 'SQL',
              file: 'json'
            },
          ],
        },
        {
          name: 'Java Tech',
        },
        {
          name: 'Front End',
          children: [
            {
              name: 'HTML',
              file: 'png'
            },
            {
              name: 'CSS',
              file: 'png',
            },
            {
              name: 'Bootstrap',
              file: 'html',
            },
          ],
        },
        {
          name: 'Tools',
          file: 'md',
        },
        {
          name: 'Server',
          file: 'js',
        },
        {
          name: 'Operating Systems',
          file: 'json',
        }
      ],
    }),
  }
</script>
<style scoped>
    .skills {
        background-color:lightblue;
    }
</style>