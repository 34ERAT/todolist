import { createContext, useContext } from "react";

export const TodoContext = createContext();

export function useTodo() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw "You are using UseTodo out of context";
  return ctx;
}
