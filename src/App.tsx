import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { movieDTO } from './movies/movies.model';
function App() {
  const testMovie:movieDTO={
    id:1,
    title:'Spider-Man: Far From Home',
    poster: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
  }
  return (
  <>
<IndividualMovie  {...testMovie}/>
  </>
  )
}

export default App;
