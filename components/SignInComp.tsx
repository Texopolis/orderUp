import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function SignInComp() {
  return (
    <SignIn
      redirectUrl="/dashboard"
      appearance={{
        baseTheme: neobrutalism,
        variables: {
          colorPrimary: "hsla(196, 100%, 67%, 1)",
          colorBackground: "hsla(125, 100%, 80%, 1)",
          colorTextOnPrimaryBackground: "black",
          colorText: "black",
          colorTextSecondary: "black",
          colorAlphaShade: "hsl(196, 73%, 62%)",
        },
    
      }}
    />
  );
}
