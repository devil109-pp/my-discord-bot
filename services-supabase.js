import { createClient } from '@supabase/supabase-js';
import { config } from '../config.js';

export const supabase = createClient(config.supabaseUrl, config.supabaseKey);

export async function saveServerData(data) {
  const { error } = await supabase
    .from('servers')
    .insert(data);

  if (error) console.error('❌ خطأ في حفظ البيانات:', error);
  else console.log('✅ تم حفظ البيانات في Supabase');
}
