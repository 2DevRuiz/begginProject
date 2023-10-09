<template>
    <div class="Menu-item">
        <div class="label" @click="toogleMenu">
            <span v-if="icon">{{ icon }} --icon </span>
            <span>{{ label }}</span>
        </div>
        <div v-show="showChildren" class="items-container">
            <MenuItems v-for="(item, index) in data" 
            :key="index"
            :label="item.label"
            :icon="item.icon"
            :depth="depth + 1"
            :data="item.children" />
        </div>
    </div>
</template>
<script lang="ts" setup>
const { label, icon, depth, data } = defineProps({
    label: {
        type: String,
        required: true
    },
    icon: {
        type: String,
    },
    depth: {
        type: Number,
        required: true
    },
    data: {
        type: Array
    }
});
const showChildren = ref(false);
function toogleMenu() {
    showChildren.value = !showChildren.value;
}
</script>