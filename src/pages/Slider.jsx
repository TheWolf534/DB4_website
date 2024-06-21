




import '.Slider.css'

function Slider_({type})  {
    const [value, setValue] = useState(30);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Slider aria-label={type} value={value} onChange={handleChange} min={10} max={200} />
        </Stack>
        <h1>
          {value}
        </h1>
      </Box>
    );
  };
  
  export default App;