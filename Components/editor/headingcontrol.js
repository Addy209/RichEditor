import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import Control from "./controls";

const Option = (props) => {
  return (
    <Tooltip title={`heading ${props.level}`} placement="right">
      <IconButton
        sx={{ fontSize: props.size }}
        onClick={() =>
          props.editor
            .chain()
            .focus()
            .toggleHeading({ level: parseInt(props.level) })
            .run()
        }
        className={
          props.editor.isActive("heading", { level: parseInt(props.level) })
            ? "is-active"
            : ""
        }
        size="small"
      >
        h{props.level}
      </IconButton>
    </Tooltip>
  );
};

export default function HeadingControl(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [currentHeading, setCurrentHeading] = React.useState(props.icon);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="heading" placement="top">
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {currentHeading}
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose()}>
          <Option level="1" editor={props.editor} size="24px"></Option>
        </MenuItem>
        <MenuItem onClick={() => handleClose()}>
          <Option level="2" editor={props.editor} size="22px"></Option>
        </MenuItem>
        <MenuItem onClick={() => handleClose()}>
          <Option level="3" editor={props.editor} size="20px"></Option>
        </MenuItem>
        <MenuItem onClick={() => handleClose()}>
          <Option level="4" editor={props.editor} size="18px"></Option>
        </MenuItem>
        <MenuItem onClick={() => handleClose()}>
          <Option level="5" editor={props.editor} size="16px"></Option>
        </MenuItem>
        <MenuItem onClick={() => handleClose()}>
          <Option level="6" editor={props.editor} size="14px"></Option>
        </MenuItem>
      </Menu>
    </>
  );
}
