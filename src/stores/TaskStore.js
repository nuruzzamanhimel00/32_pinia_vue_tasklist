import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({ 
        tasks:[
            // {id:1,title:"this is title number one",isFav:false},
            // {id:2,title:"this is title number two",isFav:true},
        ],
        loading:false,
        name: "Md Nuruzzaman himel",
    }),
    getters:{
        favs(){
            return this.tasks.filter( (task) => task.isFav );
        },
        favCount(){
            return this.tasks.reduce( (p, c) =>{
                return c.isFav ? p + 1 : p
            } , 0 );
        },
        totalCount(){
            return this.tasks.length;
        }
    },
    actions:{
        async getTasks(){
            this.loading = true;
            let res = await fetch("http://localhost:3000/tasks");
            const data = await res.json();
            this.tasks  = data;
            this.loading = false;
            // console.log(data);
        }
        ,
        addTask(task){
            this.loading = true;
            setTimeout(()=>{
                this.tasks.unshift(task);
                this.loading = false;
            },1000)
            
        },
        deleteTask(id){
            this.loading = true;
            setTimeout(()=>{
                this.tasks = this.tasks.filter( (task) => task.id != id );
                this.loading = false;
            },1000)
           
        },
        toggleFavorite(id){
            let findTask = this.tasks.find( (task) => task.id === id );
            findTask.isFav =!findTask.isFav;
           
        }
    }
})