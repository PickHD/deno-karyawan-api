const env = Deno.env.toObject();

export const PORT = parseInt(env.PORT, 10) || 8080;

// change "yourhosturl" with your host url
export const MONGO_HOST_URL = env.MONGO_HOST_URL || "<yourhosturl>";

// change "yourdb" with your database name
export const MONGO_DB_NAME = env.MONGO_DB_NAME || "<yourdb>";
