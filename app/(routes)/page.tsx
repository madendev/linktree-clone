import { Button } from "@/components/ui/button";
import { Navbar } from "./components/Navbar/Navbar";
import { Logo } from "@/components/shared";

export default function Home() {
  return (
    <div>
      <Logo />
      <Button>Hola Madendev</Button>
      <Navbar />
    </div>
  );
}
