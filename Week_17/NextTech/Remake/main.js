function App() {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch('./projects.json');
      const json = await response.json();
      setData(json);
      setLoaded(true);
    }
    getData();
  }, []);
  console.log('loaded:', loaded, 'data:', data);

  return (
    <>
      <div className="container">
        <div className="col-sm">
          {loaded &&
            data.projects.map((project, i) => (
              <Project key={i} data={project}/>
            ))}
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
