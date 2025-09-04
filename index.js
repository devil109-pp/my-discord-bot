import { fetchServers } from './services/robloxApi.js';
import { saveServerData } from './services/supabase.js';
import { sendNotification } from './services/notifier.js';

async function main() {
  console.log('🚀 بدء تشغيل البوت...');

  const servers = await fetchServers();

  if (!servers || servers.length === 0) {
    console.log('❌ ماكو سيرفرات راجعة من fetchServers()');
    return;
  }

  for (const server of servers) {
    // بدون أي فلترة على generation_rate
    console.log(`📡 سيرفر: ${server.jobid} | لاعبين: ${server.playing}/${server.maxPlayers}`);

    await saveServerData(server);
    await sendNotification(`📡 سيرفر: ${server.jobid} | لاعبين: ${server.playing}/${server.maxPlayers}`);
  }
}

// تشغيل كل دقيقة
setInterval(main, 60 * 1000);
main();
