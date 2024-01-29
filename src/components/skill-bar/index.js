import React, { memo } from 'react'

import { ReactComponent as ReactLogo } from "../../assets/icons/react.svg"

import {
    SkillBarWrapper,
    Title,
    Content,
    NewTitle,
    SkillTitle
} from './style'
const SkillBar = memo((props) => {
    const { title, content1, content2, content3, content4, content5, stack, underline, title1, title2, title3, title4, title5 } = props.data;
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
                        <div className='skill-inner'>
                            <SkillTitle>{title1}: </SkillTitle>{content1}<br/><br/>
                            <SkillTitle>{title2}: </SkillTitle>{content2}<br/><br/>
                            <SkillTitle>{title3}: </SkillTitle>{content3}<br/><br/>
                            <SkillTitle>{title4}: </SkillTitle>{content4}<br/><br/>
                            <SkillTitle>{title5}: </SkillTitle>{content5}<br/><br/>
                        </div>
                    </div>
                </div>

            </Content>
        </SkillBarWrapper>
    )
})

export default SkillBar