import React from 'react';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton } from 'video-react';

export interface GuiOneVideoProps {
  className?: string;
  src: string;
  poster?: string;
}

export const GuiOneVideo = ({ className, src, poster }: GuiOneVideoProps) => {
  return (
    <Player className={className} poster={poster} src={src}>
      <BigPlayButton position="center" />
    </Player>
  );
};
