import { Box, Text, Stack } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'

type Props = {
  user_id: number
  user_name: string
} & BoxProps

export const UserCard: React.FC<Props> = ({
  user_id,
  user_name,
  maxW = 350,
  p = 16,
  borderRadius = 8,
  border = '1px solid #333',
  ...rest
}) => {
  return (
    <Box
      maxW={maxW}
      p={p}
      borderRadius={borderRadius}
      border={border}
      {...rest}
    >
      <Stack spacing={8}>
        <Text as='span'>User ID : {user_id}</Text>
        <Text as='span'>User Name : {user_name}</Text>
      </Stack>
    </Box>
  )
}
