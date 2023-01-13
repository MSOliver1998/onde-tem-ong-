import * as yup from "yup";

const OngSchema = yup.object().shape({
  name: yup.string(),

  bio: yup.string(),

  avatar: yup.string(),

  background: yup.string(),

  metas: yup.string(),
});

export { OngSchema };
