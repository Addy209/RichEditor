import { Button, IconButton, TextField, Toolbar, Tooltip } from "@mui/material";

const Control = (props) => {
  return (
    <span style={{ padding: "2px" }}>
      <Tooltip title={props.name} placement="top">
        <IconButton
          onClick={() => props.action()}
          className={props.editor.isActive(props.activeName) ? "is-active" : ""}
          size="small"
        >
          {props.icon}
        </IconButton>
      </Tooltip>
    </span>
  );
};

export default Control;
