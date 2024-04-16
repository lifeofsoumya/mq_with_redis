pm.environment.set("userId", Math.floor(Math.random() * 1001))
pm.environment.set("Priority", Math.floor(Math.random() * 11))

// -------------------------------- request (postman) payload -------------------------

// {
//     "taskData": "Processing file",
//     "userId": {{userId}},
//     "priority": {{Priority}}
// }
