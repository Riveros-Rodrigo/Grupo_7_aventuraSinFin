
import { LastProductInDb } from "../components/LastProductInDb"
import { Metrics } from "../components/Metrics"
import { Doughnut } from 'react-chartjs-2';

const mockedvuelos = [
  {
    "id": "asdasd",
    "nombre": "Vuelo a Paris",
    "precio": 500,
    "descuento": 50
  },
  {
    "id": "hfgfgh",
    "nombre": "Vuelo a Brasil",
    "precio": 700,
    "descuento": 75
  },
  {
    "id": "asdfadsf",
    "nombre": "Vuelo a Machupichu",
    "precio": 600,
    "descuento": 60
  },
  {
    "id": "tertegf",
    "nombre": "Vuelo a Panamá",
    "precio": 800,
    "descuento": 80
  }
]

const hotelesMocked = [
  {
    "id": "asdasdg",
    "nombre": "Hotel Transilvania",
    "precio": 150,
    "descuento": 20
  },
  {
    "id": "qwasgasd",
    "nombre": "Hotel Nueva Chicago",
    "precio": 200,
    "descuento": 30
  },
  {
    "id": "gasdafsadfwr",
    "nombre": "Hacienda EncantadaResort & Spa",
    "precio": 180,
    "descuento": 25
  },
  {
    "id": "gdsgasdfew",
    "nombre": "Thompson Hotel",
    "precio": 250,
    "descuento": 40
  }
]

const paquetesMocked = [
  {
    "id": "adfasdfwear",
    "nombre": "Viaje y estadía familiar",
    "precio": 1200,
    "descuento": 100
  },
  {
    "id": "jfghhjg",
    "nombre": "Viaje en solitario",
    "precio": 1500,
    "descuento": 120
  },
  {
    "id": "asdfjrj",
    "nombre": "Stoneage Day",
    "precio": 1800,
    "descuento": 150
  },
  {
    "id": "asdgrt",
    "nombre": "Isla de Pascua",
    "precio": 1350,
    "descuento": 110
  }
]

export const HomeAdminPage = () => {
  return (
    <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Dashboard - Aventura sin fin</h1>
    </div>

    <div className="row">
      <Metrics />

      <LastProductInDb title={'Vuelos'} products={mockedvuelos}/>
      <LastProductInDb title={'Hoteles'} products={hotelesMocked}/>
      <LastProductInDb title={'Paquetes'} products={paquetesMocked}/>
    </div>
  </div>
  )
}




