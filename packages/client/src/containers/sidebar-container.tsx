import React from 'react';
import { useEvents } from 'src/hooks/use-events';
import { Sidebar } from 'src/components/sidebar';

export const SidebarContainer = () => {
  const { events } = useEvents();
  return <Sidebar events={events} />;
};
