import { reactive, computed } from "vue";

const userData = reactive({
  formData: {},
});

export const getUserData = computed(() => userData.formData);
export const setUserData = (formObj) => {
  userData.formData = JSON.parse(JSON.stringify(formObj));
};
