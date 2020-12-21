import React, {PureComponent, ReactNode} from 'react';

export interface FieldsetProps {
  title?: string | ReactNode;
  disabled?: boolean;
  children: ReactNode;
}

export function FieldSet(props: FieldsetProps) {
  return (
    <fieldset>
      <legend>{props.title}</legend>
      {props.children}
    </fieldset>
  );
}
