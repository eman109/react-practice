import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import entries from "./data.js"
function App(){

  const entry=entries.map((data)=>{
    return (<Entry
            key={data.id}
            {...data}
          />)
  })

  return(
    <>
    <Header/>
    {entry}
    </>
  )

}
export default App

