import React from "react";

interface CompProps {
  timer?: number;
  text?: string;
  children: any;
}

const CompDialog: React.FC<CompProps> = ({ timer, ...props }) => {
  return (
    <div role="textbox" data-timer={timer}> {props.children}</div>
  )
};

export default CompDialog;
