import pool from "./localClient";
import prodPool from "./client";
import 'dotenv/config';

const isProduction = process.env.NODE_ENV === 'production';

const dbPool = isProduction ? prodPool : pool;

export default dbPool;
