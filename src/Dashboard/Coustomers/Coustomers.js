import React, { useContext } from "react";
import { useQuery } from "react-query";
import { authContext } from "../../Context/AuthProvider/AuthProvider";

const Coustomers = () => {
  const { user } = useContext(authContext);
  const {
    refetch,

    data: allUser = [],
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:5000/user").then((res) => res.json()),
  });

  const mackAdmin = (id) => {
    const userId = { Loginemail: user.email, userEmail: id };
    fetch("http://localhost:5000/mack_admin", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userId),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
        }
      });
  };
  return (
    <section className="">
      <div className=" py-10">
        <h2 className=" text-center text-4xl font-bold"> All Coustomers</h2>
        <div className="overflow-x-auto mt-10">
          <div className="overflow-x-auto">
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Promote</th>
                  </tr>
                </thead>
                {allUser.map((user, index) => (
                  <tbody key={user.index}>
                    {/* {console.log(user)} */}
                    <tr>
                      <th>{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>Seller</td>

                      <td>
                        <button
                          onClick={() => mackAdmin(user.email)}
                          className="btn btn-xs bg-[#0a699c] border-none"
                        >
                          {user.role === "admin" ? "admin" : "mack admin"}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coustomers;
