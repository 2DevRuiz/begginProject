<template>
    <div class="menu">
        <MenuItems
            v-for="(item, index) in menuTree" :key="index"
            :label="item.label" 
            :icon="item.icon"
            :depth="0"
            :data="item.children" 
        />
    </div>
</template>
<script lang="ts" setup>
const menuTree =[
    {
        label:'Home',
        icon:'Home',
        children: [
            {
                label:'Level 1.1',
                icon:'levels',
            },
            {
                label:'Level 1.2',
                icon:'levels',
            }
        ]
    },
    {
        label:'Settings',
        icon:'Settings',
        children: [
            {
                label:'Level 2.1',
                icon:'levels',
            },
            {
                label:'Level 2.2',
                icon:'levels',
            }
        ]
    }
]
</script>