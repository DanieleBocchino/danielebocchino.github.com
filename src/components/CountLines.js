import React, { useState, useEffect } from "react";
import { exec } from "child_process";

function LinesOfCode() {
  const [lines, setLines] = useState(null);

 /*  useEffect(() => {
    exec("git ls-files | xargs wc -l", (error, stdout) => {
      if (error) {
        console.error(error);
        return;
      }
      setLines(stdout);
    });
  }, []); */

  if (!lines) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{lines}</pre>
    </div>
  );
}

export default LinesOfCode;
