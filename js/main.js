const { createApp } = Vue;


createApp({
    
    data () {
      return {
        task:'',
        datiTask: [
            {
                text: `task 1`,
                done: false
            },
            {
                text: `task 2`,
                done: false
            },
            {
                text: `task 3`,
                done: true
            },
            {
                text: `task 4`,
                done: true
            }
        ]
      };
    },

    methods:{
        deleteTask(i){
            console.log("STO CANCELLANDO");
           this.datiTask =  this.datiTask.filter(item=> item !== this.datiTask[i]);
        },
        addTask(){
            this.datiTask.push({text:this.task,done:false});
        }
    }

  }).mount("#app")





  

