import Image from "next/image";
import Link from "next/link";
import styles from "./RegisterForm.module.css";
import { RegisterSchema } from "../../utils/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function RegisterForm() {
  const schema = RegisterSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formBox}>
      <div className={styles.formTop}>
        <Image
          src="/images/Union.png"
          alt="لوگوی بوتواستارت"
          width={80}
          height={85}
          priority
        />
        <p className={styles.formTitle}>فرم ثبت نام </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="نام کاربری "
          {...register("username")}
          autoComplete="username"
        />
        <p className={styles.error}>{errors.username?.message}</p>
      </div>
      <div>
        <input
          type="password"
          placeholder="رمز عبور "
          {...register("password")}
          autoComplete="new-password"
        />
        <p className={styles.error}>{errors.password?.message}</p>
      </div>
      <div>
        <input
          type="password"
          placeholder="تکرار رمز عبور"
          {...register("ConfirmPassword")}
          autoComplete="new-password"
        />
        <p className={styles.error}>{errors.ConfirmPassword?.message}</p>
      </div>
      <button type="submit"> ثبت نام </button>
      <Link href="/" className={styles.link}>
        حساب کاربری دارید ؟
      </Link>
    </form>
  );
}

export default RegisterForm;
