import { createContext } from "@lit-labs/context";

export interface WindowContext {
  log: (msg: string) => void;
}

export const windowContext = createContext<WindowContext>("window-context");
