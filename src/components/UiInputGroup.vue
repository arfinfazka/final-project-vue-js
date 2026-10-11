<script setup>
import { Icon } from '@iconify/vue';
defineProps({
    label: String,
    placeholder: String,
    id: String,
    type: String,
    icon: String
})

const model = defineModel()
</script>

<template>
    <div class="mb-3">
        <label :for="id" class="form-label title">{{ label }} <span style="color: red;">*</span></label>
        <div class="input-group">
            <input :type="type" class="form-control" :placeholder="placeholder" aria-label="Recipient’s username"
                aria-describedby="button-addon2" :id="id" v-model="model">
            <button class="btn btn-outline-secondary" type="button" :id="`${id}-button`" @click="$emit('button-click')">
                <Icon :icon="icon" height="20" width="20" color="#757575"/>
            </button>
        </div>
    </div>
</template>