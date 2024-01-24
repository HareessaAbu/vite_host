<template>
    <v-app>

        <core-view>
        </core-view>

        <v-footer color="secondary" dark>
            <v-col class="text-center" cols="12">
                Example © {{ new Date().getFullYear() }} Alle rechten voorbehouden
            </v-col>
        </v-footer>

        <!-- <core-snackbar /> -->
    </v-app>
</template>

<script>
    export default {
        name: 'LayoutIndex',

    };
</script>
