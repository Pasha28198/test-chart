import { Container } from './styles';
import { Badge, Stack, Text, Flex } from '@chakra-ui/react';

const bageStyles = {
  p: '0 10px',
  color: '#fffff',
  fontSize: '12px',
  width: 'fit-content',
  colorScheme: 'gray',
};
export const CustomizedTooltip = ({ active, payload, label }) => {
  return (
    <Container>
      <Stack spacing="10px" direction="column">
        <Badge {...bageStyles} variant="solid" colorScheme="red">
          Organic
        </Badge>
        <Text textAlign="left" fontSize="12px">
          January 04, 2022 11:45am UTC
        </Text>
        <Text textTransform="uppercase" textAlign="left" fontSize="12px">
          VISITORS
        </Text>
        <Text lineHeight="31px" fontWeight={500} textAlign="left" fontSize="38px">
          5,189
        </Text>
      </Stack>
      <Stack>
        <Text lineHeight="22px" fontSize="12px" textAlign="left" textTransform="uppercase">
          TOP GOOGLE KEYWORDS
        </Text>
        <Flex flexWrap="wrap" gap="4px">
          <Badge {...bageStyles}>DEFI</Badge>
          <Badge {...bageStyles}>ethereum merge</Badge>
          <Badge {...bageStyles}>nft market</Badge>
          <Badge {...bageStyles}>unbanked</Badge>
          <Badge {...bageStyles}>NFT MARKETPLaces 2022</Badge>
          <Badge {...bageStyles}>buy nft</Badge>
          <Badge {...bageStyles}>crypto token</Badge>
          <Badge {...bageStyles}>SOCIAL MEDIA LEADERS</Badge>
        </Flex>
      </Stack>
    </Container>
  );
};
