<template>
    <v-navigation-drawer
        v-model="drawer"
        color="amber darken-4"
        :permanent="permanent"
        dark
        app>
        <v-list
            dense>
            <v-list-item 
                two-line 
                :class="miniVariant && 'px-0'">
                <v-list-item-avatar>
                    <img src="">
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{ userData.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ userData.company }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider />

            <v-list-item
                v-for="item in items"
                :key="item.title"
                link 
                @click="$router.replace({path: item.route}, () => {})">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    data() {
        return {
            drawer: "",
            userData: {
                name: undefined,
                company: undefined,
                userType: undefined
            },
            items: [
                { title: 'Dashboard', icon: 'mdi-content-paste', route:'/inicio'},
                { title: 'Estoque', icon: 'mdi-package-variant-closed', route:'/estoque'},
                { title: 'Pedidos', icon: 'mdi-clipboard-edit-outline', route:'/pedidos'},
                { title: 'Produtos', icon: 'mdi-database', route:'/produtos'},
                { title: 'Usuários', icon: 'mdi-account-outline' /*'mdi-badge-account-horizontal-outline' 'mdi-card-account-details'*/, route:'/listausuarios'},
                { title: 'Empresas', icon: 'mdi-city-variant-outline' /*'mdi-badge-account-horizontal-outline' 'mdi-card-account-details'*/, route:'/empresas'},
            ],
            color:'primary',
            colors: [
                'primary',
                'blue',
                'success',
                'red',
                'teal',
            ],
            right: false,
            permanent: true,
            miniVariant: false,
            expandOnHover: false,
            background: true,
        }
    }
}
</script>