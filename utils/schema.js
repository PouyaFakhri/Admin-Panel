import * as yup from "yup";

const PasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const LoginSchema = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required(" نام کاربری الزامی است")
      .min(3, " حداقل 3 کاراکتر"),
    password: yup
      .string()
      .required("رمز عبور الزامی است")
      .matches(
        PasswordRegex,
        "رمز عبور باید حداقل ۸ کاراکتر، شامل حروف بزرگ، کوچک، عدد و نماد باشد"
      ),
  });
  return schema;
};

export const RegisterSchema = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required(" نام کاربری الزامی است")
      .min(3, " حداقل 3 کاراکتر"),
    password: yup
      .string()
      .required("رمز عبور الزامی است")
      .matches(
        PasswordRegex,
        "رمز عبور باید حداقل ۸ کاراکتر، شامل حروف بزرگ، کوچک، عدد و نماد باشد"
      ),
    ConfirmPassword: yup
      .string()
      .required("تایید رمز عبور الزامی است")
      .oneOf([yup.ref("password")], " با رمز عبور وارد شده مطابقت ندارد"),
  });
  return schema;
};

export const AddProductSchema = () => {
  const schema = yup.object().shape({
    name: yup.string().required(" نام کالا الزامی است"),
    quantity: yup
      .number()
      .required(" تعداد کالا الزامی است")
      .integer()
      .typeError()
      .positive(" حداقل موجودی یک عدد است"),
    price: yup
      .number()
      .required("قیمت محصول الزامی است")
      .typeError()
      .positive("قیمت را به درستی وارد نمایید "),
  });

  return schema
};
