1. - Fire up the docker compose using 
   ```
   docker-compose up
   ```
   - Redisinsight would be up and running on localhost:8001, setup redis - localhost:6379
2. Run the queue.js and hit the /queue endpoint with a sample request like 
   ```
   {"taskData": "post processing"}
   ```
3. Check your Redis if task has been queued or not ( can use redisinsight )
4. Run the worker.js & see the task being processed