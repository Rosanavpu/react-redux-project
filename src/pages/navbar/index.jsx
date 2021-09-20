import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoGames } from '../../store/actions';
import { useLocation } from 'react-router-dom';
import VideoGames from '../../pages/videoGames/';
import NavbarComponent from './components';
import Loader from '../../shared/loader/';
import PageNotFound from '../../shared/pageNotFound';

const Navbar = () => {
  const [searchVideoGame, setSearchVideoGame] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideoGames());
  }, []);
  const { isLoadingVideoGames, videoGames, isLoadingVideogameDetail, isErrorVideogameDetail } =
    useSelector(s => s.videogamesReducers);
  const location = useLocation();
  const filteredVideoGames = useMemo(
    () =>
      videoGames &&
      videoGames.filter(elem => {
        let lowerName = elem.name.toLowerCase();
        return lowerName.includes(searchVideoGame);
      }),
    [searchVideoGame, videoGames]
  );

  const handleChange = e => {
    const newSearch = e.target?.value?.toLowerCase() ?? '';
    handleSearch(newSearch);
  };
  const handleSearch = newSearch => {
    setSearchVideoGame(newSearch);
  };

  return (
    <>
      {isErrorVideogameDetail && <PageNotFound />}
      <NavbarComponent
        handleChange={handleChange}
        value={searchVideoGame}
        searchInput={location.pathname === '/'}
      />
      {(isLoadingVideoGames || isLoadingVideogameDetail) && <Loader loading />}
      {location.pathname === '/' && (
        <VideoGames videoGames={filteredVideoGames} searchVideoGame={searchVideoGame} />
      )}
    </>
  );
};

export default Navbar;
