// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { useTimetable } from 'src/hooks/use-timetable';
// import { LoadingIndicator } from 'src/components/loading-indicator';
// import { Feed } from './feed';

// export const Timetable = () => {
//   const {
//     activities,
//     onLoadNext,
//     onLoadPrevious,
//     loading,
//     hasNextPage,
//     hasPreviousPage,
//   } = useTimetable();

//   const { t } = useTranslation();

//   // Show loading indicator only in the 1st rendering
//   if (loading && !activities) {
//     return (
//       <LoadingIndicator>
//         {t('timetable.loading', { defaultValue: 'Loading Timetable...' })}
//       </LoadingIndicator>
//     );
//   }

//   if (!activities || !activities.length) {
//     return (
//       <span>
//         {t('timetable.not_found', { defaultValue: 'No activities found' })}
//       </span>
//     );
//   }

//   return (
//     <Feed
//       activities={activities}
//       onLoadNext={onLoadNext}
//       onLoadPrevious={onLoadPrevious}
//       hasNextPage={hasNextPage}
//       hasPreviousPage={hasPreviousPage}
//       loading={loading}
//     />
//   );
// };

import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { styled } from 'src/styles';
import { borderGap, sidebarWidth } from 'src/styles/constants';
import isMobile from 'ismobilejs';
import { useNow } from 'src/hooks/use-now';
import { Event } from '../../../../shared/entities/event';
import { Background } from './background';
import { Feed } from './feed';
import { Placeholder } from './placeholder';

export interface TimetableProps {
  events: Event[];
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: 0;
  overflow-x: scroll;
  overflow-y: hidden; /* fixme */
  -webkit-overflow-scrolling: touch;

  @media screen and (min-width: 700px) {
    width: calc(100% - ${sidebarWidth}px);
    margin-left: ${sidebarWidth}px;
  }
`;

export const Timetable = (props: TimetableProps) => {
  const { events } = props;
  const { now } = useNow(1000 * 60);
  const ref = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (!ref.current || !e.deltaY) return;
    ref.current.scrollBy({ left: e.deltaY });
  }, []);

  const startDate = useMemo(
    () =>
      events.reduce<Dayjs | undefined>((result, event) => {
        const date = dayjs(event.start_date);
        if (!result || date.isBefore(result)) return date;
        return result;
      }, undefined),
    [events],
  );

  const endDate = useMemo(
    () =>
      events.reduce<Dayjs | undefined>((result, event) => {
        const date = dayjs(event.end_date);
        if (!result || date.isAfter(result)) return date;
        return result;
      }, undefined),
    [events],
  );

  useEffect(() => {
    if (!ref.current || !startDate) return;

    const fromNowToStart = now.diff(startDate, 'minute');
    const screenWidth = window.innerWidth;
    const x = (borderGap / 30) * fromNowToStart - screenWidth / 2;

    if (screenWidth < 700) {
      x - sidebarWidth;
    }

    ref.current.scrollTo(x, 0);
  }, [startDate, endDate, now]);

  useEffect(() => {
    const isAnyMobile = isMobile(navigator.userAgent).any;

    if (isAnyMobile || !ref.current) return;
    ref.current.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      if (isAnyMobile || !ref.current) return;
      ref.current.removeEventListener('wheel', handleWheel);
    };
  });

  if (!events.length || !startDate || !endDate) {
    return (
      <Wrapper>
        <Placeholder />
      </Wrapper>
    );
  }

  return (
    <Wrapper ref={ref}>
      <Background now={now} startDate={startDate} endDate={endDate} />
      <Feed events={events} startDate={startDate} />
    </Wrapper>
  );
};
