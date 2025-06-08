import Image from "next/image";
import styles from "./deleteModal.module.css";
import { UseDeleteProduct } from "../../lib/queryHooks";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

function DeleteModal({ props }) {
  const clinet = useQueryClient();
  const { setShowDelModal, productId } = props;
  const { mutate } = UseDeleteProduct();
  const delHandler = () => {
    mutate(productId, {
      onSuccess: () => {
        toast.success("محصول با موفقیت حذف شد ");
        clinet.invalidateQueries("getProducts");
        setShowDelModal(false);
      },
      onError: (error) => {
        error.response.data.message === "Invalid or expired token"
          ? toast.error("لطفا از حساب کاربری خود خارج شده و مجدد وارد شوید ")
          : toast.error("خطایی رخ داده است ");
      },
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <Image
          src="/images/close.png"
          alt="حذف"
          width={96}
          height={98}
          priority
        />
        <p> آیا از حذف این محصول مطمئنید؟ </p>
        <div>
          <button type="submit" className={styles.delBtn} onClick={delHandler}>
            حذف
          </button>
          <button
            className={styles.cancelBtn}
            onClick={() => setShowDelModal(false)}
          >
            لغو
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
