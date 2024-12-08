import axios from "axios";


export const fetchRecordsApi = async () => {
  const token = localStorage.getItem("token");
  const email=localStorage.getItem("email")
  try {
    const response = await axios.get(`http://localhost:8080/records/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error; 
  }
};
