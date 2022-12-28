export function RandomColor() {
    let color = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"];
    return color[Math.floor(Math.random() * (3 - 0 + 1) + 0)];
  };


  export function SelectColor(index) {
    let color = ["#DB4437", "#F4B400", "#0F9D58","#4285F4", ];
    return color[index%4];
  };