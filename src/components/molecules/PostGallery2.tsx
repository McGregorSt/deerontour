import React from "react";
import styled from "styled-components";

const StyledPostGallery = styled.div`
    width: 70%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PostGallery = () => {
    return (
        <StyledPostGallery>
            PHOTO Gallery
        </StyledPostGallery>
    )
}

export default PostGallery