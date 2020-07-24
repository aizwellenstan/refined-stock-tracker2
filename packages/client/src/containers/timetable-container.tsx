import React from 'react';
import { Timetable } from 'src/components/timetable';
import { useEvents } from 'src/hooks/use-events';

export const TimetableContainer = () => {
  const { events } = useEvents();
  return <Timetable events={events} />;
};
