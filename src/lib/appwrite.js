// src/lib/appwrite.js
import { Client, Account, Databases, Storage, ID, Query } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://qa17.appwrite.org/v1') 
    .setProject('6835bba700056862889d');

export const appwrite = {
    client,
    account: new Account(client),
    databases: new Databases(client),
    storage: new Storage(client), 
    ID,
    Query,
    dbId: '6835bc54001b73feff68',
    profilesCollectionId: '6835bc600033b3972f65',
    linksCollectionId: '6835bd980008b61646be',
    profilePicsBucketId: '6835be6900172d741121' 
};