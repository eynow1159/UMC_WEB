// props를 전달 받고, 그 이후에 구조 분해 할당하는 방법.

const List = (props) => {
    const {artistName, foodName} = props;

    return (
        // listStyle을 통해 제거 가능
        <>
            <li style={{listStyle: 'none'}}>
                {artistName}
            </li>
            <li>{foodName}</li>
        </>
)
}

export default List