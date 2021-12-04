import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';


const Banner =()=> (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src="{imageUrl}" width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="medium">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{descr1}<br />{descr2}</Text>
      <Button></Button>
    </Box>
  </Flex>
)

export default function Home() {
  return (
    <div>
        <h1>Hello world</h1>
    </div>
  )
}
