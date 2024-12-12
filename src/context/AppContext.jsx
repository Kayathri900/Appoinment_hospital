import { Children, createContext } from "react";

export const AppContext = createContext();
const AppContextProvider = (props) => {
  const calculateAge = (dob) => {
    const today = new Date();
    const birthdate = new Date(dob);
    let age = today.getFullYear() - birthdate.getFullYear();
    return age;
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currencySymbol = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + months[Number(dateArray[1] - 1)] + " " + dateArray[2]
    );
  };

  const value = {
    calculateAge,
    slotDateFormat,
    currencySymbol,
    backendUrl,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
