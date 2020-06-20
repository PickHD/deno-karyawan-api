import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";

import { MONGO_HOST_URL, MONGO_DB_NAME } from "./config.ts";

class Database {
  public client: MongoClient;

  constructor(public dbHostUrl: string, public dbName: string) {
    this.client = {} as MongoClient;
  }

  connect() {
    const client = new MongoClient();
    client.connectWithUri(this.dbHostUrl);
    this.client = client;
  }

  get database() {
    return this.client.database(this.dbName);
  }
}

const db = new Database(MONGO_HOST_URL, MONGO_DB_NAME);
db.connect();

export default db;
