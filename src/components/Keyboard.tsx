import React from "react";
import { BackspaceIcon } from "@heroicons/react/24/outline";

interface IKeyboard {
  handleKeyClick: any;
}

function Keyboard({ handleKeyClick }: IKeyboard) {
  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const middleRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const lastRow = ["enter", "z", "x", "c", "v", "b", "n", "m", "clear"];

  const buttonCn =
    "bg-[#808384] px-2 text-white capitalize min-w-[40px] h-[55px] rounded-sm text-sm font-bold";

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-3">
        {firstRow.map((k) => {
          return (
            <button
              key={k}
              data-key={k}
              onClick={handleKeyClick}
              className={buttonCn}
            >
              {k}
            </button>
          );
        })}
      </div>
      <div className="flex gap-3">
        {middleRow.map((k) => {
          return (
            <button
              key={k}
              data-key={k}
              onClick={handleKeyClick}
              className={buttonCn}
            >
              {k}
            </button>
          );
        })}
      </div>
      <div className="flex gap-3">
        {lastRow.map((k) => {
          let btnText: React.ReactNode = k;
          if (k === "clear")
            btnText = <BackspaceIcon style={{ pointerEvents: "none" }} />;

          return (
            <button
              key={k}
              data-key={k}
              onClick={handleKeyClick}
              className={buttonCn}
            >
              {btnText}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Keyboard;
