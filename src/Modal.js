import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from "reactstrap";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import CheckboxContainer from "./CheckboxContainer";

const ModalExample = (props) => {
  const { buttonLabel, className, instructions } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(instructions);

  return (
    <div>
      <Button
        color="primary"
        onClick={toggle}
        disabled={instructions.length === 0}
      >
        Instructions
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          {instructions.map((item) =>
            item.steps.map((step, index) => (
              <CheckboxContainer index={index} value={step.step} />
            ))
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggle}>
            Done
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
