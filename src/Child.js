import React from 'react';
import { DatePicker, TextField } from '@fluentui/react';

export default function Child({ h2, cDate, cName, cEmail, onChange }) {
  const [isFocus, setIsFocus] = React.useState(false);

  const myChangeHandler = (newDate) => {
    onChange(newDate);
  };
  const DateComponent = React.useMemo(() => {
    return (
      <DatePicker
        label="Start date"
        value={cDate}
        onSelectDate={myChangeHandler}
      />
    );
  });

  const TextComponent = React.useMemo(() => {
    return (
      <TextField
        value={cDate}
        onFocus={() => {
          setIsFocus(true);
        }}
      />
    );
  });

  return isFocus ? DateComponent : TextComponent;
}
