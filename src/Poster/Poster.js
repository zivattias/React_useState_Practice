import './Poster.css';

export default function Poster({poster_url}) {

    return (
      <img
        className='poster-rounded poster-aqua'
        src={poster_url}
        alt="movies"
      />
    )
  }