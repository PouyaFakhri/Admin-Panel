import Image from "next/image";
import Link from "next/link";
import styles from "./LoginForm.module.css";
import { LoginSchema } from "../../utils/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseLoginUser } from "../../lib/queryHooks";
import { setToken } from "../../utils/cookies";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function LoginForm() {
  const { mutate, error } = UseLoginUser();
  const router = useRouter();
  const schema = LoginSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        setToken(res.token);
        router.replace("/dashboard");
      },
      onError: () => {
        error.response.data.message === "Invalid credentials"
          ? toast.error("نام کاربری یا رمز عبور اشتباه است")
          : toast.error("خطایی رخ داده است");
      },
    });
  };
  return (
    <form className={styles.formBox} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formTop}>
        <Image
          src="/images/Union.png"
          alt="لوگوی بوتواستارت"
          width={80}
          height={85}
          priority
        />
        <p className={styles.formTitle}>فرم ورود </p>
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
          autoComplete="current-password"
        />
        <p className={styles.error}>{errors.password?.message}</p>
      </div>
      <button type="submit"> ورود </button>
      <Link href="/register" className={styles.link}>
        ایجاد حساب کاربری
      </Link>
    </form>
  );
}

export default LoginForm;
