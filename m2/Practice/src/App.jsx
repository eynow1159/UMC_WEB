import './App.css'
import List from './components/List'

function App() {

  const nickname = '이노'
  const name = '장예원'
  const likeWhat = ['음악', '음식']

  const artists = ['Post Malone', 'Nothing But Thieves', 'Lany', 'ColdPlay', 'Cigarettes After Sex']
  const foods = ['곱창', '불족발', '아인슈페너', '콜드브루']

  return (
    <>
      <strong className='school'>서경대학교</strong>
      <p style={{color: 'blue', fontWeight: 'bold', fontSize:'3rem'}}> {nickname}/{name} </p>
      <h1>{ `${nickname}는 ${likeWhat}을 좋아합니다.`}</h1>
      <ul>
        {artists.map((artist, idx) => (
          <List key={idx} artistName={artist} />
        ))}
      </ul>
      <ul>
        {foods.map((food, idx) => (
          <List key={idx} foodName={food} />
        ))}
      </ul>
    </>
  )
}

export default App
