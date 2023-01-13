import * as yup from "yup";

const DonateSchema = yup.object().shape({
  value: yup.string().required(),
  public: yup.string().required(),
});

export { DonateSchema };
