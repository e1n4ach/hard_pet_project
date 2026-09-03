import styled from 'styled-components'

export const Skeleton = () => {
    return (
        <StyledSkeleton />
    )
}

const StyledSkeleton = styled.div`
  width: 100%;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 6px;
`