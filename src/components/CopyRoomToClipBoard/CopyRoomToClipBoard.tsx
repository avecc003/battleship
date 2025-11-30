const CopyRoomToClipBoard = () => {
  const roomId = new URLSearchParams(window.location.search).get("gameId");

  const copyToClipboard = () => {
    if (roomId) {
      navigator.clipboard.writeText(roomId)
        .then(() => {
          alert("Room ID copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy room ID: ", err);
        });
    }
  };

  return (
    <button onClick={copyToClipboard}>Copy Room ID</button>
  );
};

export default CopyRoomToClipBoard;