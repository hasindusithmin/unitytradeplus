import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://itbnozqiheazburehgvv.supabase.co', process.env.ANON)

export default supabase;