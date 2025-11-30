type JoinGameInputType = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const JoinGameInput = ({ onSubmit }: JoinGameInputType) => {
  return (
    <form className="flex items-center" onSubmit={onSubmit}>
      <input
        type="text"
        name="gameId"
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