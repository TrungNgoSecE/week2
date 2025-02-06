import { useState } from 'react';

export default function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div>
        <h1>Show Message</h1>
      <button onClick={() => setShow(!show)}>
         {/* Change the button text depending on the value of 'show' */}
        {show ? "Hide Message" : "Show Message"}
      </button>
       {/* If 'show' is true, the message is displayed; otherwise, it's hidden */}
      {show && <p>This is a notification!</p>}
    </div>
  );
}
