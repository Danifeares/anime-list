import React from "react";
import { DefaultPlayer as Video } from "react-html5video";

interface Props {
  trailer: string;
}

export const VideoPlayer: React.FC<Props> = ({ trailer }) => {
  return (
    <Video autoPlay loop>
      <source src={trailer} />
    </Video>
  );
};
