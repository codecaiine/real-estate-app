import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import { baseUrl, fetchApi} from '../utils/fetchApi';

const Banner =({purpose, title1, title2, descr1, descr2, buttonText, linkName, imageUrl})=> (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{descr1}<br />{descr2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white">
          <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({ propertyForSale, propertyForRent}) {
  console.log(propertyForSale, propertyForRent);

  return (
    <Box>
        <Banner 
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        descr1="Explore Apartments, Villas, Homes"
        descr2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
        />
        <Flex flexWrap="wrap">
          {propertyForRent.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
        <Banner 
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        descr1="Explore Apartments, Villas, Homes"
        descr2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
        />
          {propertyForSale.map((property) => <Property property={property} key={property.id} />)}
    </Box>
  )
}

export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for_sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for_sale&hitsPerPage=6`)

  return{
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    }
  }

}
