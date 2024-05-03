import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// Data
import user_data from "../../user_data.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doughnut Chart: Age Range (All)",
      },
    },
  };

  const ageOptions = [
    "Upto 13",
    "13+ to 18",
    "18+ to 25",
    "25+ to 32",
    "32+ to 45",
    "45+ to 60",
    "Above 60",
  ];

  const data = {
    labels: ageOptions,
    datasets: [
      {
        label: "Age - All",
        data: [
          user_data.filter((user) => user.age <= 13).length,
          user_data.filter((user) => user.age > 13 && user.age <= 18).length,
          user_data.filter((user) => user.age > 18 && user.age <= 25).length,
          user_data.filter((user) => user.age > 25 && user.age <= 32).length,
          user_data.filter((user) => user.age > 32 && user.age <= 45).length,
          user_data.filter((user) => user.age > 45 && user.age <= 60).length,
          user_data.filter((user) => user.age > 60).length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(129, 78, 211, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(129, 78, 211, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="max-h-[600px] w-full flex items-center justify-center p-2">
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
};

export default DoughnutChart;
