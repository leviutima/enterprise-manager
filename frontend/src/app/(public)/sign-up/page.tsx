import { Navbar } from "@/src/shared/ui/navbar";
import { Footer } from "@/src/shared/ui/footer";
import SignUpWidget from "@/src/widgets/sign-up/ui/sign-up-widget";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
        <SignUpWidget />
      <Footer />
    </main>
  );
}
