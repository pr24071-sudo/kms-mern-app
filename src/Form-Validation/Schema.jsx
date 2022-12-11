import * as Yup from "yup"

export const Signupschema = Yup.object({
    username : Yup.string().min(5).max(25).required("Please enter your name"),
    email : Yup.string().email().required("Please enter your email"),
    mobile: Yup.number().required("Please enter your Contact number"),
    password: Yup.string().min(6).max(15).required("Please enter your password"),
    cpassword : Yup.string().required().oneOf([Yup.ref("password"),null],"Password should match"),

})