import * as yup from 'yup'

const UserSchema=yup.object().shape({
    name:yup
    .string(),

    bio: yup
    .string(),

    email:yup.string().email('insira um email válido'),

    password:yup.string(),

    confirmPassword: yup.string(),

    avatar: yup
    .string(),

    background: yup
    .string()

})

export{UserSchema}