import Edit from "../../public/icons/edit";
import Trash from "../../public/icons/trash";
import styles from "./createProduct.module.css";

function CreateProduct({ props }) {
  const { product, setShowDelModal , setProductId } = props;
  const { id, name, quantity, price } = product
  const deleteHandler = () => {
    setProductId(id)
    setShowDelModal(true)
  };
  return (
    <tr className={styles.tabelLine}>
      <td> {name} </td>
      <td> {quantity} </td>
      <td> {price} هزار تومان</td>
      <td> {id} </td>
      <td className={styles.options}>
        <Edit />
        <Trash onClick={deleteHandler} />
      </td>
    </tr>
  );
}

export default CreateProduct;
