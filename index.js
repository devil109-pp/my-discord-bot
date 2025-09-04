import { fetchServers } from './services/robloxApi.js';
import { saveServerData } from './services/supabase.js';
import { sendNotification } from './services/notifier.js';

async function main() {
  console.log('🚀 بدء تشغيل البوت...');

  const servers = await fetchServers();

  for (const server of servers) {
    // مثال: فلترة حسب generation_rate
    if (server.generation_rate >= 1000000) {
      await saveServerData(server);
      await sendNotification(`🔥 سيرفر قوي: ${server.jobid} - معدل: ${server.generation_rate}`);
    }
  }
}

// تشغيل كل دقيقة
setInterval(main, 60 * 1000);
main();
