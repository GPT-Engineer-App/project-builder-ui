import React, { useState } from "react";
import { Box, Flex, Heading, Text, Input, Button, Select, Menu, MenuButton, MenuList, MenuItem, Avatar, Icon, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import { FaChevronDown, FaPlus } from "react-icons/fa";

const projectTypes = ["Todo", "Personal Website", "Notes", "Band Website", "Chat", "Dashboard"];

const Index = () => {
  const [selectedType, setSelectedType] = useState("");

  const bg = useColorModeValue("gray.800", "gray.900");
  const color = useColorModeValue("white", "gray.200");

  return (
    <Box bg={bg} minH="100vh" color={color}>
      <Flex justify="space-between" align="center" p={4}>
        <Heading size="lg">Project Creator</Heading>
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />}>
            <Avatar size="sm" name="John Doe" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDk1MDU2N3ww&ixlib=rb-4.0.3&q=80&w=1080" mr={2} />
            John Doe
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={8} p={8}>
        <GridItem>
          <Heading size="md" mb={4}>
            Featured
          </Heading>
          {/* Add featured projects */}
        </GridItem>
        <GridItem>
          <Heading size="md" mb={4}>
            Latest
          </Heading>
          {/* Add latest projects */}
        </GridItem>
        <GridItem>
          <Heading size="md" mb={4}>
            My Projects
          </Heading>
          {/* Add user's projects */}
        </GridItem>
      </Grid>

      <Box p={8}>
        <Heading size="xl" mb={4}>
          What do you want to build?
        </Heading>
        <Flex mb={8}>
          <Input placeholder="Type or select a project type" value={selectedType} onChange={(e) => setSelectedType(e.target.value)} mr={4} />
          <Select placeholder="Select a project type" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </Flex>
        <Button colorScheme="blue" size="lg" rightIcon={<Icon as={FaPlus} />}>
          Create Project
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
