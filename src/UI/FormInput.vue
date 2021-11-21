<template>
        <label for="inputName" class="block font-semibold"
        >{{labelName}}</label
        >
        <input
                @input="onInput"
                :value="modelValue"
                :type="inputType"
                :name="inputName"
                :id="inputName"
                :v-maska="inputMask"
                class="
                mt-2
                h-14
                focus:ring-heliotrope focus:border-heliotrope
                block
                w-full
                shadow-sm
                sm:text-sm
                border-perfume
                rounded
              "
        />
        <span>{{ arrangerError }}</span>
</template>

<script>
    export default {
        name: "FormInput",
        props:['labelName', 'inputName', 'inputType', 'modelValue', 'inputMask'],
        emits: ['update:modelValue'],
        setup(props, {emit}) {
                function onInput(e) {
                    emit('update:modelValue', e.target.value)
                }
            return {
                onInput
            }
        }
    }
</script>

<style scoped>

</style>