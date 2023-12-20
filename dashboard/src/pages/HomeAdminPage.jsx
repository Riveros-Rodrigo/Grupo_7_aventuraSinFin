
import { LastProductInDb } from "../components/LastProductInDb"
import { Metrics } from "../components/Metrics"

const mockedvuelos = [
  {
    "nombre": "Vuelo 1",
    "precio": 500,
    "descuento": 50
  },
  {
    "nombre": "Vuelo 2",
    "precio": 700,
    "descuento": 75
  },
  {
    "nombre": "Vuelo 3",
    "precio": 600,
    "descuento": 60
  },
  {
    "nombre": "Vuelo 4",
    "precio": 800,
    "descuento": 80
  }
]

const hotelesMocked = [
  {
    "nombre": "Hotel ABC",
    "precio": 150,
    "descuento": 20
  },
  {
    "nombre": "Hotel XYZ",
    "precio": 200,
    "descuento": 30
  },
  {
    "nombre": "Hotel 123",
    "precio": 180,
    "descuento": 25
  },
  {
    "nombre": "Hotel Sunshine",
    "precio": 250,
    "descuento": 40
  }
]

const paquetesMocked = [
  {
    "nombre": "Paquete A",
    "precio": 1200,
    "descuento": 100
  },
  {
    "nombre": "Paquete B",
    "precio": 1500,
    "descuento": 120
  },
  {
    "nombre": "Paquete C",
    "precio": 1800,
    "descuento": 150
  },
  {
    "nombre": "Paquete D",
    "precio": 1350,
    "descuento": 110
  }
]

export const HomeAdminPage = () => {
  return (
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
    </div>

    <div className="row">
      <Metrics />

      <LastProductInDb title={'vuelos'} products={mockedvuelos}/>
      <LastProductInDb title={'Hoteles'} products={hotelesMocked}/>
      <LastProductInDb title={'Paquetes'} products={paquetesMocked}/>
    </div>
  </div>
  )
}
