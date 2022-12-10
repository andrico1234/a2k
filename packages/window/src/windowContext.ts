import { createContext } from "@lit-labs/context";

export interface RegisteredWindow {
  id: string;
}

export interface WindowContext {
  count: number;
  windows: RegisteredWindow[];
  registerWindow: (id: string) => void;
  unregisterWindow: (id: string) => void;
}

export const windowContext = createContext<WindowContext>("window-context");
