import './App.css';
import { landingPageDTO, movieDTO } from './movies/movies.model';
import MoviesList from './movies/MoviesList';
import { useEffect, useState } from 'react'
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexGenres from './genres/IndexGenres';
function App() {
  const [movies, setMovies] = useState<landingPageDTO>({})

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Spider-Man',
            poster: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
          },
          {
            id: 2,
            title: 'Baby',
            poster: 'data:image/jpeg;base64,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'
          }
        ],
        upcomingReleases: [
          {
            id: 3,
            title: 'Luca Image',
            poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9288/1039288-h-3543a28994c9'
          },
          {
            id: 4,
            title: 'Soul Image',
            poster: 'https://img.etimg.com/thumb/msid-78569485,width-650,imgsize-219215,,resizemode-4,quality-100/untitled-2.jpg'
          }
        ]
      })
    }, 5000);
    return () => clearTimeout(timerId);
  });

  return (
    <BrowserRouter>
      <Menu />
      <div className='container'>
        <Switch>
          <Route exact path="/">
            <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters} />
            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomingReleases} />
          </Route>
          <Route path="/genres">
            <IndexGenres />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default App;
