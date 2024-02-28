import {useState, useTransition} from 'react'
import './App.css';
import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

function App() {
  const data = ['사과','배','오렌지','바나나','딸기','천례향','귤','자몽','수박','키위','아보카도','참외']
  const allData = Array(5000).fill([...data]);
  const [text,setText] = useState('')
  const [filterText,setFilterText] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleChange = (e) => {
    setText(e.target.value)

    startTransition(() => {
      setFilterText(e.target.value)
    })
  }
  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      {text}
      {isPending ? <p>로딩즁..</p> : <SearchBox data={allData} text={filterText}/>}

    </div>
  );
}

export default App;
