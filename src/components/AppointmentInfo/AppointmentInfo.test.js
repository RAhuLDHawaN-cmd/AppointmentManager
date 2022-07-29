import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppointmentInfo from './AppointmentInfo';

describe('<AppointmentInfo />', () => {
  test('it should mount', () => {
    render(<AppointmentInfo />);
    
    const appointmentInfo = screen.getByTestId('AppointmentInfo');

    expect(appointmentInfo).toBeInTheDocument();
  });
});