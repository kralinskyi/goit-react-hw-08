const Header = ({ showModal }) => {
  return (
    <div
      style={{
        width: '100%',
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'gray',
      }}
    >
      <h1>Counter</h1>
      <button
        type="button"
        style={{
          width: 150,
          height: 40,
          backgroundColor: 'yellow',
          cursor: 'pointer',
        }}
        onClick={showModal}
      >
        Open Modal
      </button>
    </div>
  );
};

export default Header;
