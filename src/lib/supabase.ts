import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'
import { AppState, Platform } from 'react-native'
const supabaseUrl = 'https://ixfsdwlltovvjbheivas.supabase.co'
const supabaseAnonKey = process.env.SUPABASE_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey , {
    auth: {
        ...(Platform.OS !== 'web' ? {storage: AsyncStorage} : {}),
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl:false,
        lock: processLock,
    }
})

if(Platform.OS !== 'web'){
    AppState.addEventListener('change', (state) => {
        if(state === 'active'){
            supabase.auth.startAutoRefresh()
        }else{
            supabase.auth.stopAutoRefresh()
        }
    })
}