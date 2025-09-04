import axios from 'axios';
import { config } from '../config.js';

export async function fetchServers() {
  try {
    const res = await axios.get(config.robloxApi);
    return res.data; // عدّل حسب شكل بيانات API
  } catch (err) {
    console.error('❌ خطأ في جلب بيانات Roblox:', err.message);
    return [];
  }
}
