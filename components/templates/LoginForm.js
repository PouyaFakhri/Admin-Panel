import Image from "next/image";
import Link from "next/link";
import styles from "./LoginForm.module.css"

function LoginForm() {
  return (
    <form className={styles.formBox}>
        <div className={styles.formTop}>
          <Image
            src="/images/Union.png"
            alt="لوگوی بوتواستارت"
            width={80}
            height={85}
            style={{ width: `100%` , height:`auto` }}
            priority
          />
          <p className={styles.formTitle}>فرم ورود </p>
        </div>
        <div>
          <input type="text" placeholder="نام کاربری " />
          <p className={styles.error}></p>
        </div>
        <div>
          <input type="password" placeholder="رمز عبور " />
          <p className={styles.error}></p>
        </div>
        <button type="submit"> ورود </button>
        <Link href="/register" className={styles.link}>
          ایجاد حساب کاربری
        </Link>
      </form>
  )
}

export default LoginForm