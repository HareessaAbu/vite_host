<template>
    <div>
        <v-overlay :value="true">
            <v-progress-circular
                indeterminate
                size="64"
            />
        </v-overlay>
  
        <router-view />
    </div>
  </template>
  
  <script>
    export default {
        name: 'App',
    };
  </script>
  