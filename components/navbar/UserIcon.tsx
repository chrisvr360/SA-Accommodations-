import { User } from "lucide-react";
import { fetchProfileImage } from "@/utils/actions";

export default async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (!profileImage) {
    return <User className="w-8 h-8 text-primary" />;
  }
  return (
    <img
      src={profileImage}
      alt="profile"
      className="w-8 h-8 rounded-full object-cover"
    />
  );
}
