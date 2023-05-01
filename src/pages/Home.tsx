import {
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import courses from '../courses.json';

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

const Home = () => {
  return (
    <div>
      <SimpleGrid margin="50px 0" minChildWidth="300px" spacing="40px">
        {courses?.map((c: Course) => (
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
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Home;
