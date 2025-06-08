import Image from "next/image";
import Search from "../../public/icons/search";
import Profile from "../../public/icons/profile";
import Logout from "../../public/icons/logout";
import styles from "./DashboradUi.module.css";
import CreateProduct from "../modules/createProduct";
import { UseGetProducts } from "../../lib/queryHooks";
import { useState } from "react";
import DeleteModal from "../modules/deleteModal";

function DashboardUi({ ssrData }) {
  const [showDelModal, setShowDelModal] = useState(false);
  const [productId, setProductId] = useState();
  const [searchKey, setSearchKey] = useState("");
  const { data, isFetching } = UseGetProducts({
    page: 1,
    limit: 10,
    name: searchKey,
    ssrData,
  });
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
            <h5>pouyaf98</h5>
            <p>مدیر</p>
          </div>
        </div>
        <div className={styles.headerslog}>
          <Logout />
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
        <button type="submit">افزودن محصول </button>
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
                  props={{ product, setShowDelModal , setProductId}}
                />
              );
            })}
          </tbody>
        </table>
         {showDelModal ? <DeleteModal props={{productId , setShowDelModal}} /> : null}
      </div>
    </div>
  );
}

export default DashboardUi;
