<template>
    <div class="">
        <form  v-on:submit.prevent="onSubmitHandler" >
            <input 
            type="text" 
            placeholder="I need to..."
            class="form-control"
            v-model="newTask"
            >
            <button class="btn btn-primary btn-sm">Add</button>
        </form>
    </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';
import {ref} from 'vue'
    export default {
        setup(){
            const taskStore = useTaskStore();
            const newTask = ref('');

            const onSubmitHandler = () =>{
           
                if(newTask.value.length > 0){
                     let task =  {
                        id:Math.floor(Math.random() * 1000000),
                        title:newTask.value,
                        isFav:false
                    };
                    newTask.value = '';
                     taskStore.addTask(task);
                }
            }


            return {taskStore, newTask, onSubmitHandler};
        }
    }
</script>

<style  scoped>

</style>