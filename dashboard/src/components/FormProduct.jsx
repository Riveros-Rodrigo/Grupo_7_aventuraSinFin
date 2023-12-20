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

import PropTypes from "prop-types";

import {
  createProduct,
  getHotels,
  getCountries,
  updateProduct,
} from "../services/products";

export const FormProduct = ({
  setProducts,
  formValues,
  setFormValues,
  products,
}) => {
  const [data, setData] = useState({
    hotels: [],
    countries: [],
    loading: true,
  });

  const imgPrev = useRef(null);
  const btnPrev = useRef(null);
  const inputImage = useRef(null);
  const [changeImage, setChangeImage] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const countries = await getSections();
        const hotels = await getBrands();

        if (!countries) throw new Error("Error al traer los paises");
        if (!hotels) throw new Error("Error al traer los hoteles");

        if (sections.ok && brands.ok) {
          setData({
            ...data,
            countries: sections.data,
            hotels: brands.data,
            loading: false,
          });
        }
      } catch (error) {
        console.error;
      }
    };
    getData();
  }, []);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]:  target.value,
    });
  };

  const handleCleanForm = () => {
    setFormValues({
      id: null,
      name: "",
      price: "",
      discount: "",
      hotelId: "",
      countryId: "",
      description: "",
      image: "",
    });
    btnPrev.current.classList.remove('fa-sync-alt');
    imgPrev.current.src = "/images/producto-sin-imagen.png";
    setChangeImage(false)

  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (formValues.id) {
      const result = await updateProduct(formValues, formValues.id);

      const productsUpdated = products.map((product) => {
        if (product.id === formValues.id) {
          product = result.data;
        }
        return product;
      });

      setProducts(productsUpdated);
    } else {
      const result = await createProduct(formValues);
      setProducts([...products, result.data]);
    }
    handleCleanForm();
  };

  const handleImagePrev = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name]:  target.files[0],
    });

    setChangeImage(true)
    btnPrev.current.classList.add("fa-sync-alt")

   
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{formValues.id ? "Editar" : "Agregar"} Producto</CardTitle>
      </CardHeader>
      <CardBody>
        <Form className="row" onSubmit={handleSubmitForm}>
          <div className="d-flex mb-3 col-12">
           
              <div
                className="mr-2 d-flex flex-column justify-content-center position-relative"
                style={{ height: "100px" }}
              >
                <img
                  src={changeImage? URL.createObjectURL(formValues.image) : formValues.id ? formValues.image : "/images/producto-sin-imagen.png"}
                  alt=""
                  height={150}
                  width={100}
                  style={{objectFit:"cover"}}
                  ref={imgPrev}
                />
                <FormLabel
                  htmlFor="file"
                  className="rounded rounded-circle btn btn-sm btn-primary"
                  style={{
                    width: 32,
                    position: "absolute",
                    bottom: "-15px",
                    right: "-5px",
                    cursor: "pointer",
                  }}
                >
                  <i  ref={btnPrev} className={`fas ${formValues.id && formValues.image ? 'fa-sync-alt' : 'fa-plus' } `}></i>    
                  <input ref={inputImage} type="file" hidden id="file" name="image" onChange={handleImagePrev}/>

                </FormLabel>                  

              </div>
  

            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleInputChange}
                value={formValues.name}
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="price"
              onChange={handleInputChange}
              value={formValues.price}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6">
            <Form.Label>Descuento</Form.Label>
            <Form.Control
              type="number"
              name="discount"
              onChange={handleInputChange}
              value={formValues.discount}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-12">
            <Form.Label>Hotel</Form.Label>
            <Form.Select
              className={`form-control`}
              name="hotelId"
              onChange={handleInputChange}
            >
              {data.loading ? (
                <option hidden defaultValue>
                  Cargando...
                </option>
              ) : (
                <>
                  <option hidden defaultValue>
                    Seleccione...
                  </option>
                  {data.hotels.map(({ id, name }) =>
                    formValues.hotelId == id ? (
                      <option key={id} selected value={id}>
                        {name}
                      </option>
                    ) : (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    )
                  )}
                </>
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col-12">
            <Form.Label>Pais</Form.Label>
            <Form.Select
              className={`form-control`}
              name="countryId"
              onChange={handleInputChange}
            >
              <option hidden defaultValue>
                Selecciona el Pais...
              </option>
              {data.countries &&
                data.countries.map(({ id, name }) =>
                  formValues.countryId == id ? (
                    <option key={id} selected value={id}>
                      {name}
                    </option>
                  ) : (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  )
                )}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 col-12">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              className={`form-control`}
              name="description"
              rows={4}
              onChange={handleInputChange}
              value={formValues.description}
              style={{ resize: "none" }}
            ></Form.Control>
          </Form.Group>

          <div className="d-flex justify-content-around w-100">
            <Button
              type="button"
              className="py-0"
              variant="outline-secondary"
              onClick={handleCleanForm}
            >
              Cancelar
            </Button>
            <Button type="submit" variant="outline-dark">
              Guardar
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};
FormProduct.propTypes = {
  formValues: PropTypes.object,
  setFormValues: PropTypes.func,
  products: PropTypes.array,
  setProducts: PropTypes.func,
};
