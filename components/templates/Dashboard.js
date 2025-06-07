import Image from "next/image";
import Search from "../../public/icons/search";
import Profile from "../../public/icons/profile";
import Logout from "../../public/icons/logout";

function Dashboard({ products }) {
  console.log(products);
  return (
    <>
      <div className="header">
        <Search />
        <input type="search" placeholder=" جستجو کالا" />
        <div className="headersprof">
          <Profile />
          <div>
            <h5>pouyaf98</h5>
            <p>مدیر</p>
          </div>
        </div>
        <div className="headerslog">
          <Logout />
          <p>خروج</p>
        </div>
      </div>
      <div className="addproduct">
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
      <div className="productManagement">
        <table>
          <thead className="thead">
            <tr className="tabelHeader">
              <th> نام کالا</th>
              <th> موجودی </th>
              <th> قیمت</th>
              <th> شناسه کالا </th>
              <th className="options"></th>
            </tr>
          </thead>
          <tbody className="tbody"></tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;
