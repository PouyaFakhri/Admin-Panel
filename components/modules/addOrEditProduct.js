import { AddProductSchema } from "../../utils/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./addOrEditProduct.module.css";
import { useQueryClient } from "@tanstack/react-query";
import { UseEditProduct } from "../../lib/queryHooks";
import { UseAddProduct } from "../../lib/queryHooks";
import { toast } from "react-toastify";

function AddOrEditProduct({ props }) {
  const { isEditModal, setIsEditModal, setShowModal, productId } = props;
  const queryclient = useQueryClient();
  const { mutate, error } = isEditModal ? UseEditProduct() : UseAddProduct();
  const schema = AddProductSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const OnClose = () => {
    setShowModal(false);
    setIsEditModal(false);
  };
  const onSubmit = (data) => {
    isEditModal
      ? mutate(
          { id: productId, data },
          {
            onSuccess: () => {
              toast.success(" اطلاعات محصول با موفقیت ویرایش شد ");
              queryclient.invalidateQueries(["products"]);
              OnClose();
            },
            onError: () => {
              error.response.data.message === "Invalid or expired token"
                ? toast.error(
                    "لطفا از حساب کاربری خود خارج شده و مجدد وارد شوید "
                  )
                : toast.error("خطایی رخ داده است ");
            },
          }
        )
      : mutate(data, {
          onSuccess: () => {
            toast.success(" محصول با موفقیت افزوده شد ");
            queryclient.invalidateQueries(["products"]);
            OnClose();
          },
          onError: (error) => {
            error.response.data.message === "Invalid or expired token"
              ? toast.error(
                  "لطفا از حساب کاربری خود خارج شده و مجدد وارد شوید "
                )
              : toast.error("خطایی رخ داده است ");
          },
        });
  };
  return (
    <div className={styles.container}>
      <div className={styles.formbox}>
        {isEditModal ? <h2>ویرایش اطلاعات</h2> : <h2>ایجاد محصول جدید</h2>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputBox}>
            <label htmlFor="name">نام کالا</label>
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="نام کالا"
            />
            <p className={styles.error}>{errors.name?.message}</p>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="quantity"> تعداد </label>
            <input
              type="number"
              id="quantity"
              {...register("quantity")}
              placeholder="تعداد موجودی"
            />
            <p className={styles.error}>{errors.quantity?.message}</p>
          </div>
          <div className={styles.inputBox}>
            <label htmlFor="price"> قیمت </label>
            <input
              type="number"
              id="price"
              {...register("price")}
              placeholder="قیمت"
            />
            <p className={styles.error}>{errors.price?.message}</p>
          </div>
          <div>
            {isEditModal ? (
              <button type="submit">ثبت اطلاعات جدید </button>
            ) : (
              <button type="submit">ایجاد</button>
            )}
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={OnClose}
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddOrEditProduct;
