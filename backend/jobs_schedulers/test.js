import  {ToadScheduler, SimpleIntervalJob, AsyncTask, Task } from 'toad-scheduler';





export const job_func = ()=> {
    const task = new Task("some console", ()=> {
        console.log("Some again")
    })
    
    const job =  new SimpleIntervalJob({seconds: 2}, task)
    
    const scheduler = new ToadScheduler();
    scheduler.addSimpleIntervalJob(job);
    
    
    
}