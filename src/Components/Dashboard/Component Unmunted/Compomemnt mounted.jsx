import React from 'react';
import { render, unmountComponentAtNode } from '@testing-library/react';
import TestComponent from './TestComponent';

describe('Component Mounting & Unmounting', () => {
  let consoleLogMock: jest.SpyInstance;

  beforeAll(() => {
    consoleLogMock = jest.spyOn(console, 'log');
  });

  afterAll(() => {
    consoleLogMock.mockRestore();
  });

  it('should log "Mounted" when the component mounts and "Unmounted" when it unmounts', () => {
    const { unmount } = render(<TestComponent />);

    // Check that "Mounted" is logged when the component mounts
    expect(consoleLogMock).toHaveBeenCalledWith('Mounted');

    // Unmount the component and check for "Unmounted"
    unmount();
    expect(consoleLogMock).toHaveBeenCalledWith('Unmounted');
  });

  it('should only call the cleanup function when the component unmounts', () => {
    const { unmount } = render(<TestComponent />);
    
    // Initially, "Mounted" should be logged
    expect(consoleLogMock).toHaveBeenCalledWith('Mounted');
    
    // Unmount the component, check "Unmounted" is logged
    unmount();
    expect(consoleLogMock).toHaveBeenCalledWith('Unmounted');
    
    // Ensure no additional logs are made after unmounting
    expect(consoleLogMock).toHaveBeenCalledTimes(2);
  });
});
