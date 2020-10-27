import { Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useState } from "react";

function CheckboxContainer({ index, value }) {
  const [checked, setChecked] = useState(false);
  return (
    <FormControlLabel
      control={
        <Checkbox
          type="checkbox"
          id={index}
          checked={checked}
          onChange={(e) => setChecked(!checked)}
        />
      }
      label={value}
    />
  );
}

export default CheckboxContainer;
