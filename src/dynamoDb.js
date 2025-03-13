import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import crypto from 'node:crypto'

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const addTask = async (body) => {
    const command = new PutCommand({
        TableName: "taller-utp",
        Item: {
            tipo: "task",
            id: crypto.randomUUID(),
            nombre: body.nombre,
            estado: true
        }
    });

    const response = await docClient.send(command);
    console.log(response);
    return response;
};

