import React, { useState } from 'react'
import {InputGroup,FormControl,Button} from 'react-bootstrap'

function Search({searchFunc}) {
    const [text, setText] = useState("")

    const textHandler = (e) => {
        setText(e.currentTarget.value)
    }
    const onSubmitText = (e) => {
        e.preventDefault();
        searchFunc(text)
    }

    return (
        <div>
            <form onSubmit={onSubmitText}>
            <InputGroup className="mb-3" size="lg">
                <FormControl
                placeholder="앨범명을 적어주세요"
                aria-label="앨범명을 적어주세요"
                aria-describedby="basic-addon2"
                value={text} onChange={textHandler}
                />
                <InputGroup.Append>
                <Button variant="secondary">검색</Button>
                </InputGroup.Append>
            </InputGroup>
            </form>
        </div>
    )
}

export default Search;