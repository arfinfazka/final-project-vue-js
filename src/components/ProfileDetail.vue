<script setup>
    defineProps ({
    label: String,
    placeholder: String,
    id: String,
    type: String,
})

const model = defineModel()
</script>


<template>
    <div class="mb-3">
        <label :for="id" class="form-label title">{{label}} <span style="color: red;">*</span></label>
        <input :type="type" class="form-control" :id="id" :placeholder="placeholder" v-model="model">
    </div>
</template>

<style scoped>
    .title {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: #0A0A0A;
    font-family: "Inter", sans-serif;
}
</style>