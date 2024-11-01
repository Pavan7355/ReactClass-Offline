import React, { useRef, useEffect } from 'react';
const FocusInput = () => {
const inputRef = useRef(null);
useEffect(() => {
// Focus the input element when the component mounts
inputRef.current.focus();
}, []);
return (
<div>
<h2>Focus Input</h2>
<input ref={inputRef} type="text" />
</div>
);
};
export default FocusInput;