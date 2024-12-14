import './App.css'
import { useState } from 'react';
import CustomButton from "./components/custom-button.jsx";

function App() {
    const nickname = '이노'
    const taste = '요거트'
    const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE']

    const [cnt1, setCnt1] = useState(0)
    const [cnt2, setCnt2] = useState(0)
    
    
    const handleIncreaseNumber1 = () => {
        setCnt1(cnt1+1);
    }
    
    const handleIncreaseNumber2 = () => {
        setCnt2(cnt2 => cnt2+1);
        setCnt2(cnt2 => cnt2+1);
    }

    const [person, setPerson] = useState({
        name: "장예원",
        age: 23,
        nickname2: "이노"
    });
    
    const newPerson = {...person}; // 얕은 복사
    newPerson.nickname = "야호";

    console.log(person.nickname); // 여전히 "매튜" 임을 확인할 수 있다.

    // 초기 상태로 '김용민', 26, '매튜'를 가진 person 객체를 초기값으로 생성합니다.
    const [person2, setPerson2] = useState({
        name3: "황무원",
        age3: 23,
        nickname3: "모니"
    });

    // city 값을 새로 추가하여 업데이트하는 함수
    const updateCity = () => {
        setPerson2(prevPerson => ({
        ...prevPerson,   // 이전 person 객체의 복사본 생성
        city: "서울"      // 새로 city 값을 추가하거나 업데이트
        }));
    };

    // age 값을 1씩 증가시키는 함수
    const increaseAge = () => {
        setPerson2(prevPerson => ({
        ...prevPerson,   // 이전 person 객체의 복사본을 생성합니다.
        age3: prevPerson.age + 1  // 다른 key의 value는 유지, age 값을 기존 값에서 1 증가
        }));
    };

    return (
        <>


            <div>
                <h1>이름: {person2.name3}</h1>
                <h2>나이: {person2.age3}</h2>
                <h3>닉네임: {person2.nickname3}</h3>
                {person2.city && <h4>도시: {person2.city}</h4>}
                <button onClick={updateCity}>도시 추가</button>
                <button onClick={increaseAge}>나이 증가</button>
            </div>
            
            <h1>{cnt1}</h1>
            <button onClick={handleIncreaseNumber1}>1 증가</button>

            <h1>{cnt2}</h1>
            <button onClick={handleIncreaseNumber2}>2 증가</button>
            
            <CustomButton/>
        
            <p>소괄호 return 생략</p>
            <ul>
                {array.map((yaho, idx) => (
                <li key={idx}>{yaho}</li>
                ))}
            </ul>
            <p>중괄호 return</p>
            <ul>
                {array.map((yaho, idx) => {
                return <li key={idx}>{yaho}</li>
                })}
            </ul>

            <strong className='school'>서경대학교</strong>
            <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>{nickname}/장예원</p>
            <h1>{`${nickname}는 ${taste} 아이스크림을 좋아합니다.`}</h1>

             {/* HTML 방식 (케밥 표기법)
            <div style="background-color: purple">
                케밥 고구마
            </div> */}

            {/* JSX 방식 (카멜 표기법) */}
            <div style={{backgroundColor: 'skyblue'}}>
                카멜 고구마
            </div>

            <strong className='school'>서경대학교</strong>
            <p style={{color: 'purple', fontWeight:'bold', fontSize:'3rem'}}>이노/장예원</p>
        </>
    )
}

export default App