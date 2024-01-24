<template>
    <v-card
        class="light-grey text-center"
        elevation="3"
        outlined
        width="600"
    >
        <v-row no-gutters>
            <v-col class="grow" />

            <v-col class="shrink">
                <v-card-title class="primary--text text-no-wrap">
                    Login
                </v-card-title>
            </v-col>

            <v-col class="grow d-flex justify-end align-center">
                <div class="mr-4">
                </div>
            </v-col>
        </v-row>

        <v-card-text>
            <RemoteComponent @authenticated="authenticated" />
        </v-card-text>

        <v-card-text>
            <RemoteComponent2 @authenticated="authenticated" />
        </v-card-text>
    </v-card>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import 'vuetify/lib/styles/main.sass'; // Manually import Vuetify styles
    const RemoteComponent = defineAsyncComponent(() => import('remote-app/LoginForm'));
    const RemoteComponent2 = defineAsyncComponent(() => import('remote-app/LoginForm2'));

    export default {
        name: 'Login',

        components: { RemoteComponent, RemoteComponent2 },

        methods: {
            authenticated () {
                this.$router.replace(this.$route.query.redirect || '/');
            },
        },
    };
</script>
