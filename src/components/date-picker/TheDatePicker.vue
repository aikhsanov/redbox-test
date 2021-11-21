<template>
    <dates-list v-for="date in dates" :date="date" :key="date"></dates-list>

    <a @click.prevent="addDate()" href="#">Добавить дату</a>
</template>

<script>
    import { ref} from "vue";
    import TimePicker from "./TimePicker";
    import DateInput from "./DateInput";
    // import DatesList from "./DatesList";
    export default {
        name: "TheDatePicker",
        components: {DateInput,TimePicker},
        // inject:['disabled', 'dateStartValue', 'dateEndValue'],
        setup() {
            const dateStartPicker = ref(null);
            const dateEndPicker = ref(null);
            const timeStart = ref('');
            const timeEnd = ref('');
            // eslint-disable-next-line no-unused-vars
            const dates = ref([
                {
                    date: false,
                },
                {
                    date: false,
                },
                {
                    date: false,
                },
            ]);
            function addDate() {
                const dateItem = dates.value.find(el => !el.date)
                if(!dateItem) {
                    console.log('нет свободных слотов для дат');
                    return
                }
                dateItem.date = {
                    dateStart:dateStartPicker.value,
                    dateEnd: dateEndPicker.value,
                    timeStart: timeStart.value,
                    timeEnd: timeEnd.value,
                };
            }
            //На случай, если найду как инициализировать datePicker с вынесенным инпутом
            // function createDatePicker(e) {
            //     if(dateStartPicker.value) {
            //         return;
            //     }
            //     dateStartPicker.value = e.target
            //     const datepickerStartEl = dateStartPicker.value;
            //     new Datepicker(datepickerStartEl, {
            //         format: 'dd.mm.yyyy',
            //     });
            // }
            return {
                dateStartPicker,
                dateEndPicker,
                addDate,
                dates,
                timeStart, timeEnd
            }
        }
    }
</script>

<style scoped>
    .line {
        text-align: center;
        margin: 0 1rem;
        position: relative;
    }
    .line:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        border-top: 2px solid #CDB1FB;
        width: 100%;
        transform: translateY(-50%);
    }
</style>