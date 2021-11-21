<template>
    <div class="form-block mt-10 grid grid-cols-9 gap-4">
        <div class="date-picker-wrap col-span-2" >
            <date-input v-model="dateStartPicker" :label-name="'Дата начала'" :input-id="'date-start'"></date-input>
        </div>
        <div class="date-picker-wrap col-span-2" >
            <time-picker v-model="timeStart" :time-picker-id="'time-start'" class="col-span-2" :time-picker-name="'Время начала'" ></time-picker>
        </div>

        <div class="h-14 line col-span-1 self-end"></div>
        <div class="date-picker-wrap col-span-2" >
            <date-input v-model="dateEndPicker" :label-name="'Дата окончания'" :input-id="'date-end'"></date-input>
        </div>
        <div class="date-picker-wrap col-span-2" >
            <time-picker v-model="timeEnd" :time-picker-id="'time-end'" class="col-span-2" :time-picker-name="'Время окончания'" ></time-picker>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DatesList",
        props:['date'],
        components: {},

    }
</script>

<style scoped>

</style>