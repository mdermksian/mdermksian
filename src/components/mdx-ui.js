import React from 'react'
import {css} from '@emotion/react'

const styles = {
    link: css`
        color: blue;
    `,
    video: css`
        display: block;
        margin: 0 auto;
    `
}

export const PostLink = (props) => {
    const {children, ...otherProps} = props
    return (<a {...otherProps} css={styles.link}>{children}</a>)
}

export const Video = ({src, title}) => (
    <iframe
        css={styles.video}
        width="560"
        height="315"
        src={src}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title={title}
    ></iframe>
)