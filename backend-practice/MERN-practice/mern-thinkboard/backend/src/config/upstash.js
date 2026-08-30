import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";




// Load environment variables from .env file
dotenv.config();

// Create a new ratelimiter, that allows 15 requests per 1 minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(15, "1 m"),
});

export default ratelimit;
