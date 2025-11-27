type JoinGameInputType = {
  onClick: () => void;
  onSubmit: () => void;
}

const JoinGameInput = ({ onClick, onSubmit }: JoinGameInputType) => {
  return (
    <form className="flex items-center" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter Game Code"
        className="border p-2 rounded mr-2"
      />
      <button type='submit' >
        Join!
      </button>
    </form>
  );
};

export default JoinGameInput;