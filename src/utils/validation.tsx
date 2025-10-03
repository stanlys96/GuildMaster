import { FormikProps } from "formik";
import { CreateGuildFormikProps } from "./interface";

export const validateCreateGuildStepOne = (
  createFormik: FormikProps<CreateGuildFormikProps>,
  successCallback: () => void,
  errorCallback: (err: string) => void
) => {
  if (
    createFormik.values.name.trim() &&
    createFormik.values.tokenName.trim() &&
    createFormik.values.description.trim() &&
    parseInt(createFormik.values.initialTokenAmount || "0") > 0
  ) {
    successCallback();
  } else {
    if (!createFormik.values.name.trim()) {
      errorCallback("Please enter the guild name.");
    } else if (!createFormik.values.tokenName.trim()) {
      errorCallback("Please enter the token name.");
    } else if (!createFormik.values.description.trim()) {
      errorCallback("Please enter your guild's description.");
    } else if (parseInt(createFormik.values.initialTokenAmount || "0") <= 0) {
      errorCallback("Initial token amount must be more than 0.");
    }
  }
};

export const validateCreateGuildStepTwo = (
  createFormik: FormikProps<CreateGuildFormikProps>,
  successCallback: () => void,
  errorCallback: (err: string) => void
) => {
  if (createFormik.values.tokenAllocation.trim()) {
    successCallback();
  } else {
    errorCallback("Please choose a token allocation method!");
  }
};
