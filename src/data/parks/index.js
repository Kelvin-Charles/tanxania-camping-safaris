import { northernParks } from './northern';
import { southernParks } from './southern';
import { westernParks } from './western';
import { coastalParks } from './coastal';

export const allParks = {
  ...northernParks,
  ...southernParks,
  ...westernParks,
  ...coastalParks
};

console.log('All parks loaded:', Object.keys(allParks)); 