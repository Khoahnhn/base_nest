import * as dotenv from 'dotenv';
dotenv.config({});

const {
  PORT,
  OPEN_SWAGGER,
  APP_PREFIX,
  JWT_SECRET_KEY,
  JWT_EXPIRED_TOKEN,
  TYPEORM_TYPE,
  TYPEORM_HOST,
  TYPEORM_USERNAME,
  TYPEORM_PASSWORD,
  TYPEORM_PORT,
  TYPEORM_DATABASE,
  TYPEORM_LOGGING,
  TYPEORM_IS_SYNC_DB,
  REDIS_HOST,
  REDIS_PORT,
} = process.env;

export const DATABASE_CONFIG: {
  DB_TYPE: string;
  DB_HOST: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_LOGGING: boolean;
  DB_IS_SYNC: boolean;
} = {
  DB_TYPE: TYPEORM_TYPE,
  DB_HOST: TYPEORM_HOST,
  DB_USERNAME: TYPEORM_USERNAME,
  DB_PASSWORD: TYPEORM_PASSWORD,
  DB_PORT: +TYPEORM_PORT,
  DB_NAME: TYPEORM_DATABASE,
  DB_LOGGING: !!Number(TYPEORM_LOGGING),
  DB_IS_SYNC: !!Number(TYPEORM_IS_SYNC_DB),
};

export const PORT_CONFIG = +PORT;
export const APP_PREFIX_CONFIG = APP_PREFIX;

export const IS_OPEN_SWAGGER = !!Number(OPEN_SWAGGER);

export const REDIS_HOST_CONFIG = REDIS_HOST;
export const REDIS_PORT_CONFIG = REDIS_PORT;

export const JWT_SECRET_KEY_CONFIG: string = JWT_SECRET_KEY;
export const JWT_EXPIRED_TOKEN_CONFIG: string = JWT_EXPIRED_TOKEN;