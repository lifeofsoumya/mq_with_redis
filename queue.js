import express from 'express';
import { Queue } from 'bullmq';
import { v4 as uuid } from 'uuid';

const app = express();
app.use(express.json())

const queue = new Queue('imageProcessingQueue', 'redis://localhost:6379');

app.post('/queue', async (req, res) => {
    console.log(req.body, ' req body')
    try {
        await queue.add("processing", {  id: uuid(), task: req.body.taskData });
        res.status(200).send('Task queued successfully.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error queuing task.');
    }
});

app.listen(8080, () => {
    console.log('Server running on port 3000');
});