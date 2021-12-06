import Link from 'next/link';
import Image from 'next/image';
import {Box, Flex, Text, Avatar} from '@chakra-ui/react';
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/goverified';
import millify from 'millify';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID}}) => (
     <Link href={`/property/${externalID}`} passHref>

     </Link>
);

export default Property;