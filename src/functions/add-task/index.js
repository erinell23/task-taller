import { addTask } from "../../dynamoDb.js"

export async function handler(event, context) {
    const body = JSON.parse(event.body)
    await addTask(body)
    return {
        header: {
            "Content-Type": "aplication/json"
        },
        statusCode: 200,
        body: JSON.stringify({ message: "tarea guardada exitosamente!!" })
    }
}