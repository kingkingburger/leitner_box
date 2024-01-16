import { supabase } from "@/lib/supabase/supabase";
import { redirect } from "next/navigation";

export const currentProfile = async () => {
  const user = await supabase.auth.getSession();

  if (!user) redirect("/create-account");

  return user;
};
