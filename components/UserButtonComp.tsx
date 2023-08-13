import { UserButton } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function UserButtonComp() {
  return (
    <UserButton afterSignOutUrl="/" appearance={{ baseTheme: neobrutalism }} />
  );
}
