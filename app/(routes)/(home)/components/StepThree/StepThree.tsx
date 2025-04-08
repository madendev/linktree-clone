import { Button } from "@/components/ui/button";
import useStepConfig from "@/hooks/useStepConfig";
import Image from "next/image";

export function StepThree() {
  const { setInfoUser, nextStep, infoUser } = useStepConfig();

  const handleContinue = () => {
    const updatedPlatforms = infoUser.platforms.map(({ icon, name }) => {
      const input = document.getElementById(
        `${name}-input`
      ) as HTMLInputElement;
      return {
        name,
        icon,
        link: input?.value || "",
      };
    });

    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      platforms: updatedPlatforms,
    }));
    nextStep();
  };

  return (
    <div>
      <h2 className=" font-semibold text-center text-2xl ">Añadir enlaces</h2>
      <p className="text-center text-sm text-muted-foreground">
        Completa los campos para agregar sus enlaces..
      </p>
      {infoUser.platforms.map(({ icon, link, name }) => (
        <div key={name} className="flex items-center gap-2 mt-4">
          <div className="flex flex-col gap-2 items-center">
            <Image src={icon} alt={name} width={40} height={40} />
          </div>
          <input
            id={`${name}-input`}
            type="text"
            placeholder={`${name} Username`}
            className="w-full rounded-l-lg border p-2 text-sm"
            defaultValue={link}
          />
        </div>
      ))}

      <div className="mt-4">
        <Button className="w-full bg-purple-600" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
}
