import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';


const Banner =()=> (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src="{imageUrl}" width={500} height={300} alt="banner" />

  </Flex>
)

export default function Home() {
  return (
    <div>
        <h1>Hello world</h1>
    </div>
  )
}
