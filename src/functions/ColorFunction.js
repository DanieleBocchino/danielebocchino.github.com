export function RandomColor() {
  let color = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"];
  return color[Math.floor(Math.random() * (3 - 0 + 1) + 0)];
}

export function SelectColor(index) {
  let color = [
    DEFAULT_SKILL_TEAL,
    DEFAULT_SKILL_PURPLE,
    DEFAULT_SKILL_RED,
    DEFAULT_SKILL_YELLOW,
    DEFAULT_SKILL_ORANGE,
    DEFAULT_SKILL_BLUE,
    DEFAULT_SKILL_GREEN,
  ];
  return color[index % color.length];
}

export const DEFAULT_SKILL_COLOR = "#666666";
export const DEFAULT_SKILL_ORANGE = "#ec912e";
export const DEFAULT_SKILL_GREEN = "#76ff03";
export const DEFAULT_SKILL_YELLOW = "#ffea00";
export const DEFAULT_SKILL_BLUE = "#2196f3";
export const DEFAULT_SKILL_PURPLE = "#651fff";
export const DEFAULT_SKILL_RED = "#ff1744";
export const DEFAULT_SKILL_TEAL = "#009688";
export const DEFAULT_SKILL_TRANSPARENT = "#121212";
export const DEFAULT_SKYPE = "#00AFF0";
export const DEFAULT_TWITTER = "#1DA1F2";
export const DEFAULT_LINKEDIN = "#0A66C2";
export const DEFAULT_CREEDLY = "#FF6B00";
export const DEFAULT_HACKERRANK = "#00EA64";
