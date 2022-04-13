const IndividualList = () => {
  const data = [
    {
      nickName: "Anom",
      location: "zion park",
      dateTime: "09/09/2021",
      healthStatus: "yes",
      observerName: "Jesse",
      observerEmail: "j@gmail.com",
    },
    {
      nickName: "Anom",
      location: "zion park",
      dateTime: "09/09/2021",
      healthStatus: "yes",
      observerName: "Jesse",
      observerEmail: "j@gmail.com",
    },
    {
      nickName: "Anom",
      location: "zion park",
      dateTime: "09/09/2021",
      healthStatus: "yes",
      observerName: "Jesse",
      observerEmail: "j@gmail.com",
    },
  ];
  return (
    <div className="Individual-List">
      <h1>Common Name</h1>
      <div className="Flex">
        <p>Scientific Name: xyz</p>
        <p>Conservation Status: Endangered</p>
        <p>Population: 500</p>
        <p>Wiki Link</p>

        {/* <img
          id="eb-stat-ctn"
          src="https://webstats.eb.com/webstats/stats.gif?a=-1&amp;ac=%20&amp;d=www.britannica.com&amp;od=www.britannica.com&amp;h=58&amp;rf=https%3A%2F%2Fwww.google.com%2F&amp;rq=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Ftiger&amp;s=B9D40F5F-3EAC-4DE6-B2F3-12DA57A1F5D6&amp;json=%20"
          alt=""
        /> */}
        <div className="Table">
          <table>
            <tbody>
              <tr>
                <th>Nick Name</th>
                <th>Location</th>
                <th> Date and Time of Seen</th>
                <th>Health Status</th>
                <th>Observer Name</th>
                <th>Observer Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.nickName}</td>
                    <td>{val.location}</td>
                    <td>{val.dateTime}</td>
                    <td>{val.healthStatus}</td>
                    <td>{val.observerName}</td>
                    <td>{val.observerEmail}</td>
                    <td>{val.observerName}</td>
                    <td>{val.observerEmail}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IndividualList;
