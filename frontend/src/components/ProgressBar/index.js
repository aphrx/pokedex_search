import React from 'react'
import { ProgressContainer, ProgressDir, ProgressStats, ProgressName, ProgressMoved, ProgressBar, ProgressLoader } from './ProgressBarElements'

export default function Progress({skill, dur, percent}) {
    return (
        <>
            <ProgressContainer percent={percent}>
                <ProgressStats>
                    <ProgressName>{skill}</ProgressName>
                    <ProgressDir>{dur}</ProgressDir>
                </ProgressStats>
                <ProgressMoved percent={percent}>
                    <ProgressBar></ProgressBar>
                    <ProgressLoader></ProgressLoader>
                </ProgressMoved>
            </ProgressContainer>
        </>
    )
}
