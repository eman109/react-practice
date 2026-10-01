import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import entries from "./data.js"
function App(){

  const entry=entries.map((data)=>{
    return (<Entry
            img={data.img}
            title={data.title}
            country={data.country}
            googleMaps={data.googleMapsLink}
            dates={data.dates}
            text={data.text}
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

