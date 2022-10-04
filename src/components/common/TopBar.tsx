import {
  Box,
  Center,
  Heading,
  HStack,
  Icon,
  IconButton,
  Popover,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface TopBarProps {
  title: string;
  description: string;
  renderRightElement?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  title,
  description,
  renderRightElement,
}) => {
  const navigation = useNavigation();
  return (
    <Box>
      <HStack
        space="1"
        justifyContent="space-between"
        alignItems="center"
        p="5"
        borderColor="gray.700"
        borderBottomWidth={0.5}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon as={FontAwesome} name="angle-left" size="8" />
        </TouchableOpacity>
        <Center>
          <Heading size="md">{title}</Heading>
        </Center>
        {!renderRightElement ? (
          <Popover
            trigger={triggerProps => {
              return (
                <IconButton
                  {...triggerProps}
                  icon={<Icon as={AntDesign} name="infocirlceo" />}
                />
              );
            }}>
            <Popover.Content accessibilityLabel="Info" w="56">
              <Popover.Arrow />
              <Popover.Body>{description}</Popover.Body>
            </Popover.Content>
          </Popover>
        ) : (
          renderRightElement()
        )}
      </HStack>
    </Box>
  );
};

export default TopBar;
