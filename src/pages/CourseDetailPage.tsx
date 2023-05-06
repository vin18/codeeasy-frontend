import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { FaCheckCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const features = [
  'lifetime access',
  '140 lessons',
  'exercises',
  'downloadable',
  'subtitles',
  'access on mobile/tv',
  'certificate',
];

const CourseDetailPage = () => {
  let { courseId } = useParams();

  const {
    isLoading,
    error,
    data: course,
  } = useQuery({
    queryKey: ['courses', courseId],
    queryFn: () =>
      fetch(`http://localhost:5000/api/v1/courses/${courseId}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const { _id, name, heading, description, level, duration } = course;

  return (
    <div>
      <Box bg="#8244FF" w="100%" p={24} color="white" textAlign="center">
        <Heading as="h2" size="xl" noOfLines={1}>
          {name}
        </Heading>
        <Text fontSize="xl" width="400px" margin="20px auto 15px auto">
          {heading}
        </Text>
        <Button colorScheme="pink">Enroll in Course</Button>
      </Box>

      <Flex marginTop="100px">
        <Box width="50%">
          <Heading as="h3" size="md" marginBottom="15px" noOfLines={1}>
            {name}
          </Heading>

          <List spacing={3}>
            {description.split('\n').map((text: string) => (
              <ListItem key={text}>{text}</ListItem>
            ))}
          </List>

          <Button bg="#8244FF" color="white" marginTop="20px">
            Enroll Now
          </Button>
        </Box>

        <Box width="50%" marginLeft="300px">
          <Box
            bg="#8244FF"
            height="20px"
            width="100%"
            rounded="2px"
            marginBottom="30px"
          ></Box>

          {features.map((feature) => (
            <Flex
              key={feature}
              fontSize="18px"
              marginTop="12px"
              alignItems="center"
              marginLeft="10px"
            >
              <FaCheckCircle fontSize="24px" color="gray" />
              <Text marginLeft="10px">{feature.toUpperCase()}</Text>
            </Flex>
          ))}

          <Flex
            fontSize="18px"
            marginTop="12px"
            alignItems="center"
            marginLeft="10px"
          >
            <FaCheckCircle fontSize="24px" color="gray" />
            <Text marginLeft="10px">{level.toUpperCase()}</Text>
          </Flex>

          <Flex
            fontSize="18px"
            marginTop="12px"
            alignItems="center"
            marginLeft="10px"
          >
            <FaCheckCircle fontSize="24px" color="gray" />
            <Text marginLeft="10px">{duration} HOURS OF VIDEO</Text>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default CourseDetailPage;
