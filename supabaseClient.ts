
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jrvaylaghovfzmwptjmf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpydmF5bGFnaG92Znptd3B0am1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxODUwOTIsImV4cCI6MjA2ODc2MTA5Mn0.fWRyYqULcB9Z9tUj6hv9b-OW79sz_mt79cEcvxVwmVE'
const supabase = createClient(supabaseUrl, supabaseKey)