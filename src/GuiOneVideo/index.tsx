import React from 'react';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

export interface GuiOneVideoProps {
  src: string;
  poster?: string;
}

export const GuiOneVideo = ({ src, poster }: GuiOneVideoProps) => {
  return (
    <Player poster={poster} src={src}>
      <BigPlayButton position="center" />
    </Player>
  );
};
