<template>
  <span @click="openModal" class="bi bi-pen-fill pointer mx-3" data-toggle="tooltip" data-placement="top"
    title="Edit"></span>
  <div class="modal" :class="{ 'd-block': showModal }">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-body">
          <input type="text" class="form-control" v-model="newTitle">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" @click="editTask()">Save</button>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="modal-backdrop fade show" v-if="showModal"></div> -->

</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../../store/task";

const props = defineProps(["task"]);
const store = useTaskStore();
const showModal = ref(false)
const task = ref(props.task)
const newTitle = ref(props.task.title)


function openModal() {
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function editTask() {
  store.editTasks(task.value,newTitle.value);
  closeModal()
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>