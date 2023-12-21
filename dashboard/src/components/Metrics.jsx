import { MetricItem } from './MetricItem';

const data = [
    {
      id: crypto.randomUUID(),
      color: "primary",
      title: "Vuelos disponibles",
      value: 21,
      icon: "fa-plane",
    },
    {
      id: crypto.randomUUID(),
      color: "warning",
      title: "Hoteles disponibles",
      value: 40,
      icon: "fa-hotel",
    },
    {
      id: crypto.randomUUID(),
      color: "success",
      title: "Usuarios registrados",
      value: 85,
      icon: "fa-user",
    },
  ];
  

export const Metrics = () => {
  return (
    <div className="col-12">
      <div className="row">
        {data.map(({ color, title, value, icon, id }) => (
          <MetricItem
            key={id}
            color={color}
            title={title}
            value={value}
            icon={icon}
          />
        ))}
      </div>
    </div>
  )
}
