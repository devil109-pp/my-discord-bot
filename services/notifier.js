import axios from 'axios';
import { config } from '../config.js';

export async function sendNotification(message) {
  try {
    await axios.post(config.discordWebhook, { content: message });
    console.log('📢 تم إرسال الإشعار إلى Discord');
  } catch (err) {
    console.error('❌ خطأ في إرسال الإشعار:', err.message);
  }
}
