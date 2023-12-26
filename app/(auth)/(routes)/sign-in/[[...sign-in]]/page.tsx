import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center h-full items-center">
      <SignIn />
    </div>
  );
}
