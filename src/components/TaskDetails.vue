<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
          <i class="material-icons" @click="taskStore.deleteTask(task.id)" >delete</i>
        
          <i class="material-icons" :class="{'favorite':task.isFav}"  @click="taskStore.toggleFavorite(task.id)">favorite</i>
           
        </div>
      </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';
    export default {
        name:"TaskDetails",
        props:['task'],
        setup(){
            const taskStore = useTaskStore();

            return {taskStore};
        }
    }
</script>

<style  scoped>

</style>