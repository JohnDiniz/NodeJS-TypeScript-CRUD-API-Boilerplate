import { createLog } from '@/repositories';

export async function CreateLogMessage(message: string) {
  const logMessage = await createLog(message);
  return { logMessage };
}
