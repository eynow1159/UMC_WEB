import Card from './Card'

const Grid = ({ movies }) => {
    return (
      <div style={styles.grid}>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    );
};

const styles = {
    grid: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '1rem',
    
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    },
};

export default Grid