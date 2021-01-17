import reducer from './reducer';

import { setRestaurants, updateRestaurant, setRestaurantsName } from './actions';
import { categoriesInfo, regionsInfo, restaurantsInfo } from '../fixtures/fixtures';

describe('reducer', () => {
  describe('setRestaurants', () => {
    const initialState = {
      categories: [],
      regions: [],
    };

    it('초기 "Restaurant" 정보를 불러온다.', () => {
      const { categories } = reducer({
        initialState,
      }, setRestaurants({ type: 'categories', info: categoriesInfo }));

      expect(categories).not.toHaveLength(0);

      const { regions } = reducer({
        initialState,
      }, setRestaurants({ type: 'regions', info: regionsInfo }));

      expect(regions).not.toHaveLength(0);
    });
  });

  describe('updateRestaurant', () => {
    const initialState = {
      category: null,
      region: null,
    };

    it('change region and category id', () => {
      const { category } = reducer({
        initialState,
      }, updateRestaurant({ type: 'category', id: 1 }));

      expect(category).toBe(1);

      const { region } = reducer({
        initialState,
      }, updateRestaurant({ type: 'region', id: 2 }));

      expect(region).toBe(2);
    });
  });

  describe('setRestaurantsName', () => {
    const initialState = {
      restaurants: [],
    };

    it('load Restaurants name', () => {
      const { restaurants } = reducer({
        initialState,
      }, setRestaurantsName(restaurantsInfo));

      expect(restaurants).toHaveLength(3);
    });
  });

  describe('with not existed action', () => {
    it('returns previous state', () => {
      const { categories } = reducer(
        {
          categories: [
            { id: 1, name: '한식' },
          ],
        },
        { type: 'undefined', payload: {} },
      );

      expect(categories).toHaveLength(1);
    });

    it("doesn't returns previous state", () => {
      const { categories } = reducer(
        undefined,
        { type: 'undefined', payload: {} },
      );

      expect(categories).toHaveLength(0);
    });
  });
});