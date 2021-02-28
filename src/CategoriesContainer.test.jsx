import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import category from '../fixture/category';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      categories: category,
      selectedCategoryId: 1,
    }));
  });

  it('카테고리들 중 버튼을 하나 누르면 dispatch를 실행한다.', () => {
    const { getByText } = render(<CategoriesContainer />);
    fireEvent.click(getByText('중식'));
    expect(dispatch).toBeCalled();
  });
});