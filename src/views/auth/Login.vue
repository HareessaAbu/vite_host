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
            Remote Component 1:
            <RemoteComponent @authenticated="authenticated" />
        </v-card-text>
    </v-card>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    const RemoteComponent = defineAsyncComponent(() => import('remote-app/LoginForm'));

    export default {
        name: 'Login',

        components: { RemoteComponent },

        methods: {
            authenticated () {
                this.$router.replace(this.$route.query.redirect || '/');
            },
        },
    };
</script>
