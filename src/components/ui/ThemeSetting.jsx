import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import { themeColors } from "../../data/config";
import ClearIcon from "@mui/icons-material/Clear";
import { useStateContext } from "./../../context/ContextProvider";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const ThemeSetting = () => {
  const { currentColor, setThemeSettingMenu, setColorMode } = useStateContext();

  return (
    <div className="w-screen h-screen bg-half-transparent fixed top-0 left-0 z-40">
      <div className="h-screen bg-white w-72 float-right p-3">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold capitalize text-slate-900">
            settings
          </p>

          <Tooltip title="close" className="p-1 ml-4">
            <IconButton
              className=" text-slate-400"
              onClick={() => {
                setThemeSettingMenu(false);
              }}
            >
              <ClearIcon style={{ fontSize: "1.2rem" }} />
            </IconButton>
          </Tooltip>
        </div>

        <div className="mt-3 border-t-1 border-color">
          <p className="text-lg font-semibold capitalize text-slate-900 mb-2 mt-2">
            theme colors
          </p>
          <div className="flex flex-wrap gap-2">
            {themeColors.map((item) => (
              <button
                key={item.color}
                onClick={() => setColorMode(item.color)}
                className="w-8 h-8 rounded-full"
                style={{ background: item.color }}
              >
                {item.color === currentColor && (
                  <CheckOutlinedIcon className="text-white !text-sm" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetting;
