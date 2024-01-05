import { AlertTriangle } from "lucide-react";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! something went wrong"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex items-center justify-center">
        <AlertTriangle className="w-6 h-6 text-destructive" />
      </div>
    </CardWrapper>
  );
};
