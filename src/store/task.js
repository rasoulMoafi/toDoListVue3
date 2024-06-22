import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const useTaskStore = defineStore("task", {
  state: () => {
    return {
      tasks: [
        // {
        //   id: 1,
        //   title: "delectus aut autem",
        //   completed: "not_done",
        // },
        // {
        //   id: 2,
        //   title: "quis ut nam facilis et officia qui",
        //   completed: "not_done",
        // },
        // {
        //   id: 3,
        //   title: "fugiat veniam minus",
        //   completed: "done",
        // },
        // {
        //   id: 4,
        //   title: "et porro tempora",
        //   completed: "done",
        // },
        // {
        //   id: 5,
        //   title:
        //     "laboriosam mollitia et enim quasi adipisci quia provident illum",
        //   completed: "not_done",
        // },
        // {
        //   id: 6,
        //   title: "qui ullam ratione quibusdam voluptatem quia omnis",
        //   completed: "done",
        // },
        // {
        //   id: 7,
        //   title: "illo expedita consequatur quia in",
        //   completed: "not_done",
        // },
        // {
        //   id: 8,
        //   title: "quo adipisci enim quam ut ab",
        //   completed: "done",
        // },
        // {
        //   id: 9,
        //   title: "molestiae perspiciatis ipsa",
        //   completed: "done",
        // },
        // {
        //   id: 10,
        //   title: "illo est ratione doloremque quia maiores aut",
        //   completed: "done",
        // },
      ],
    };
  },
  getters: {
    getTasks(state) {
      let localTask = localStorage.getItem('task')
      state.tasks = localTask ? JSON.parse(localTask) : []
      return state.tasks;
    },
  },
  actions: {
    storeTasks(title) {
      let numberTask = this.tasks.length ? this.tasks[length].id +1 : 1
      this.tasks.unshift({
        id: numberTask++,
        title: title,
        completed: "not_done",
      });
      const taskStr = JSON.stringify(this.tasks)
      window.localStorage.setItem('task', taskStr)

      Swal.fire({
        title: "Task added",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
    updateTasks(task) {
      const taskIndex = this.tasks.findIndex((item) => item.id === task.id);
      if (taskIndex !== -1) {
        const targetTask = this.tasks[taskIndex];
        switch (targetTask.completed) {
          case "not_done":
            targetTask.completed = "done";
            break;
          case "done":
            targetTask.completed = "not_done";
            break;
        }
      }
      const taskStr = JSON.stringify(this.tasks)
      window.localStorage.setItem('task', taskStr)

      Swal.fire({
        title: "Task updated",
        icon: "warning",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
    editTasks(task,title) {
      const taskIndex = this.tasks.findIndex((item) => item.id === task.id);
      if (taskIndex !== -1) {
        this.tasks[taskIndex].title = title
      }
      const taskStr = JSON.stringify(this.tasks)
      window.localStorage.setItem('task', taskStr)

      Swal.fire({
        title: "Task edited",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
    deleteTasks(id) {
      const newTasks = this.tasks.filter((item) => item.id !== id);
      this.tasks = newTasks;
      const taskStr = JSON.stringify(this.tasks)
      window.localStorage.setItem('task', taskStr)
      Swal.fire({
        title: "Task deleted",
        icon: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
    
  },
});
