import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

export function loadEnv() {
  const path = `.env${
    process.env.NODE_ENV === 'test' ? '.test' : process.env.NODE_ENV === 'development' ? '.development' : ''
  }`;

  const currentEnvs = dotenv.config({ path });
  dotenvExpand.expand(currentEnvs);
}
