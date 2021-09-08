<template>
<v-card md="6" tile elevation="0">
    <h2><center>Some best practices</center></h2>
    <v-list-item two-line class="text-center">
        <v-list-item-content>
            <v-list-item-title>DRY</v-list-item-title>
            <v-list-item-subtitle>
                Don't Repeat Yourself
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
<!--
    <v-list-item two-line class="text-center">
        <v-list-item-content>
            <v-list-item-title>SOLID</v-list-item-title>
            <v-list-item-subtitle>
                S O L I D Principles
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
-->
    <v-list-item two-line class="text-center">
        <v-list-item-content>
            <v-list-item-title>Code Smells:</v-list-item-title>
            <v-list-item-subtitle>
                <a href="https://betterprogramming.pub/looking-for-code-smells-in-javascript-677f1a312f29?gi=3659adc1312c">JS Code Smells</a>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
                <a href="https://refactoring.guru/refactoring/smells">Java Code Smells</a>
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>

</v-card>
</template>

<script>
export default {
    name: 'SoftwareDevPrinciples',

    data: () => ({
        //
    })
}
</script>
