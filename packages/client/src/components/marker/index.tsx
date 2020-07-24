import { parseToRgb, rgba } from 'polished';
import React, { useMemo } from 'react';
import { ActivityFragment } from 'src/generated/graphql';
import { styled } from 'src/styles';
import { Avatar } from 'src/components/avatar';
import { AvatarGroup } from 'src/components/avatar-group';

interface WrapperProps {
  isLight: boolean;
}

const Wrapper = styled.a<WrapperProps>`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 4px 5px;
  border-radius: 99px;
  color: ${({ theme, isLight }) =>
    isLight ? theme.foregroundDark : theme.foregroundReverse};

  &:hover {
    text-decoration: none;
  }
`;

const AvatarContainer = styled.div`
  flex-shrink: 0;
  margin-right: 4px;
`;

const Meta = styled.div`
  min-width: 0;
`;

const Title = styled.h4`
  display: block;
  margin: 0;
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Name = styled.span`
  display: block;
  overflow: hidden;
  opacity: 0.8;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface MarkerProps {
  activity: ActivityFragment;
  x?: number;
  y?: number;
  width?: number;
}

export const Marker = (props: MarkerProps) => {
  const { activity, width, x, y } = props;
  const { performers, team } = activity;
  const performer = performers[0];

  const name = team
    ? team.name
    : performers.map(performer => performer.name).join(', ');

  const isLight = useMemo(() => {
    // Calc color brightness difference
    const { red, green, blue } = parseToRgb(performer.color);

    return red * 0.299 + green * 0.587 + blue * 0.114 > 186;
  }, [performer.color]);

  return (
    <Wrapper
      tabIndex={0}
      href={activity.url}
      title={activity.name}
      target="_blank"
      rel="noreferrer"
      isLight={isLight}
      style={{
        width: `${width}px`,
        backgroundColor: performer.color,
        boxShadow: `0 2px 6px ${rgba(performer.color, 0.48)}`,
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <AvatarContainer>
        {performers.length >= 2 ? (
          <AvatarGroup
            appearance="pie"
            performers={performers}
            size={40}
            gap={-28}
          />
        ) : (
          <Avatar performer={performer} size={40} />
        )}
      </AvatarContainer>

      <Meta>
        <Title>{activity.name}</Title>
        <Name>{name}</Name>
      </Meta>
    </Wrapper>
  );
};
