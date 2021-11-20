<template>
    <div v-for="date in dates" :key="img">
        <div v-if="img.image" class="relative col-span-1">
            <div class="picked-date-wrap mb-2">
                <the-date-picker :disabled="true"></the-date-picker>
                <the-date-picker :disabled="true"></the-date-picker>
                <button
                        @click="removeImage(img)"
                        class="absolute -top-3 -right-3"
                >
                    <svg
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="15" cy="15" r="15" fill="#351767" />
                        <path
                                d="M9.16663 9.16666L20.6571 20.6571M20.9857 9.16666L9.4952 20.6571"
                                stroke="white"
                                stroke-width="2"
                        />
                    </svg>
                </button>
            </div>
            <span class="text-xxs font-normal -ml-4 inline-block"
            >Главная фотография <br />
                (обложка мероприятия)</span
            >
        </div>
    </div>
</template>

<script>
    import TheDatePicker from "./TheDatePicker";
    export default {
        name: "DatesList",
        components: {TheDatePicker}
    }
</script>

<style scoped>

</style>