import './App.css'

// 1. List Component를 Import
import List from './components/List'

function App() {

  const nickname = '이노'
  const name = '장예원'
  const likeWhat = '음악'

  const artists = ['Post Malone', 'Nothing But Thieves', 'Lany', 'ColdPlay', 'Cigarettes After Sex']

  return (
    <>
      <strong className='school'>서경대학교</strong>
      <p style={{color: 'blue', fontWeight: 'bold', fontSize:'3rem'}}> {nickname}/{name} </p>
      <h1>{ `${nickname}는 ${likeWhat}을 좋아합니다.`}</h1>
      <ul>
        {artists.map((artist, idx) => (
          // 2. <li key={idx}>{artist}</li> 를 List 컴포넌트 호출로 변경
          <List key={idx} artistName={artist} />
        ))}
      </ul>
    </>
  )
}

export default App
