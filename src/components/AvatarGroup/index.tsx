import { Avatar, Tooltip } from '@mantine/core';

import { COLOURS } from '@/assets/data/colours';

export default function AvatarGroup({ names }: { names: string[] }) {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        {names.map((name, index) => (
          <Tooltip label={name} withArrow key={`${name}-${index}`}>
            <Avatar radius="xl" color={COLOURS[Math.floor(name[0].charCodeAt(0) % COLOURS.length)]}>
              {name[0]}
            </Avatar>
          </Tooltip>
        ))}
        {/* <Tooltip
          withArrow
          label={
            <>
              {plusNames.map((tooltipName) => (
                <div key={tooltipName}>{tooltipName}</div>
              ))}
            </>
          }
        >
          <Avatar radius="xl">+{plusNumber}</Avatar>
        </Tooltip> */}
      </Avatar.Group>
    </Tooltip.Group>
  );
}
