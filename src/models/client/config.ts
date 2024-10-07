import { Client, Account, Avatars,Databases,Storage } from 'appwrite';
import env from '@/app/env';
const client = new Client()
    .setEndpoint('env.endpoint') // Replace with your Appwrite endpoint
    .setProject('env.projectId'); // Replace with your project ID

const databases = new Databases(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const account = new Account(client);
export {client,databases,storage,avatars,account}
