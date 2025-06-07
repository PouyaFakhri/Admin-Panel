import Image from "next/image";
import Link from "next/link";
import styles from "./RegisterForm.module.css";
import { RegisterSchema } from "../../utils/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseRegisterUser } from "../../lib/queryHooks";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function RegisterForm() {
  const schema = RegisterSchema();
  const router = useRouter();
  const { mutate, error } = UseRegisterUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    const { ConfirmPassword, ...finalData } = data;
    mutate(finalData, {
      onSuccess: () => {
        toast.success("ثبت نام با موفقیت انجام شد");
        router.replace("/");
      },
      onError: () => {
        error.response?.data?.message === "User already exists"
          ? toast.error("این نام کاربری قبلاً ثبت شده است")
          : toast.error("خطایی رخ داده است ، لطفاً دوباره تلاش کنید");
      },
    });
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
