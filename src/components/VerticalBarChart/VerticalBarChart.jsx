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
// Data
import user_data from "../../user_data.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalBarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vertical Bar Chart: Occupation Status",
      },
    },
  };

  const data = {
    labels: ["Student", "Dropout", "Working", "Jobless", "Retired"],
    datasets: [
      {
        label: "Female",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        data: [
          user_data.filter(
            (user) =>
              user.gender === "Female" && user.occupationStatus === "Student"
          ).length,
          user_data.filter(
            (user) =>
              user.gender === "Female" && user.occupationStatus === "Dropout"
          ).length,
          user_data.filter(
            (user) =>
              user.gender === "Female" && user.occupationStatus === "Working"
          ).length,
          user_data.filter(
            (user) =>
              user.gender === "Female" && user.occupationStatus === "Jobless"
          ).length,
          user_data.filter(
            (user) =>
              user.gender === "Female" && user.occupationStatus === "Retired"
          ).length,
        ],
      },
      {
        label: "Male",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderColor: "rgba(53, 162, 235, 1)",
        borderWidth: 2,
        data: [
          user_data.filter(
            (user) =>
              user.gender === "Male" && user.occupationStatus === "Student"
          ).length,
          user_data.filter(
            (user) =>
              user.gender === "Male" && user.occupationStatus === "Dropout"
          ).length,
          user_data.filter(
            (user) =>
              user.gender === "Male" && user.occupationStatus === "Working"
          ).length,
          user_data.filter(
            (user) =>
              user.gender === "Male" && user.occupationStatus === "Jobless"
          ).length,
          user_data.filter(
            (user) =>
              user.gender === "Male" && user.occupationStatus === "Retired"
          ).length,
        ],
      },
    ],
  };

  return (
    <>
      <div className="max-h-[500px] w-full flex items-center justify-center p-2">
        <Bar options={options} data={data} />
      </div>
    </>
  );
};

export default VerticalBarChart;
