import { Worker } from 'bullmq';

const processingTask = async (job) => {
    console.log('Processing task:', job.data);
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('Task completed:', job.data);
    await job.done()
}

export const redisOptions = { host: "localhost", port: 6379 };

const worker = new Worker('imageProcessingQueue', processingTask, { connection: redisOptions })

worker.on("completed", (job) => {
    console.log(`${job.id} has completed!`);
});

worker.on("failed", (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
});
