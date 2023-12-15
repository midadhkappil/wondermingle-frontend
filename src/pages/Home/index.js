import React, { useState , useEffect} from "react";

const Home = () => {
  const [twits, setTwits] = useState([]); 

  useEffect(() => {
    fetchtwits();
  },[]);

  const fetchtwits = async () => {
    const responce = await fetch("http://localhost:8080/twit");
    const jsonResponse = await responce.json();
    setTwits(jsonResponse.data);
  };


  return (
    <div>
      {}
      {twits.map((twits, index) => ( 
        <div key={index}>{twits.name}</div> 
      ))}
    </div>
  );
};

export default Home;
