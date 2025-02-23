import { Button } from "@/components/Button";
import { Circle } from "lucide-react-native";
import { ReactNode, useState } from "react";
import { View } from "react-native";

interface StepperProps {
  steps: ReactNode[];
  onComplete: () => void;
}

interface ProgressCircleProps {
  complete?: boolean;
}

const ProgressBar = ({ complete }: ProgressCircleProps) => {
  return (
    <View
      className={`flex-1 h-6 rounded-3xl border border-accent ${
        complete ? "bg-accent" : ""
      }`}
    />
  );
};

const Stepper = ({ steps, onComplete }: StepperProps) => {
  const [step, setStep] = useState(1);

  const isLastStep = step === steps.length;

  const getStep = () => {
    return steps[step - 1];
  };

  const handleContinue = () => {
    setStep((step) => step + 1);
  };

  const handleBack = () => {
    setStep((step) => step - 1);
  };

  const handleComplete = () => {
    onComplete();
  };

  return (
    <View className="flex-1">
      <View className="flex-row gap-5 justify-center">
        {steps.map((_, i) => (
          <ProgressBar key={`progress-${i}`} complete={i + 1 <= step} />
        ))}
      </View>
      <View className="flex-1 justify-center">{getStep()}</View>
      <View className="mb-10 gap-5">
        {isLastStep ? (
          <Button
            variant="solid"
            size="medium"
            colorScheme="primary"
            onPress={handleComplete}
          >
            I understand
          </Button>
        ) : (
          <Button
            variant="solid"
            size="medium"
            colorScheme="primary"
            onPress={handleContinue}
          >
            Continue
          </Button>
        )}

        {step > 1 && (
          <Button
            variant="ghost"
            size="medium"
            colorScheme="primary"
            onPress={handleBack}
          >
            Back
          </Button>
        )}
      </View>
    </View>
  );
};

export { Stepper };
