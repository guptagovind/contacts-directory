import prodConfig from './prod/config';
import stageConfig from './stage/config';
import devConfig from './dev/config';

let config;
if (process.env.NODE_ENV === 'production') {
  config = prodConfig;
} else if (process.env.NODE_ENV === 'stagging') {
  config = stageConfig;
} else if (process.env.NODE_ENV === 'development') {
  config = devConfig;
}

export default config;
