import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// Data
import user_data from "../../user_data.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Line Chart: Occupation Status (All)",
      },
    },
  };

  const data = {
    labels: ["Student", "Dropout", "Working", "Jobless", "Retired"],
    datasets: [
      {
        label: "All",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        data: [
          user_data.filter((user) => user.occupationStatus === "Student")
            .length,
          user_data.filter((user) => user.occupationStatus === "Dropout")
            .length,
          user_data.filter((user) => user.occupationStatus === "Working")
            .length,
          user_data.filter((user) => user.occupationStatus === "Jobless")
            .length,
          user_data.filter((user) => user.occupationStatus === "Retired")
            .length,
        ],
      },
    ],
  };

  return (
    <>
      <div className="max-h-[500px] w-full flex items-center justify-center p-2">
        <Line options={options} data={data} />
      </div>
    </>
  );
};

export default LineChart;
