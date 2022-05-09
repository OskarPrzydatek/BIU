import React from "react";

export default function AddColorForm({ onNewColor = (f) => f }) {
  const txtTitle = React.useRef();
  const hexColor = React.useRef();

  const submit = (event) => {
    event.preventDefault();

    const title = txtTitle.current.value;
    const color = hexColor.current.value;

    console.log(title);
    console.log(color);

    onNewColor(title, color);

    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
      <button>ADD</button>
    </form>
  );
}
