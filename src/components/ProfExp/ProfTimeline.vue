<template>
<v-container class="text-center">
    Graduation
    <v-timeline align-top>
        <v-timeline-item>
            <div>
                <div><h2>2013</h2></div>
                <div>Programmer Analyst at FIS Global Solutions</div>
                <div></div>
                <div class="location"><v-icon>{{marker}}</v-icon> Makati City, Philippines</div>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <div>
                <div><h2>2016</h2></div>
                <div>Java Consultant (Contract) at Indra Philippines</div>
                <div></div>
                <div class="location"><v-icon>{{marker}}</v-icon> Quezon City, Philippines</div>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <div>
                <div><h2>2017</h2></div>
                <div>App Developer at IBM</div>
                <div></div>
                <div class="location"><v-icon>{{marker}}</v-icon> Quezon City, Philippines</div>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <div>
                <div><h2>2019</h2></div>
                <div>Senior Software Engineer at Yondu Inc</div>
                <div></div>
                <div class="location"><v-icon>{{marker}}</v-icon> BGC, Taguig City, Philippines</div>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <div>
                <div><h2>2021</h2></div>
                <div>Application Consultant at NCS Philippines</div>
                <div></div>
                <div class="location"><v-icon>{{marker}}</v-icon>BGC, Taguig City, Philippines</div>
            </div>
        </v-timeline-item>

    </v-timeline>
    Total: 7 years of Exp
</v-container>
</template>

<script>
export default {
    name: 'ProfTimeline',

    data: () => ({
        marker: 'mdi-map-marker'
    })
}
</script>
<style>
    .location {
        font-style: italic;
    }
</style>
