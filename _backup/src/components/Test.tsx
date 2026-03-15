import { useTheme } from "./context/theme.context";

export default function Text() {
  const [theme, { changeMode }] = useTheme();
  return <h1>{theme.mode}</h1>;
}
