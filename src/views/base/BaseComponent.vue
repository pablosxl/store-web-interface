<template>
    <div>
        <store-core-drawer ref="sidebar"/>
        <store-app-bar />
    </div>
</template>

<script>

import AppBar from '@/components/core/AppBar.vue'
import Drawer from '@/components/core/Drawer.vue'
export default {
    components: {
        "store-app-bar": AppBar,
        "store-core-drawer": Drawer

    },
    data() {
        return {

        }
    }
}
</script>