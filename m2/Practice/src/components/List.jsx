// 직접 props를 받는 부분에서 구조 분해 할당을 진행하는 방법.

const List = ({artistName, foodName}) => {
    return (
        <li>
            {artistName}
            {foodName}
        </li>
    )
}

export default List