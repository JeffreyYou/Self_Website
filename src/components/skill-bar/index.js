import React, { memo } from 'react'

import { ReactComponent as ReactLogo } from "../../assets/icons/react.svg"

import {
    SkillBarWrapper,
    Title,
    Content,
    NewTitle
} from './style'
const SkillBar = memo((props) => {
    const { title, content1, content2, content3, content4,  stack, underline } = props.data;
    const logo = props.svgComponent;
    // console.log(props);


    return (
        <SkillBarWrapper>
            <Title underline={underline}>
                <div className='svg-wrapper'>
                    <div className='svg'>
                        {logo}
                    </div>
                    {/* <ReactLogo className='svg'/> */}
                </div>
                <div className='title-wrapper'>
                    <span className='title' >{title}</span>
                    <div className='tech-stack'>{stack}</div>
                </div>
            </Title>

            <Content>
                <div className='skill-wrapper'>
                    <div className='skill'>
                        {content1}<br/><br/>
                        {content2}<br/><br/>
                        {content3}<br/><br/>
                        {content4}<br/><br/>
                    </div>
                </div>

            </Content>
        </SkillBarWrapper>
    )
})

export default SkillBar