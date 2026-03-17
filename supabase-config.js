// Supabase Configuration
const SUPABASE_URL = 'https://irpkpfguaeuhumucigkd.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_nDyUJ-wrYS-OAAHamCBY1Q_pJVIJdxJ'; 

let _supabase = null;

if (typeof supabase !== 'undefined') {
    if (SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY') {
        try {
            _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        } catch (e) {
            console.error('Supabase initialization error:', e);
        }
    } else {
        console.warn('Supabase Anon Key is missing. Using local mock mode.');
    }
} else {
    console.error('Supabase SDK not loaded. Check your internet connection.');
}

window.supabaseClient = _supabase;
