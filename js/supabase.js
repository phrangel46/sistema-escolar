// Cole aqui os dados do seu projeto Supabase.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://qkplidmyrpzuzqchzcpg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_eZ3x22f3CclWq_zNuty5tg_uoCYBI10";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
