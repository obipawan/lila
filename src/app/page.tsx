"use client";

import { Text, Stack } from "@tamagui/core";

export default function Home() {
  return (
    <Stack flex={1} justifyContent="center" alignItems="center" backgroundColor={'$neutral2'}>
      <Text fontFamily={'$body'} fontWeight={'$8'} fontSize={'$10'} color={'$neutral5'}>Hello World</Text>
    </Stack>
  );
}
