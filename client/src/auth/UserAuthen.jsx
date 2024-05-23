import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const UserAuthen = ({ children }) => {
  const navigate = useNavigate();
  const [authen, setAuthen] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/");
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const authenResponse = await axios.post(
          `http://localhost:8080/farmer/authen`,
          null,
          config
        );
        setAuthen(authenResponse.data.status == "ok" ? true : false);
      } catch (error) {
        console.log("Error" + error);
        setAuthen(false);
        navigate("/");
      }
    };
    fetchData();
  });
  return (
    <div>
      {authen ? children : null}
    </div>
  );
};

UserAuthen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserAuthen;
