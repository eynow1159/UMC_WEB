import './App.css'

function App() {

  const nickname = '이노'
  const name = '장예원'
  const likeWhat = '음악'

  const artists = ['Postmalone', 'Nothing But Thieves', 'Lany', 'ColdPlay', 'Cigarettes After Sex']

  return (
    <>
      <strong className='school'>서경대학교</strong>
      <p style={{color: 'blue', fontWeight: 'bold', fontSize:'3rem'}}> {nickname}/{name} </p>
      <h1>{ `${nickname}는 ${likeWhat}을 좋아합니다.`}</h1>
      <ul>
        {artists.map((artist, idx) => {
          return <li key={idx}>{artist}</li>
        })}
      </ul>
    </>
  )
}

export default App
