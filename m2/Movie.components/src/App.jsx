import { MOVIES } from './assets/movies.js'
import Grid from './components/Grid'

function App() {
  const movies = MOVIES.results;
  
  return (
    <>
      <Grid movies={movies} />
    </>
  )
}

export default App
