import env from "@/app/env";
import { Avatars, Client, Databases, Storage,Users } from "node-appwrite";
let client = new Client()

client
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId) // Your project ID
    .setKey(env.appwrite.apiKey) // Your secret API key