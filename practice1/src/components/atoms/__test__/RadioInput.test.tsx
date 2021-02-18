import * as React from 'react';

import { render, RenderResult, fireEvent } from '@testing-library/react';
import { RadioInput } from '../RadioInput';

let radioInputElements: RenderResult;

type RadioInputSetting = React.ComponentProps<typeof RadioInput>;

describe('Check <RadioInput /> Component...', () => {
    const radioInputElem = (setting: RadioInputSetting) => {
        return React.createElement(() => <RadioInput {...setting} />);
    };
    const onChangeValue = jest.fn();
    const initTestProps = {
        title: 'Test Title',
        selectedValue: '1',
        onChangeValue: onChangeValue
    }

    // テストする前の事前準備
    beforeEach(() => {
        radioInputElements = render(radioInputElem(initTestProps));
    });

    it('1. check title', () => {
        expect(radioInputElements.getByText('Test Title')).toBeInTheDocument();
        expect(radioInputElements.getAllByRole('radio')).toHaveLength(3);

        // change title in props
        const testProps = {
            ...initTestProps,
            title: 'Fuga Radio Button'
        }
        radioInputElements = render(radioInputElem(testProps));
        expect(radioInputElements.getByText('Fuga Radio Button')).toBeInTheDocument();
        expect(onChangeValue).toHaveBeenCalledTimes(0);
    });

    it('2. click center radio button', () => {
        fireEvent.click(radioInputElements.getAllByRole('radio')[1], {
        });

        // before Eachが毎回呼ばれるので、ここのタイトルは Fuga Radio Buttonになってない
        expect(radioInputElements.getByText('Test Title')).toBeInTheDocument();
        expect(onChangeValue).toHaveBeenCalledTimes(1);
        expect(radioInputElements.getByRole('radio', {checked: true}).getAttribute('value')).toBe('radio2')
    });
});