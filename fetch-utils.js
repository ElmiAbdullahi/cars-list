const SUPABASE_URL = 'https://odowcnxsfnohbepstqkh.supabase.co';

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kb3djbnhzZm5vaGJlcHN0cWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2MzkyMzQsImV4cCI6MTk3NTIxNTIzNH0.5QtdTK7580fYMWSWSshVqzfYbTdVk7Tm85DQ9BFJnzw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCars() {
    const response = await client.from('favorite_cars').select('*');
    

    return response.data;
}

export async function getCar(id) {
    const response = await client.from('favorite_cars').select('*').match({ id }).single();
    return response.data;
}