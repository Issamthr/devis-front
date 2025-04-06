export const registerUser = async (userData) => {
    try {
      const response = await axios.post("http://localhost:8080/api/register", userData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      throw error;
    }
  };
  