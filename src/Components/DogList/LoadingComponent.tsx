import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

export default function Loading() {
  return (
    <>
    <Stack>
        <StyledStack spacing={1} direction="row">
                <StyledSkeleton variant="circular" width={200} height={200} />
                <StyledSkeleton variant="circular" width={200} height={200} />
                <StyledSkeleton variant="circular" width={200} height={200} />
                <StyledSkeleton variant="circular" width={200} height={200} />
                <StyledSkeleton variant="circular" width={200} height={200} />
        </StyledStack>
        <StyledStack spacing={1} direction="row">
            <TextSkeleton variant="rounded" width={210} height={60} />
            <TextSkeleton variant="rounded" width={210} height={60} />
            <TextSkeleton variant="rounded" width={210} height={60} />
            <TextSkeleton variant="rounded" width={210} height={60} />
            <TextSkeleton variant="rounded" width={210} height={60} />
        </StyledStack>
    </Stack>
    <Stack>
        <StyledStack spacing={5} direction="row">
                <StyledSkeleton variant="circular" width={200} height={200} animation="wave"/>
                <StyledSkeleton variant="circular" width={200} height={200} animation="wave"/>
                <StyledSkeleton variant="circular" width={200} height={200} animation="wave"/>
                <StyledSkeleton variant="circular" width={200} height={200} animation="wave"/>
                <StyledSkeleton variant="circular" width={200} height={200} animation="wave"/>
        </StyledStack>
        <StyledStack spacing={5} direction="row">
            <TextSkeleton variant="rounded" width={210} height={60} animation="wave"/>
            <TextSkeleton variant="rounded" width={210} height={60} animation="wave"/>
            <TextSkeleton variant="rounded" width={210} height={60} animation="wave"/>
            <TextSkeleton variant="rounded" width={210} height={60} animation="wave"/>
            <TextSkeleton variant="rounded" width={210} height={60} animation="wave"/>
        </StyledStack>
    </Stack>    
    </>    
  );
}

const StyledStack = styled(Stack)`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  margin: 16px;
  flex: 1 0 18%;
`;

const StyledSkeleton = styled(Skeleton)`

`
const TextSkeleton = styled(Skeleton)`
`
