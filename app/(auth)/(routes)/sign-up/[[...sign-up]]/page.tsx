import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center h-full items-center">
      <SignUp />
    </div>
  );
}
