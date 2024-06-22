<template>
  <span
    v-if="task.completed == 'done'"
    @click="updateTask(task)"
    class="bi bi-check-circle pointer"
    data-toggle="tooltip"
    data-placement="top"
    title="Done"
  ></span>
  <span
    v-else-if="task.completed == 'not_done'"
    @click="updateTask(task)"
    class="bi bi-circle pointer"
    data-toggle="tooltip"
    data-placement="top"
    title="Not Done"
  ></span>

</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../../store/task";

const props = defineProps(["task"]);
const store = useTaskStore();

function updateTask(task) {
  store.updateTasks(task);
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>