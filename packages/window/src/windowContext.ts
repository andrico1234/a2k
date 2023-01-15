import { createContext } from "@lit-labs/context";

export interface RegisteredWindow {
  id: string;
  lastInteractionTime: number;
  hasAutoPosition: boolean;
}

export interface WindowOptions {
  hasAutoPosition?: boolean;
}

export interface WindowContext {
  version: number;
  count: number;
  windows: Record<string, RegisteredWindow>;
  windowsList: RegisteredWindow[];
  registerWindow: (id: string, options: WindowOptions) => void;
  unregisterWindow: (id: string) => void;
  handleInteraction: (id: string) => void;
}

export const windowContext = createContext<WindowContext>("window-context");
