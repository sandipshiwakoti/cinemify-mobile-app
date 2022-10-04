import {Box, Input, SearchIcon} from 'native-base';
import React from 'react';

const SearchBar = (props: any) => {
  return (
    <Box {...props}>
      <Input
        variant="rounded"
        placeholder="Search movies or tv shows"
        fontSize="md"
        pl="5"
        fontWeight="bold"
        InputRightElement={<SearchIcon size={6} pr="10" />}
      />
    </Box>
  );
};

export default SearchBar;
