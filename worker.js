import { Worker } from 'bullmq';

const processingTask = async (job) => {
    console.log('Processing task no:', job.data.userId, ' filename: ', job.data.id);
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log('Upload to s3 and notify user, Done', job.data.userId, '\n------'); // implement uploading to cloud and emailing user
    console.log('Task completed:', job.data.userId, '\n------');
    // await job.remove()
}

export const redisOptions = { host: "localhost", port: 6379 };

const worker = new Worker('imageProcessingQueue', processingTask, { connection: redisOptions })

// worker.on("completed", (job) => {
//     console.log(`${job.id} has completed!`);
// });

// worker.on("failed", (job, err) => {
//     console.log(`${job.id} has failed with ${err.message}`);
// });
