import {
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

interface Course {
  _id: string;
  name: string;
  heading: string;
  description: string;
  image: string;
  instructor: string;
  instructor_description: string;
  price: number;
  prerequisites: string;
  level: string;
  duration: number;
}

const HomePage = () => {
  const {
    isLoading,
    error,
    data: courses,
  } = useQuery({
    queryKey: ['courses'],
    queryFn: () =>
      fetch('http://localhost:5000/api/v1/courses').then((res) => res.json()),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <SimpleGrid margin="50px 0" minChildWidth="300px" spacing="40px">
        {courses?.map((c: Course) => (
          // <Link to={`/courses/${c._id}`}>
          <Card
            _hover={{
              transform: 'scale(1.02)',
            }}
            transition="all .3s"
            cursor="pointer"
            maxW="md"
            key={c._id}
            role="group"
          >
            <Image
              src={c.image}
              alt={c.name}
              borderTopRadius="lg"
              width="400px"
              height="210px"
            />
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading _groupHover={{ color: '#8244FF' }} size="md">
                  {c.name}
                </Heading>
                <Text>{c.description.substring(0, 100)}...</Text>
              </Stack>
            </CardBody>
          </Card>
          // </Link>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default HomePage;
