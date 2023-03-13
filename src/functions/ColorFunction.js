export function RandomColor() {
    let color = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"];
    return color[Math.floor(Math.random() * (3 - 0 + 1) + 0)];
  };


  export function SelectColor(index) {
    let color = ["#DB4437", "#F4B400", "#0F9D58","#4285F4", ];
    return color[index%4];
  };

export const DEFAULT_SKILL_COLOR = "#666666";
export const DEFAULT_SKILL_ORANGE = "#ec912e";
export const DEFAULT_SKILL_GREEN = "#76ff03";
export const DEFAULT_SKILL_YELLOW = "#ffea00";
export const DEFAULT_SKILL_BLUE = "#2196f3";
export const DEFAULT_SKILL_PURPLE = "#651fff";
export const DEFAULT_SKILL_RED = "#ff1744";
export const DEFAULT_SKILL_TRANSPARENT = "#121212";