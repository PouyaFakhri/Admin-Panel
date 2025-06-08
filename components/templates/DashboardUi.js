import Image from "next/image";
import Search from "../../public/icons/search";
import Profile from "../../public/icons/profile";
import Logout from "../../public/icons/logout";
import styles from "./DashboradUi.module.css";
import CreateProduct from "../modules/createProduct";
import { UseGetProducts } from "../../lib/queryHooks";
import { useState } from "react";
import DeleteModal from "../modules/deleteModal";
import AddOrEditProduct from "../modules/addOrEditProduct";
import { deleteCookie } from "../../utils/cookies";
import { useRouter } from "next/router";
import Pagination from "../modules/pagination";

function DashboardUi({ ssrData, userName }) {
  const [page, setPage] = useState(1);
  const [showDelModal, setShowDelModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState({});
  const [productId, setProductId] = useState();
  const [searchKey, setSearchKey] = useState("");
  const router = useRouter();
  const { data } = UseGetProducts({
    page: page,
    name: searchKey,
    limit: 10,
    ssrData,
  });
  const totalPages = data.totalPages || 1
  const productAdder = () => {
    setEditProduct({});
    setShowModal(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Search />
        <input
          type="search"
          placeholder=" جستجو کالا"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <div className={styles.headersprof}>
          <Profile />
          <div>
            <h5>{userName}</h5>
            <p>مدیر</p>
          </div>
        </div>
        <div className={styles.headerslog}>
          <Logout
            onClick={() => {
              deleteCookie();
              router.replace("/");
            }}
          />
          <p>خروج</p>
        </div>
      </div>
      <div className={styles.addproduct}>
        <div>
          <Image
            src="/images/setting-3.png"
            alt="مدیریت کالا"
            width={30}
            height={30}
          />
          <p>مدیریت کالا</p>
        </div>{" "}
        <button type="submit" onClick={productAdder}>
          افزودن محصول{" "}
        </button>
      </div>
      <div className={styles.productManagement}>
        <table>
          <thead className={styles.thead}>
            <tr className={styles.tabelHeader}>
              <th> نام کالا</th>
              <th> موجودی </th>
              <th> قیمت</th>
              <th> شناسه کالا </th>
              <th className={styles.options}></th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {data?.data?.map((product) => {
              return (
                <CreateProduct
                  key={product.id}
                  props={{
                    product,
                    setShowDelModal,
                    setProductId,
                    setShowModal,
                    setIsEditModal,
                    setEditProduct,
                  }}
                />
              );
            })}
          </tbody>
        </table>
        {showDelModal ? (
          <DeleteModal props={{ productId, setShowDelModal }} />
        ) : null}
        {showModal ? (
          <AddOrEditProduct
            props={{
              isEditModal,
              setIsEditModal,
              setShowModal,
              productId,
              editProduct,
            }}
          />
        ) : null}
      </div>
      <Pagination value={{ page, setPage, totalPages }} />
    </div>
  );
}

export default DashboardUi;
