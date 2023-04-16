import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

interface IProduct {
  _id: string;
  name: string;
  description: string;
  category: string;
  image: {
    public_id: string;
    url: string;
  };
  price: number;
  brand: string;
  averageRating: number;
  countInStock: number;
}

const Home = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:5000/api/v1/products').then((res) => res.json()),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <SimpleGrid margin="50px 0" minChildWidth="300px" spacing="40px">
        {data?.map((p: IProduct) => (
          <Card
            _hover={{ backgroundColor: 'gray.50', transition: 'all' }}
            cursor="pointer"
            maxW="md"
            key={p._id}
          >
            <CardBody>
              <Image src={p.image.url} alt={p.name} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{p.name}</Heading>
                <Flex justifyContent="space-between">
                  <Text color="blue.600" fontSize="xl">
                    ₹{p.price}
                  </Text>
                  <Text color="blue.600" fontSize="xl">
                    {p.brand}
                  </Text>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Home;
