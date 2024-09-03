import React from 'react';

function Hello({color, name, isSpecial}){
    return <div style={{color}}>
        {isSpecial ? <b>*</b> : null}
        {/*isSpecial값이 true면 <b>*</b> 그렇지 않다면 null*/}
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
        </div>
};

Hello.defaultProps = {
    name : '이름없음'
}

export default Hello;
