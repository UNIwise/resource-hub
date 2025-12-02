import { Box, IconButton, Tooltip } from "@mui/joy";
import { useColorScheme } from "@mui/joy/styles";
import type { FunctionComponent, ReactNode } from "react";
import {
  IoDesktopOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";

type Mode = "system" | "light" | "dark";

const modes: { value: Mode; icon: ReactNode; label: string }[] = [
  { value: "light", icon: <IoSunnyOutline />, label: "Light" },
  { value: "dark", icon: <IoMoonOutline />, label: "Dark" },
  { value: "system", icon: <IoDesktopOutline />, label: "System" },
];

const ThemeSwitcher: FunctionComponent = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        p: 0.5,
        borderRadius: "lg",
        backgroundColor: "background.level1",
      }}
    >
      {modes.map((m) => (
        <Tooltip key={m.value} title={m.label} placement="bottom">
          <IconButton
            size="sm"
            variant={mode === m.value ? "solid" : "plain"}
            color={mode === m.value ? "primary" : "neutral"}
            onClick={() => setMode(m.value)}
            sx={{
              borderRadius: "md",
              fontSize: "1rem",
              minWidth: 36,
              minHeight: 36,
            }}
          >
            {m.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default ThemeSwitcher;
