import { useState } from 'react';

export default function FirstTask() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );

  return (
    <>
      <Field
          key={ (reverse) ? "Last" : "First"}
          label={ (reverse) ? "Last name" : "First name"}
      />
      <Field 
          key={ (reverse) ? "First" : "Last"}
          label={ (reverse) ? "First name" : "Last name"} 
      /> 
      {checkbox}
     </>
  ); 
}
function Field({ label }) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}