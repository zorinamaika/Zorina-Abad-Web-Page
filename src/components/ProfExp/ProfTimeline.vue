<template>
<v-container class="text-center">
    Graduation
    <v-timeline align-top>
        <v-timeline-item>
            <div>
                <div>2013</div>
                <div>FIS</div>
                <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div class="location"><v-icon>{{marker}}</v-icon> Makati City, Philippines</div>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <div>
                <div>2016</div>
                <div>Indra</div>
                <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div class="location"><v-icon>{{marker}}</v-icon> Quezon City, Philippines</div>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <div>
                <div>2017</div>
                <div>IBM</div>
                <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div class="location"><v-icon>{{marker}}</v-icon> Quezon City, Philippines</div>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <div>
                <div>2013</div>
                <div>FIS</div>
                <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div class="location"><v-icon>{{marker}}</v-icon> Makati City, Philippines</div>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <div>
                <div>2021</div>
                <div>{Company}</div>
                <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div class="location"><v-icon>{{marker}}</v-icon></div>
            </div>
        </v-timeline-item>

    </v-timeline>
    Total: 6 years of exp
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
