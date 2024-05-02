declare module "react-player" {
  import * as React from "react";

  interface ReactPlayerProps {
    url: string;
    controls?: boolean;
    width?: string | number;
    height?: string | number;
    playing?: boolean;
    loop?: boolean;
    volume?: number;
    muted?: boolean;
    playbackRate?: number;
    onReady?: () => void;
    onStart?: () => void;
    onPlay?: () => void;
    onPause?: () => void;
    onBuffer?: () => void;
    onSeek?: (time: number) => void;
    onEnded?: () => void;
    onError?: (error: Error) => void;
    onDuration?: (duration: number) => void;
  }

  const ReactPlayer: React.FC<ReactPlayerProps>;
  export default ReactPlayer;
}
