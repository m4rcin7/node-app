export default function Navbar() {
  return (
    <Box
      as="nav"
      bg="teal.500"
      color="white"
      p={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box fontSize="xl" fontWeight="bold">
        MyApp
      </Box>
      <Box>
        <Button colorScheme="teal" variant="outline" mr={4}>
          Home
        </Button>
        <Button colorScheme="teal" variant="outline">
          Create Product
        </Button>
      </Box>
    </Box>
  );
}
