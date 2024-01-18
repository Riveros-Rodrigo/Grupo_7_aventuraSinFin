import { useState } from "react"
import { ActionDropdown } from "./ActionDropdown"
import { FormProduct } from "./FormProduct"

export const LastProductInDb = (props) => {
  const [products, setProducts] = useState(props.products)
  const [showProductsForm, setShowProductsForm] = useState(false)
  const [productToEdit, setProductToEdit] = useState(undefined)

  const onDelete = (id) => {
    const updatedProducts = products.filter(item => item.id !== id)
    setProducts(updatedProducts)
  }

  const onDisplayProductsForm = () => {
    setShowProductsForm(prev => !prev)
  }

  const addProduct = (product) => {
    setProducts([...products, product])
    setShowProductsForm(false)
  }

  const editProduct = (product) => {
    const index = products.findIndex(item => item.id === product.id)
    const updatedProducts = [...products]
    updatedProducts[index] = product
    setProducts(updatedProducts)
    setProductToEdit(undefined)
    setShowProductsForm(false)
  }

  const onCancelForm = () => {
    setShowProductsForm(false)
    productToEdit(undefined)
  }

  const onClickEdit = (id) => {
    const productToEdit = products.find(item => item.id == id)
    setProductToEdit(productToEdit)
    setShowProductsForm(true)
  }

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            {props.title}
          </h5>
        </div>
        <div className="card-body">
          <p>
            <button type="button" className="btn btn-primary" onClick={onDisplayProductsForm}>Agregar</button>
          </p>

          {showProductsForm && <div>
            <FormProduct 
              addProduct={addProduct}
              editProduct={editProduct}
              product={productToEdit}
              onCancel={onCancelForm}
              />
          </div>}

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Descuento</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((item, index) => (
                  <tr key={item.id}>
                    <th scope="row">{(index + 1)}</th>
                    <td>{item.nombre}</td>
                    <td>{item.precio}</td>
                    <td>{item.descuento}</td>
                    <td><ActionDropdown id={item.id} onClickDelete={onDelete} onClickEdit={onClickEdit} /></td>
                  </tr>))
              }

            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}
