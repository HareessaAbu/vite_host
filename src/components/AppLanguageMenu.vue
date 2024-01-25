<template>
    <v-menu v-bind="$attrs">
        <template v-slot:activator="{on, attrs}">
            <v-btn
                v-bind="attrs"
                icon
                small
                v-on="on"
            >
                <v-img
                    class="rounded-circle"
                    :height="buttonIconSize"
                    :src="$_.get(currentLocale, 'flag')"
                    :width="buttonIconSize"
                />
            </v-btn>
        </template>

        <v-list>
            <v-subheader>{{ $t('general.static.language') }}</v-subheader>

            <v-list-item
                v-for="locale in supportedLocales"
                :key="locale.languageCode"
                :value="locale.languageCode"
                @click="changeLanguage(locale.languageCode)"
            >
                <v-list-item-avatar :size="menuIconSize">
                    <v-img :src="locale.flag" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        {{ locale.nativeName }}
                    </v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon>
                    <v-icon
                        v-if="$_.get(currentLocale, 'languageCode') === locale.languageCode"
                        color="primary"
                        small
                        v-text="'mdi-check'"
                    />
                </v-list-item-icon>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'AppLanguageSelect',

        data () {
            return {
                buttonIconSize: 28,
                menuIconSize: 24,
            };
        },

        computed: {
            ...mapGetters('localization', {
                supportedLocales: 'supportedLocales',
                currentLocale: 'currentLocale',
            }),
        },

        methods: {
            async changeLanguage (languageCode) {
                this.savingLanguage = true;

                await this.$store.dispatch('localization/changeLanguage', languageCode);

                this.savingLanguage = false;
            },
        },
    };
</script>
