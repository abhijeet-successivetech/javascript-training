//Q5. Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit


class PromiseBasedTaskQueue{
  constructor(limit){
    this.limit=limit;
    this.queue= [];
    this.activeCount=0
  }
  addTask(task,priority){
    return new Promise((resolve,reject)=>{
      this.queue.push({task:()=>task().then(resolve).catch(reject),priority});
      this.queue.sort((a,b)=> a.priority-b.priority);
      setTimeout(()=>this.processQueue(),0);
    })
  }
  processQueue(){
    if(this.activeCount>=this.limit || this.queue.length===0){
      return;
    }
    const {task}=this.queue.shift();
    this.activeCount++;

    task().finally(()=>{
       this.activeCount--;
       this.processQueue();
    })
  }
}
const createTask = (id,delay)=>{
  return ()=> new Promise((resolve,reject)=>{
    console.log(`started task ${id}`);
    setTimeout(()=>{
      console.log(`Completed task ${id}`);
      resolve();
    },delay)
  })
}

const taskQueue = new PromiseBasedTaskQueue(3);

taskQueue.addTask(createTask(1,2000),2)
taskQueue.addTask(createTask(2,2000),3)
taskQueue.addTask(createTask(3,2000),1)
taskQueue.addTask(createTask(4,2000),7)
taskQueue.addTask(createTask(5,2000),0)
taskQueue.addTask(createTask(6,2000),5)