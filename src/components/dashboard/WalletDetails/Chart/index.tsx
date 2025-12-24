import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { StyledChart } from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    display: false,
    scales: {
      xAxis: {
        grid: {
          display: false,
        },
      },
      yAxis: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Gráfico de valor recebido nos últimos meses",
      },
    },
  };

  const labels = ["0", "1", "2", "3", "4", "5", "6"];

  const data = {
    labels,
    datasets: [
      {
        label: "Valor recebido",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#00CBE7",
      },
    ],
  };

  return (
    <StyledChart>
      <Bar options={options} data={data} />
    </StyledChart>
  );
};

export { Chart };
