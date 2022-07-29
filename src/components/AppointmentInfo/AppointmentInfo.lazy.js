import React, { lazy, Suspense } from 'react';

const LazyAppointmentInfo = lazy(() => import('./AppointmentInfo'));

const AppointmentInfo = props => (
  <Suspense fallback={null}>
    <LazyAppointmentInfo {...props} />
  </Suspense>
);

export default AppointmentInfo;
