<template>
  <div class="container">
    <CreateTask />
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h6 class="text-start">Search Tasks:</h6>
        <input type="text" v-model="searchQuery" class="form-control mb-4" placeholder="Search tasks..." />
      </div>
    </div>

    <div class="row g-3">
      <div v-for="task in filteredTasks" :key="task.id" class="col-md-4">
        <div class="card" :class="{
          'bg-success bg-gradient bg-opacity-50': task.completed == 'done'
        }">
          <div class="card-body d-flex justify-content-between align-items-center">
            <del class="text-start" style="width: 190px" v-if="task.completed == 'done'">{{ task.title }}</del>
            <div class="text-start" style="width: 190px" v-else>
              {{ task.title }}
            </div>

            <UpdateTask :task="task" />
            <EditTask :task="task" />
            <DeleteTask :id="task.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CreateTask from "./Create.vue";
import UpdateTask from "./Update.vue";
import DeleteTask from "./Delete.vue";
import EditTask from "./Edit.vue";
import { computed, ref } from "vue";
import { useTaskStore } from "../../store/task";

const store = useTaskStore();
const searchQuery = ref('')

const tasks = computed(() => store.getTasks);


const filteredTasks = computed(() => {
  if (searchQuery.value) {
    return tasks.value.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  } else {
    return tasks.value
  }

});
</script>