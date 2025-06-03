import Image from "next/image";
import { User } from "lucide-react";
import { fetchProfileImage } from "@/utils/actions";

export default async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if (!profileImage) {
    return <User className="w-8 h-8 text-primary" />;
  }
  return (
    <Image
      src={profileImage}
      alt="profile"
      width={32}
      height={32}
      className="rounded-full object-cover"
    />
  );
}
