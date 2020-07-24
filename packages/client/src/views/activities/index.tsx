// import React from 'react';
// import { Seo } from 'src/components/seo';
// import { useTranslation } from 'react-i18next';
// import { Timetable } from 'src/components/timetable';

// export const Activities = React.memo(() => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <Seo
//         title={t('activities.page_title', {
//           defaultValue: 'Activities - Refined Itsukara.link',
//         })}
//         description={t('activities.description', {
//           defaultValue: 'Recent activities of Nijisanji streamers',
//         })}
//       />

//       <Timetable />
//     </>
//   );
// });

import React from 'react';
import { Seo } from 'src/components/seo';
import { useTranslation } from 'react-i18next';
import { TimetableContainer } from 'src/containers/timetable-container';
import { SidebarContainer } from 'src/containers/sidebar-container';
import { StoreContext } from 'redux-react-hook';
import { configureStore } from 'src/redux/store';

const store = configureStore();

export const Activities = React.memo(() => {
  const { t } = useTranslation();

  return (
    <>
      <Seo
        title={t('activities.page_title', {
          defaultValue: 'Activities - Refined Itsukara.link',
        })}
        description={t('activities.description', {
          defaultValue: 'Recent activities of Nijisanji streamers',
        })}
      />

      <StoreContext.Provider value={store}>
        <SidebarContainer />
        <TimetableContainer />
      </StoreContext.Provider>
    </>
  );
});
