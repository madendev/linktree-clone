import { stepTwoData } from "./StepTwo.data";
import useStepConfig from "@/hooks/useStepConfig";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export function StepTwo() {
  const { setInfoUser, infoUser, nextStep } = useStepConfig();

  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(
    infoUser?.platforms.map((platform) => platform.name) || []
  );

  const handleSelectPlatform = (platform: string) => {
    setSelectedPlatforms((prevSelected) => {
      if (prevSelected.includes(platform)) {
        return prevSelected.filter((item) => item !== platform);
      } else {
        return [...prevSelected, platform];
      }
    });
  };

  const handleContinue = () => {
    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      platforms: stepTwoData.filter(({ name }) =>
        selectedPlatforms.includes(name)
      ),
    }));
    nextStep();
  };

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        ¿En qué plataformas estás?
      </h2>
      <p className="text-center">Selecciona los que estás usando.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mt-4">
        {stepTwoData.map(({ icon, name }) => (
          <div
            key={name}
            className={`flex flex-col items-center p-4 border cursor-pointer rounded-lg hover:bg-violet-300 transition duration-300 ease-in-out
                
                ${selectedPlatforms.includes(name) ? "bg-violet-300" : ""}

                `}
            onClick={() => handleSelectPlatform(name)}
          >
            <Image src={icon} alt={name} width={40} height={40} />
            <span className="mt-2 text-center text-sm">{name}</span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Button className="w-full bg-purple-600" onClick={handleContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
}
