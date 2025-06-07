import Image from "next/image";
import Search from "../../public/icons/search";
import Profile from "../../public/icons/profile";
import Logout from "../../public/icons/logout";
import styles from "./Dashborad.module.css"

function Dashboard({ products }) {
  console.log(products);
  return (
    <>
      <div className={styles.header}>
        <Search />
        <input type="search" placeholder=" جستجو کالا" />
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
      <div className={styles.productManagement} >
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
          <tbody className={styles.tbody}></tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
