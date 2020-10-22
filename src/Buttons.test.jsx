import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Buttons from './Buttons';

describe('Buttons', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickSelect = jest.fn();

  it('버튼을 클릭하면 handleClickSelect 함수가 출력됩니다.', () => {
    const { getByText } = render((
      <Buttons
        buttonNames={[{ id: 1, name: '서울' }]}
        onClickSelect={handleClickSelect}
      />));

    const button = getByText('서울');

    expect(handleClickSelect).not.toBeCalled();
    fireEvent.click(button);
    expect(handleClickSelect).toBeCalled();
  });

  context('selectButton이 주어지면', () => {
    const buttonNames = [{ id: 1, name: '서울' }, { id: 2, name: '대전' }];
    const selectedButton = '서울';

    it('해당 버튼 문구에 "(V)"가 추가됩니다.', () => {
      const { container } = render((
        <Buttons
          buttonNames={buttonNames}
          selectedButton={selectedButton}
        />));

      expect(container).toHaveTextContent(`${selectedButton}(V)`);
    });
  });

  context('buttonNames가 주어지면,', () => {
    const buttonNames = [{ id: 1, name: '서울' }, { id: 2, name: '대전' }];

    it('ButtonsNameList의 이름을 가진 버튼들이 출력됩니다.', () => {
      const { container } = render(<Buttons buttonNames={buttonNames} />);

      buttonNames.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });
});
