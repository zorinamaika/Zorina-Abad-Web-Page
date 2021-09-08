<template>
<v-container class="text-center">
    Graduation
    <v-timeline align-top>
        <v-timeline-item>
            <div>
                <div><h2>2013</h2></div>
                <div>Programmer Analyst at FIS Global Solutions</div>
                <div>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                - Part of the Touchpoint Teller team developing the TP teller application for banks such as Vietin Bank, ASEAN banks
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                - Responsibilities include development of modules, bug fixing in SIT and UAT phase, technical documentation, peer code review, guidance of junior members
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                - Tech: Java, Swing, JUnit, JQuery, Web Services
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </div>
                <div class="location"><v-icon>{{marker}}</v-icon> Makati City, Philippines</div>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <div>
                <div><h2>2016</h2></div>
                <div>Java Consultant (Contract) at Indra Philippines</div>
                <div>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                - Sole Java developer for the Maynilad Water Inc. IT Operations and Maintenance team
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                - Manage change requests and bug fixes for Maynilad Web Apps, create tailor-made Java applications needed by the Ops team
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                - Tech: Java, Servlets, JSP, JS, Apache Velocity, Oracle, MS SQL
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </div>
                <div class="location"><v-icon>{{marker}}</v-icon> Quezon City, Philippines</div>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <div>
                <div><h2>2017</h2></div>
                <div>App Developer at IBM</div>
                <div>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                - Part of the Life Insurance team of the company’s Fortune 500 account USAA
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                - Migration of Java legacy code to recent web technology
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                - Responsibilities include enhancements, production bug fixing,  technical documentation, quality assurance testing 
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                - Tech: Java, React JS, Redux, IBM DB2, REST Web Services
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </div>
                <div class="location"><v-icon>{{marker}}</v-icon> Quezon City, Philippines</div>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <div>
                <div><h2>2019</h2></div>
                <div>Senior Software Engineer at Yondu Inc</div>
                <div>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                - Full Stack development and QA tasks such as performance testing 
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                - Develop internal apps for Yondu and web apps for Globe Telco
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                - Tech: Java, Adobe AEM, Spring, JQuery, Hibernate, MySQL, Google API, JMeter, JS
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </div>
                <div class="location"><v-icon>{{marker}}</v-icon> BGC, Taguig City, Philippines</div>
            </div>
        </v-timeline-item>
        <v-timeline-item>
            <div>
                <div><h2>2021</h2></div>
                <div>Application Consultant at NCS Philippines</div>
                <div><v-list-item three-line>
                        <v-list-item-content>
                            <v-list-item-subtitle>
                                - Back-end development of Java Spring microservices
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                - Bug fixing and enhancements for the RCBC SME Portal App
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                - Tech: Java, Spring (Core, Boot, Batch), Angular JS, MS SQL, AWS 
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </div>
                <div class="location"><v-icon>{{marker}}</v-icon>BGC, Taguig City, Philippines</div>
            </div>
        </v-timeline-item>

    </v-timeline>
    Total: 7 years of Experience
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
