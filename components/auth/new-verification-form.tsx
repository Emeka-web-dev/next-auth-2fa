"use client";

import { newVerification } from "@/actions/new-verification";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [succes, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onClick = useCallback(() => {
    if (!token) {
      setError("Missing token");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data?.success);
        setError(data?.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onClick();
  }, [onClick]);

  return (
    <div>
      <CardWrapper
        backButtonHref="/auth/login"
        backButtonLabel="Back to login"
        headerLabel="Confirming your information"
      >
        <div className="w-full flex items-center justify-center">
          {!error && !succes && <DotLoader />}
          <FormError message={error} />
          <FormSuccess message={succes} />
        </div>
      </CardWrapper>
    </div>
  );
};
