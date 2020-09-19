import React from "react";
import ReactPlayer from "react-player";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const MovieDetailsHeader = ({
  video = "https://www.youtube.com/watch?v=NLOp_6uPccQ&ab_channel=WarnerBros.Pictures",
}) => {
  const history = useHistory();
  const goBack = () => history.goBack();
  return (
    <div className="movie-details-header">
      <div className="container">
        <Button
          title="Back"
          className="movie-details-header-button"
          onClick={goBack}
        />
      </div>
      <ReactPlayer
        light={true}
        controls={true}
        muted={true}
        width="100%"
        url={video}
      />
    </div>
  );
};

export default MovieDetailsHeader;
