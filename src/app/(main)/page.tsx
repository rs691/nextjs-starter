"use client";

import {
  Column,
  Heading,
  LetterFx,
  Text
} from "@once-ui-system/core";

export default function Home() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        {/* <Badge
          textVariant="code-default-s"
          border="neutral-alpha-medium"
          onBackground="neutral-medium"
          vertical="center"
          gap="16"
        >
          <Logo dark icon="/trademarks/wordmark-dark.svg" href="https://once-ui.com" size="xs" />
          <Logo light icon="/trademarks/wordmark-light.svg" href="https://once-ui.com" size="xs" />
          <Line vert background="neutral-alpha-strong" />
          <Text marginX="4">
            <LetterFx trigger="instant">An ecosystem, not a UI kit</LetterFx>
          </Text>
        </Badge> */}
        <Heading variant="display-strong-xl" marginTop="24">
         
            <Text marginX="4">
            <LetterFx trigger="instant"> Hello and welcome to my personal page!</LetterFx>
          </Text>
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="16"
        >
         My name is <LetterFx trigger="instant">Robert</LetterFx>, and I am a Software Engineer.
        </Text>
        {/* <Button
          id="docs"
          href="https://docs.once-ui.com/once-ui/quick-start"
          data-border="rounded"
          weight="default"
          prefixIcon="copy"
          arrowIcon
        >
          Explore docs
        </Button> */}
      </Column>
    </Column>
  );
}
