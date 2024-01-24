<template>
    <v-app>
        <core-view>
            <!-- fill-height does not work , v-layout is changed to v-row-->
            <v-container class="background-gradient" style="height: 100vh; padding-top: 100px;" fluid>
                <v-row justify="center">
                    <router-view />
                        <!-- <v-slide-y-reverse-transition leave-absolute>
                            <component :is="Component" />
                        </v-slide-y-reverse-transition> -->
                    <!-- </router-view> -->
                </v-row>
            </v-container>
        </core-view>

        <core-footer>
            Example © {{ new Date().getFullYear() }}
        </core-footer>

        <!-- <core-snackbar /> -->
    </v-app>
</template>

<script>
    export default {
        name: 'LayoutAuth',
    };
</script>

<style scoped>
    .background-gradient {
        background-image: linear-gradient(to right, #d60b52, #ea610d);
    }
</style>
