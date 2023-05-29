import React from 'react';
import { DatePicker, TextField } from '@fluentui/react';

export default function Child({ h2, cDate, cName, cEmail, onChange }) {
  const [isFocus, setIsFocus] = React.useState(false);

  const myChangeHandler = (newDate) => {
    onChange(newDate);
  };

  const TextDateComponent = React.useMemo(() => {
    return isFocus ? (
      <DatePicker
        label="Start date"
        value={cDate}
        onSelectDate={myChangeHandler}
      />
    ): (
      <TextField
        value={cDate}
        onFocus={() => {
          setIsFocus(true);
        }}
      />
    );
  }, [isFocus]);

  return TextDateComponent;
}
