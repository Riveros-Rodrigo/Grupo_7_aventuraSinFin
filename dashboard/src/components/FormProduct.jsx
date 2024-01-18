import { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  FormLabel,
} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

import PropTypes from "prop-types";

import {
  createProduct,
  getHotels,
  getCountries,
  updateProduct,
} from "../services/products";

export const FormProduct = ({
  addProduct,
  editProduct,
  product,
  onCancel,
}) => {
  const [nombre, setNombre] = useState(product?.nombre || '')
  const [precio, setPrecio] = useState(product?.precio || 0)
  const [descuento, setDescuento] = useState(product?.descuento || 0)  


  const onNombreChange = (e) => {
    setNombre(e.target.value)
  }

  const onPrecioChange = (e) => {
    setPrecio(e.target.value)
  }

  const onDescuentoChange = (e) => {
    setDescuento(e.target.value)
  }

  const onSave = () => {
    const newProduct = {id: product?.id || uuidv4(), nombre, precio, descuento}
    product ? editProduct(newProduct) : addProduct(newProduct)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product ? "Editar" : "Agregar"} Producto</CardTitle>
      </CardHeader>
      <CardBody>
        <Form className="row" onSubmit={() => console.log('handleSubmitForm')}>
          <div className="d-flex mb-3 col-12">


            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={onNombreChange}
                value={nombre}
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="price"
              onChange={onPrecioChange}
              value={precio}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Descuento</Form.Label>
            <Form.Control
              type="number"
              name="discount"
              onChange={onDescuentoChange}
              value={descuento}
            />
          </Form.Group>


          <div className="d-flex justify-content-around w-100">
            <Button
              type="button"
              className="py-0"
              variant="outline-secondary"
              onClick={onCancel}
            >
              Cancelar
            </Button>
            <Button variant="outline-dark" onClick={onSave}>
              Guardar
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

