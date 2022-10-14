export {};

type Parameters = Record<string, string>;

type TrackFn = ({ id: string, parameters: Parameters }) => void;

declare global {
  interface Window {
    insights: {
      track: TrackFn;
    };
  }
}
