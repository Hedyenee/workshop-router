import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Description({ movies }) {
  const navigate = useNavigate();
  const goBack = () => {
    if (true) navigate(-1);
    else navigate("/");
  };
  const movieTitle = useParams();
  const movieDescription = movies.find((m) => {
    return m.title === movieTitle.title;
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{movieDescription.title}</h2>
      <div style={{ marginRight: 250, marginLeft: 250, marginBottom: 50 }}>
        {movieDescription.description}
      </div>
      <iframe
        width="560"
        height="315"
        src={movieDescription.trailer}
        title="Youtube video player"
        frameborder="0"
        allow="accelermeter; autoplay"
      ></iframe>
      <button onClick={goBack} style={{ marginTop: 50 }}>
        Go Back
      </button>
    </div>
  );
}

export default Description;
