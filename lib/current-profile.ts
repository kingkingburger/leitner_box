import { supabase } from "@/lib/supabase/supabase";
import { redirect } from "next/navigation";
import { AuthError, Session } from "@supabase/gotrue-js";

export type User =
  | { data: { session: Session }; error: null }
  | { data: { session: null }; error: AuthError }
  | { data: { session: null }; error: null };

export const currentProfile = async () => {
  const user = await supabase.auth.getSession();

  // if (user && !user?.data?.session) redirect("/login");

  return user;
};
