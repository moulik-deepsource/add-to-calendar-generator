import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
  useColorMode,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";

type AppsType = {
  name: string;
  description?: string;
  icon: string;
  url: string;
};

const apps: AppsType[] = [
  {
    name: "Covid-19 Data",
    description: "Monitor global covid-19 stats",
    icon: "https://covid19.sznm.dev/covid-19-data.svg",
    url: "https://covid19.sznm.dev",
  },
  {
    name: "InstaDLD",
    description: "Instagram Post downloader. Support multipost download",
    icon: "https://instadld.sznm.dev/instadld.svg",
    url: "https://instadld.sznm.dev",
  },
  {
    name: "YTGet",
    description: "YouTube video and audio downloader",
    icon: "https://ytget.sznm.dev/ytget.svg",
    url: "https://ytget.sznm.dev",
  },
];

const AppMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const [isBiggerThanMobile] = useMediaQuery("(min-width: 480px)");

  return (
    <>
      <IconButton
        aria-label="app-menu"
        icon={<BiMenu />}
        onClick={onOpen}
        backgroundColor={colorMode === "light" ? "gray.50" : "gray.700"}
      />

      <Drawer
        placement={isBiggerThanMobile ? "right" : "top"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader>
            <Heading size="xs">More from sznm.dev</Heading>
          </DrawerHeader>

          <DrawerBody>
            {apps.map(({ name, icon, url, description }, index) => (
              <Link key={index} href={url} _hover={{ textDecoration: "none" }}>
                <Flex
                  marginY={4}
                  alignItems="center"
                  padding={2}
                  borderRadius={12}
                  _hover={{
                    backgroundColor:
                      colorMode === "light" ? "gray.200" : "gray.600",
                  }}
                >
                  <Image src={icon} width={12} />
                  <Box marginLeft={4}>
                    <Heading size="sm">{name}</Heading>
                    {description && <Text fontSize="xs">{description}</Text>}
                  </Box>
                </Flex>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppMenu;
