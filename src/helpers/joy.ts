export const isJoyColor = (
  color: string,
): color is "primary" | "neutral" | "danger" | "success" | "warning" => {
  return ["primary", "neutral", "danger", "success", "warning"].includes(color);
};
