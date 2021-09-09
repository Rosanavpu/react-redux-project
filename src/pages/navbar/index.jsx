import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoGames } from '../../store/actions';
import { useLocation } from 'react-router-dom';
import VideoGames from '../../pages/videoGames/';
import NavbarComponent from './components';
import Loader from '../../shared/loader/';

const Navbar = () => {
  const [searchVideoGame, setSearchVideoGame] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideoGames());
  }, []);
  const { isLoadingVideoGames, videoGames, isLoadingVideogameDetail } = useSelector(
    s => s.videogamesReducers
  );
  console.log(isLoadingVideogameDetail, 'dfghjhgfdesdfghgfdsa');
  const location = useLocation();
  const currentPath = location.pathname;
  const filteredVideoGames = useMemo(() => {
    return (
      videoGames &&
      videoGames.filter(elem => {
        let lowerName = elem.name.toLowerCase();
        return lowerName.includes(searchVideoGame);
      })
    );
  }, [searchVideoGame, videoGames]);

  const handleChange = e => {
    const newSearch = e.target?.value?.toLowerCase() ?? '';
    handleSearch(newSearch);
  };
  const handleSearch = newSearch => {
    setSearchVideoGame(newSearch);
  };

  return (
    <>
      <NavbarComponent
        handleChange={handleChange}
        value={searchVideoGame}
        searchInput={currentPath.includes('/videoGame/')}
      />
      {(isLoadingVideoGames || isLoadingVideogameDetail) && <Loader loading />}
      <VideoGames videoGames={filteredVideoGames} />
    </>
  );
};

export default Navbar;
