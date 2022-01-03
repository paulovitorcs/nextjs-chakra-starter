import { useBreakpointValue } from '@chakra-ui/react';

export const useResponsiveness = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return {
    isMobile,
  };
};
