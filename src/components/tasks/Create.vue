<template>
  <div class="row text-start">
    <div class="col-md-12 mb-4">
      <h4 class="text-start">Create Tasks:</h4>
      <form @submit.prevent="storeTask" class="row">
        <div class="col-md-6">
          <input v-model="title" class="form-control" type="text" />
          <div class="form-text text-danger">{{ titleErrorText }}</div>
        </div>
        <div class="col-auto">
          <button class="btn btn-dark">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import { useTaskStore } from "../../store/task";

const store = useTaskStore();
const title = ref("");
const titleErrorText = ref("");

function storeTask() {
  if (title.value == "") {
    titleErrorText.value = "Title is required";
  } else {
    titleErrorText.value = "";
    store.storeTasks(title.value);
    title.value = "";
  }
}
</script>
  
  <style scoped>
</style>