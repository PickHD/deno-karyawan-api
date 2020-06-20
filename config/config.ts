const env = Deno.env.toObject();

export const PORT = parseInt(env.PORT, 10) || 8080;

// change "yourhosturl" with your host url
export const MONGO_HOST_URL = env.MONGO_HOST_URL || "<your_HOST_URL>";

// change "yourdb" with your database name
export const MONGO_DB_NAME = env.MONGO_DB_NAME || "<your_DB>";
