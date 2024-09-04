import React , {useState, useRef}from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();

    const {name, nickname} = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const {value, name} = e.target; //우선 e.target 에서 name과 value를 추출
        setInputs({
            ...inputs, // 스프레드 연산자, 기존의 input 객체 복사
            [name]: value //name 키를 가진 값을 value로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus(); // useRef를 사용하여 Ref 객체를 만들고, 선택하려는 DOM에 ref값으로 설정 .current값은 원하는 DOM을 가리킴ㅂ
    };

    return (
        <div>
            <input name="name" 
            placeholder="이름" 
            onChange={onChange} 
            value = {name}
            ref = {nameInput}
            />
            <input 
            name ="nickname" 
            placeholder="닉네임" 
            onChange={onChange} 
            value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;
