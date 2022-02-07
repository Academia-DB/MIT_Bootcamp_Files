function App() {
  const { Button, Container } = ReactBootstrap;
  const { useState, useEffect } = React;
  const [data, setData] = useState('');
  const [isError, setIsError] = useState(false);
  const [url, setUrl] = useState(
    "https://aws.random.cat/meow"
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const newImg = 10000;
  let timeout;
  console.log("Rendering App");
  
  useEffect(() => {   // Handles the LifeCycle Events
    console.log("Fetching data...");
    fetchData();
  }, []);
  
  const fetchData = async () => {
    setIsLoading(true);
    try {
      axios.get(url).then((result) => {
        setData(result.data);
      })
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
    timeout = setTimeout(resetTime, newImg);
  };

  const resetTime = () => {
    console.log("**********");
    clearTimeout(timeout);
    fetchData();
  };

  const cancel = () => {
    console.log("Canceled");
    clearTimeout(timeout);
  }
  
  return (
    <Container className="container">
      <form>
        {isError && <div>Something went wrong ...</div>}
        {isLoading ? (<div>Acquring...</div>) : (
          <img className="cats" src={data.file}/>
        )}
        <div className="buttons">
          <Button variant="outline-dark" size="lg" className="button" onClick={cancel, fetchData}>Next</Button>
        </div>
      </form>
    </Container>
  );
}
// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
