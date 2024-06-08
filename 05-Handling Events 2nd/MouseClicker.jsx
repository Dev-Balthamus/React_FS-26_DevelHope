export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.currentTarget.name);
  }

  function handleImgClick(event) {
    event.stopPropagation();
    console.log(event.currentTarget.src);
  }

  return (
    <button name="one" onClick={handleButtonClick}>
      <img src="/Smile.png" height={32} width={32} alt="Smile!" onClick={handleImgClick} />
      Click me!
    </button>
  );
}
