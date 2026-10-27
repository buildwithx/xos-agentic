import { Box, Text, useInput } from "ink";

export function App() {
  useInput((input, key) => {
    if (input === "q" || (key.ctrl && input === "c")) {
      process.exit(0);
    }
  });

  return (
    <Box flexDirection="column" padding={1}>
      <Text color="blue" bold>
        ╭───────────────────────────────────────────╮
      </Text>
      <Text color="blue" bold>
        │ X-Workspace · XOS AI Development Platform │
      </Text>
      <Text color="blue" bold>
        ╰───────────────────────────────────────────╯
      </Text>

      <Box marginTop={1}>
        <Text>Enter q to Quit</Text>
      </Box>

      <Box marginTop={1}>
        <Text color="gray">
          Local-first · Human approval by default · Agent execution not yet
          enabled
        </Text>
      </Box>
    </Box>
  );
}
