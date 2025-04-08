import { dataCreator } from "./StepOne.data";
import { useStepConfig } from "@/hooks/useStepConfig";

export function StepOne() {
  const { setInfoUser, nextStep } = useStepConfig();

  const handleClick = (value: string) => {
    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      typeUser: value,
    }));
  };

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">Cuéntanos sobre ti</h2>
      <p className="text-center">
        Esto nos ayuda a personalizar tu experiencia.
      </p>
      <div className="grid grid-cols-1 gap-2 mt-4">
        {dataCreator.map((data) => (
          <div
            key={data.value}
            className="flex flex-col items-center py-2 border rounded-full hover:bg-gray-100 cursor-pointer transition-all duration-300 ease-in-out"
            onClick={() => {
              handleClick(data.value);
              nextStep();
            }}
          >
            <label htmlFor={data.value} className="text-lg">
              {data.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
