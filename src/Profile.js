import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUser = async () => {
    try {
      let url = "https://jsonplaceholder.typicode.com/users";
      const result = await fetch(url);
      setUsers(await result.json());
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {loading ? (
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      ) : (
        users.map((e, id) => {
          return (
            <div key={id}>
              <Card sx={{ maxWidth: "100%" }} key={id} className="card">
                <div>
                  <img
                    style={{ width: "200px" }}
                    src={`https://avatars.dicebear.com/v2/avataaars/${e.username}.svg?options[mood][]=happy`}
                    alt={e.name}
                  />
                </div>
                <div>
                  <CardContent>
                    <h3>{e.name}</h3>
                    <p>
                      <b>Email</b>: {e.email}
                    </p>
                    <p>
                      <b>Phone</b>: {e.phone}
                    </p>
                    <p>
                      <b>Company</b>: {e.company.name}
                    </p>
                    <p>
                      <b>Website</b>: {e.website}
                    </p>
                    <p>
                      <b>Address</b>: {e.address.street}, {e.address.suite},{" "}
                      {e.address.city}, {e.address.zipcode}
                    </p>
                  </CardContent>
                </div>
              </Card>
              <br />
              <br />
            </div>
          );
        })
      )}
    </>
  );
};

export default Profile;
