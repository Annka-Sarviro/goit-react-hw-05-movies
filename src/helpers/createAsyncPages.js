import { lazy } from 'react';

const createAsyncPages = componentName => {
  return lazy(() => {
    return import(`../pages/${componentName}/${componentName}`).then(module => {
      return {
        ...module,
        default: module[componentName],
      };
    });
  });
};

export default createAsyncPages;
