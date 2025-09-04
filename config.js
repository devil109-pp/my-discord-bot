import 'dotenv/config';

export const config = {
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_KEY,
  discordWebhook: process.env.DISCORD_WEBHOOK,
  robloxApi: process.env.ROBLOX_API
};
