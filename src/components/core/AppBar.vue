<template>
    <v-app-bar
        color="deep-purple"
        dark>
        <!-- <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon> -->
        <v-toolbar-title>Loja</v-toolbar-title>
        <div
            class="d-flex ml-auto">
            <v-btn
                v-if="disabled"
                text
                @click="logoutSystem">
                Sair
            </v-btn>
        </div>
    </v-app-bar>
</template>