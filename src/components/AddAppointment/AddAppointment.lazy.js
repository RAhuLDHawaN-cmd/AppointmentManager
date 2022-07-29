import React, { lazy, Suspense } from 'react';

const LazyAddAppointment = lazy(() => import('./AddAppointment'));

const AddAppointment = props => (
  <Suspense fallback={null}>
    <LazyAddAppointment {...props} />
  </Suspense>
);

export default AddAppointment;
