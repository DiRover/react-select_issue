import Select from 'react-select';

export const options = [
  { value: 'ocean', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', color: '#0052CC', isDisabled: true },
];

function App() {
  return (
    <div style={{display: 'grid', margin: '20px 700px'}}>
      <Select options={options}/>
    </div>
  );
}

export default App;
