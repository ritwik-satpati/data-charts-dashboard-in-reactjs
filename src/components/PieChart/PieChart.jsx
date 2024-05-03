import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
// Data
import user_data from "../../user_data.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Pie Chart: City (All)",
      },
    },
  };

  const cityOptions = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Surat",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Patna",
    "Unknown",
  ];

  const data = {
    labels: cityOptions,
    datasets: [
      {
        label: "City - All",
        data: [
          user_data.filter((user) => user.city === cityOptions[0]).length,
          user_data.filter((user) => user.city === cityOptions[1]).length,
          user_data.filter((user) => user.city === cityOptions[2]).length,
          user_data.filter((user) => user.city === cityOptions[3]).length,
          user_data.filter((user) => user.city === cityOptions[4]).length,
          user_data.filter((user) => user.city === cityOptions[5]).length,
          user_data.filter((user) => user.city === cityOptions[6]).length,
          user_data.filter((user) => user.city === cityOptions[7]).length,
          user_data.filter((user) => user.city === cityOptions[8]).length,
          user_data.filter((user) => user.city === cityOptions[9]).length,
          user_data.filter((user) => user.city === cityOptions[10]).length,
          user_data.filter((user) => user.city === cityOptions[11]).length,
          user_data.filter((user) => user.city === cityOptions[12]).length,
          user_data.filter((user) => user.city === cityOptions[13]).length,
          user_data.filter((user) => user.city === cityOptions[14]).length,
          user_data.filter((user) => user.city === cityOptions[15]).length,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(129, 78, 211, 0.2)",
          "rgba(246, 115, 61, 0.2)",
          "rgba(43, 194, 83, 0.2)",
          "rgba(17, 165, 209, 0.2)",
          "rgba(226, 45, 245, 0.2)",
          "rgba(78, 211, 129, 0.2)",
          "rgba(115, 61, 246, 0.2)",
          "rgba(194, 83, 43, 0.2)",
          "rgba(165, 209, 17, 0.2)",
          "rgba(45, 245, 226, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(129, 78, 211, 1)",
          "rgba(246, 115, 61, 1)",
          "rgba(43, 194, 83, 1)",
          "rgba(17, 165, 209, 1)",
          "rgba(226, 45, 245, 1)",
          "rgba(78, 211, 129, 1)",
          "rgba(115, 61, 246, 1)",
          "rgba(194, 83, 43, 1)",
          "rgba(165, 209, 17, 1)",
          "rgba(45, 245, 226, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="max-h-[600px] w-full flex items-center justify-center p-2">
        <Pie data={data} options={options} />
      </div>
    </>
  );
};

export default PieChart;
