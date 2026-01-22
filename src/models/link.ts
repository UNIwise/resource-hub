export interface LinkLabel {
  /** The text to display in the label chip */
  text: string;
  /**
   * The color of the label chip.
   * Can be a Joy UI color: "primary", "neutral", "danger", "success", "warning"
   * Or a custom hex color: "#ff5500"
   * Defaults to "warning" if not specified.
   */
  color?: "primary" | "neutral" | "danger" | "success" | "warning" | string;
}

export interface Link {
  href: string;
  title: string;
  description?: string;
  /**
   * Can be:
   * - An emoji: "📋"
   * - A URL to an image: "/icons/jira.svg" or "https://..."
   * - A devicon: "devicon/github-original" or "devicon/react-original-wordmark"
   *   For -original variants, SVG images are used (colored)
   *   For -plain/-line variants, the font icon is used
   *   See https://devicon.dev for available icons
   */
  icon?: string;
  category?: string;
  /**
   * Optional tags for filtering and categorization.
   * Tags are displayed as chips and can be clicked to filter links.
   */
  tags?: string[];
  /**
   * Optional label/chip to display on the card.
   * Can be:
   * - A string: "VPN Required" (uses warning color)
   * - An object: { text: "Beta", color: "primary" }
   * Defaults to warning color if color not specified.
   */
  label?: string | LinkLabel;
}
