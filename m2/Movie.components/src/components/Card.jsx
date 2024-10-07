import './Card.css'

const Card = ({ movie }) => {
    return (
        <div style={styles.card} className="card">
            <div style={styles.posterContainer} className="poster-container">
                <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                style={styles.poster}
                className="poster"
                />
            </div>
            <div style={styles.info} className="info">
                <p style={styles.title} className="title">{movie.title}</p>
                <p style={styles.vote} className="vote">Rating: {movie.vote_average}</p>
            </div>
        </div>
    );
};

const styles = {
    card: {
        backgroundColor: '#222',
        borderRadius: '8px',
        overflow: 'hidden',
        textAlign: 'center',
        color: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',

        position: 'relative',
        transition: 'transform 0.3s',
    },
    posterContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '10px',
    },
    poster: {
      width: '100%',
      height: 'auto',
      transition: 'transform 0.3s ease-in-out',
    },
    info: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0,
      transition: 'opacity 0.3s ease-in-out',
      borderRadius: '10px',
    },
    title: {
      padding: '10px',
      fontSize: '1em',
    },
    vote: {
      padding: '5px',
      fontSize: '0.9em',
      color: '#ccc',
    },
};

export default Card