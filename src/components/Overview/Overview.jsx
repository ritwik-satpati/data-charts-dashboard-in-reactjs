import { useMemo } from "react";
// Data
import user_data from "../../user_data.json";

const Overview = () => {
  // const genderOptions = ["Female", "Male"];

  const occupationStatusOptions = [
    "Student",
    "Dropout",
    "Working",
    "Jobless",
    "Retired",
  ];

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

  const genderCountsByOccupation = useMemo(() => {
    let countsByOccupation = {};

    user_data.forEach((user) => {
      const occupationTitle = user.occupation;

      if (!countsByOccupation[occupationTitle]) {
        countsByOccupation[occupationTitle] = { male: 0, female: 0 };
      }

      if (user.gender === "Male") {
        countsByOccupation[occupationTitle].male++;
      } else if (user.gender === "Female") {
        countsByOccupation[occupationTitle].female++;
      }
    });

    // Transform countsByOccupation object into the desired format
    return Object.keys(countsByOccupation).map((occupationTitle) => ({
      occupationTitle,
      male: countsByOccupation[occupationTitle].male,
      female: countsByOccupation[occupationTitle].female,
    }));
  }, [user_data]);

  return (
    <>
      <div className="w-full space-y-4">
        <div id="total" className="w-full grid grid-cols-3 gap-4">
          <div className="w-full flex items-center justify-center">
            <div className="w-full h-36 rounded-l-full rounded-r-sm border shadow-sm shadow-black flex items-center justify-center p-2 bg-gray-50">
              <div className="w-full h-full rounded-l-full rounded-r-sm pl-5 border-2 border-gray-300 flex flex-col items-center justify-center ">
                <p className="text-center font-Poppins font-medium text-2xl">
                  Female
                </p>
                <p className="text-center font-Poppins font-medium text-lg">
                  {user_data.filter((user) => user.gender === "Female").length}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-full h-36 rounded-sm border shadow-sm shadow-black flex items-center justify-center p-2 bg-gray-50">
              <div className="w-full h-full rounded-sm border-2 border-gray-300 flex flex-col items-center justify-center ">
                <p className="text-center font-Poppins font-semibold text-3xl">
                  Total User
                </p>
                <p className="text-center font-Poppins font-semibold text-xl">
                  {user_data.length}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-full h-36 rounded-l-sm rounded-r-full border shadow-sm shadow-black flex items-center justify-center p-2 bg-gray-50">
              <div className="w-full h-full rounded-l-sm rounded-r-full pr-5 border-2 border-gray-300 flex flex-col items-center justify-center ">
                <p className="text-center font-Poppins font-medium text-2xl">
                  Male
                </p>
                <p className="text-center font-Poppins font-medium text-lg">
                  {user_data.filter((user) => user.gender === "Male").length}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="occupation-status"
          className="rounded-r-sm border shadow-sm shadow-black flex flex-col items-center justify-center bg-gray-50 p-2"
        >
          <table className="table-auto w-full font-Poppins border-collapse border-2 border-gray-300">
            <thead>
              <tr className="border-2 border-gray-300 divide-x-2 divide-gray-300 font-medium text-lg">
                <th className="px-2 py-1 text-start">Occupation Status</th>
                <th className="px-2 py-1 text-start">Male</th>
                <th className="px-2 py-1 text-start">Female</th>
                <th className="px-2 py-1 text-start">Total</th>
              </tr>
            </thead>
            <tbody>
              {occupationStatusOptions &&
                occupationStatusOptions.map((item) => (
                  <tr
                    key={item}
                    className="border-2 border-gray-200 divide-x-2 divide-gray-200"
                  >
                    <td className="px-2 py-1 text-start font-medium">{item}</td>
                    <td className="px-2 py-1 text-start">
                      {
                        user_data.filter(
                          (user) =>
                            user.gender === "Female" &&
                            user.occupationStatus === item
                        ).length
                      }
                    </td>
                    <td className="px-2 py-1 text-start">
                      {
                        user_data.filter(
                          (user) =>
                            user.gender === "Male" &&
                            user.occupationStatus === item
                        ).length
                      }
                    </td>
                    <td className="px-2 py-1 text-start font-medium">
                      {
                        user_data.filter(
                          (user) => user.occupationStatus === item
                        ).length
                      }
                    </td>
                  </tr>
                ))}
              <tr className="border-2 border-gray-200 divide-x-2 divide-gray-200">
                <td className="px-2 py-1 text-start font-medium text-lg">
                  Total
                </td>
                <td className="px-2 py-1 text-start font-medium">
                  {user_data.filter((user) => user.gender === "Female").length}
                </td>
                <td className="px-2 py-1 text-start font-medium">
                  {user_data.filter((user) => user.gender === "Male").length}
                </td>
                <td className="px-2 py-1 text-start font-medium">
                  {user_data.length}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          id="city"
          className="rounded-r-sm border shadow-sm shadow-black flex flex-col items-center justify-center bg-gray-50 p-2"
        >
          <table className="table-auto w-full font-Poppins border-collapse border-2 border-gray-300">
            <thead>
              <tr className="border-2 border-gray-300 divide-x-2 divide-gray-300 font-medium text-lg">
                <th className="px-2 py-1 text-start">City</th>
                <th className="px-2 py-1 text-start">Male</th>
                <th className="px-2 py-1 text-start">Female</th>
                <th className="px-2 py-1 text-start">Total</th>
              </tr>
            </thead>
            <tbody>
              {cityOptions &&
                cityOptions.map((item) => (
                  <tr
                    key={item}
                    className="border-2 border-gray-200 divide-x-2 divide-gray-200"
                  >
                    <td className="px-2 py-1 text-start font-medium">{item}</td>
                    <td className="px-2 py-1 text-start">
                      {
                        user_data.filter(
                          (user) =>
                            user.gender === "Female" && user.city === item
                        ).length
                      }
                    </td>
                    <td className="px-2 py-1 text-start">
                      {
                        user_data.filter(
                          (user) => user.gender === "Male" && user.city === item
                        ).length
                      }
                    </td>
                    <td className="px-2 py-1 text-start font-medium">
                      {user_data.filter((user) => user.city === item).length}
                    </td>
                  </tr>
                ))}
              <tr className="border-2 border-gray-200 divide-x-2 divide-gray-200">
                <td className="px-2 py-1 text-start font-medium text-lg">
                  Total
                </td>
                <td className="px-2 py-1 text-start font-medium">
                  {user_data.filter((user) => user.gender === "Female").length}
                </td>
                <td className="px-2 py-1 text-start font-medium">
                  {user_data.filter((user) => user.gender === "Male").length}
                </td>
                <td className="px-2 py-1 text-start font-medium">
                  {user_data.length}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          id="occupation"
          className="max-h-[500px] rounded-r-sm border shadow-sm shadow-black flex flex-col items-center justify-start bg-gray-50 p-2 "
        >
          <div className="h-full w-full overflow-y-auto">
            <table className="table-auto w-full font-Poppins border-collapse border-2 border-gray-300">
              <thead>
                <tr className="border-2 border-gray-300 divide-x-2 divide-gray-300 font-medium text-lg">
                  <th className="px-2 py-1 text-start">Occupation</th>
                  <th className="px-2 py-1 text-start">Male</th>
                  <th className="px-2 py-1 text-start">Female</th>
                  <th className="px-2 py-1 text-start">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-2 border-gray-200 divide-x-2 divide-gray-200">
                  <td className="px-2 py-1 text-start font-medium text-lg">
                    Total
                  </td>
                  <td className="px-2 py-1 text-start font-medium">
                    {genderCountsByOccupation.reduce(
                      (total, occupation) => total + occupation.female,
                      0
                    )}
                  </td>
                  <td className="px-2 py-1 text-start font-medium">
                    {genderCountsByOccupation.reduce(
                      (total, occupation) => total + occupation.male,
                      0
                    )}
                  </td>
                  <td className="px-2 py-1 text-start font-medium">
                    {genderCountsByOccupation.reduce(
                      (total, occupation) => total + occupation.female,
                      0
                    ) +
                      genderCountsByOccupation.reduce(
                        (total, occupation) => total + occupation.male,
                        0
                      )}
                  </td>
                </tr>
                {genderCountsByOccupation &&
                  genderCountsByOccupation
                    .sort((a, b) => b.male + b.female - (a.male + a.female))
                    .map((item) => (
                      <tr
                        key={item.occupationTitle}
                        className="border-2 border-gray-200 divide-x-2 divide-gray-200"
                      >
                        <td className="px-2 py-1 text-start font-medium">
                          {item.occupationTitle}
                        </td>
                        <td className="px-2 py-1 text-start">{item.female}</td>
                        <td className="px-2 py-1 text-start">{item.male}</td>
                        <td className="px-2 py-1 text-start font-medium">
                          {item.male + item.female}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
