import * as React from 'react';

export const useId = () => React.useMemo(() => `r:${Math.random().toString().substring(2, 7)}`, []);