const ConditionalRendering = () => {
  isLoggedIn: boolean = true;

  return (
    <>
      <div>
        {isLoggedIn ? <h1>Welcome Tushar </h1> : <h1> Please Login </h1>}
      </div>

      <div> {isLoggedIn && <h1>Hey Tushar</h1>} </div>
    </>
  );
};

export default ConditionalRendering;
