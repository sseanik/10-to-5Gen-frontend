import { Avatar, Group, rem, Text, UnstyledButton } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

import classes from './index.module.css';

export function NavProfile({ opened }: { opened: boolean }) {
  return (
    <UnstyledButton className={classes.user}>
      <Group justify="center">
        <Avatar
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          radius="xl"
        />

        {opened && (
          <>
            <div style={{ flex: 1 }}>
              <Text size="sm" fw={500}>
                Harriette Spoonlicker
              </Text>

              <Text c="dimmed" size="xs">
                hspoonlicker@outlook.com
              </Text>
            </div>

            <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
          </>
        )}
      </Group>
    </UnstyledButton>
  );
}