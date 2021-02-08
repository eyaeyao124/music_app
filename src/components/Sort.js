import { Button, ButtonGroup,InputGroup } from 'react-bootstrap';

function Sort({sortFunc, descendingFunc}) {
    return (
        <div className="button-container">
            <ButtonGroup size="lg" className="mb-2">
                <Button variant="secondary" value="name" onClick={(e)=>sortFunc(e.target.value)}>이름</Button>
                <Button variant="secondary" value="release" onClick={(e)=>sortFunc(e.target.value)}>출시일</Button>
                <Button variant="secondary" value="rank" onClick={(e)=>sortFunc(e.target.value)} >순위</Button>
                {/* <Button variant="secondary" value="reset" onClick={(e)=>sortFunc(e.target.value)} >초기화</Button> */}
                <InputGroup.Prepend>
                    <InputGroup.Text id="btnGroupAddon">내림순 정렬</InputGroup.Text>
                </InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="낮은순 정렬 버튼" value="down" variant="secondary" onChange={(e)=>descendingFunc(e.target.checked)}/>
            </ButtonGroup>
        </div>
    )
}

export default Sort;