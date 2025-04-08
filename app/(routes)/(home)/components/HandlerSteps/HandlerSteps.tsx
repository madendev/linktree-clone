import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { HandlerStepsProps } from "./HandlerSteps.types";
import { useState } from "react";
import { useStepConfig } from "@/hooks/useStepConfig";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { StepOne } from "../StepOne";
import { StepTwo } from "../StepTwo";
import { StepThree } from "../StepThree";
import { StepFour } from "../StepFour";

export function HandlerSteps(props: HandlerStepsProps) {
  const { onReload } = props;

  const [openDialog, setOpenDialog] = useState(true);
  const { totalSteps, step, setStep, prevStep, infoUser } = useStepConfig();

  const progressValue = (step / totalSteps) * 100;

  const onCloseDialog = () => {
    onReload(true);
    setOpenDialog(false);
  };

  console.log("infoUser", infoUser);

  return (
    <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {step > 1 && step < totalSteps && (
              <Button
                variant="outline"
                className="mr-2"
                onClick={() => {
                  prevStep();
                }}
              >
                Atras <ArrowLeft />
              </Button>
            )}
            <div className="mb-2 text-center text-2xl font-semibold">
              Paso {step} de {totalSteps}
            </div>
            <Progress value={progressValue} className="w-full" />
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="mt-2 text-center ">
              {step === 1 && <StepOne />}
              {step === 2 && <StepTwo />}
              {step === 3 && <StepThree />}
              {step === 4 && <StepFour />}
              {step === totalSteps &&
                "Congratulations, you've completed all steps!"}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
