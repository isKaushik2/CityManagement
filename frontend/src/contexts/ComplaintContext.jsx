import { Children, createContext, useContext, useState } from "react";
import axiosInstance from "../utils/AxiosInstance";
import toast from "react-hot-toast";

export const ComplaintContext = createContext();

export const useComplaintContext = () => {
  return useContext(ComplaintContext);
};
export const ComplaintProvider = ({ children }) => {
  const [complaint, setComplaint] = useState({
    category: "",
    location: "",
    evidence: [],
    description: "",
    urgency: "",
  });

  const submitComplaint = async (submitData) => {
    try {
      const response = await axiosInstance.post("/complaint/submit", submitData);
      const { data } = response;
      toast.success(data.message);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <ComplaintContext.Provider value={{ complaint, setComplaint, submitComplaint }}>
      {children}
    </ComplaintContext.Provider>
  );
};
