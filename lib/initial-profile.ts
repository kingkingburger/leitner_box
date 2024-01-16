import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";

export const initialProfile = async () => {
  const user = await currentProfile();

  if (!user) return redirect("/login");

  return user;
};
