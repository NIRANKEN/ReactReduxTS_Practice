import { Action, ActionCreator } from 'typescript-fsa';
import { TextInputActions } from '../actions';

describe('Test for Actions created by ActionCreator', () => {
    it('test updateTextInputValue', () => {
        const updateTextInputValueAction : Action<string> = TextInputActions.updateTextInputValue('Hello World!');
        expect(updateTextInputValueAction.payload).toBe('Hello World!');
        expect(updateTextInputValueAction.type).toBe('ACTIONS_UPDATE_TEXT_INPUT_VALUE');
    });

    it('test updateTextInputValue', () => {
        const updateSelectedValueAction : Action<string> = TextInputActions.updateSelectedValue('2');
        expect(updateSelectedValueAction.payload).toBe('2');
        expect(updateSelectedValueAction.type).toBe('ACTION_UPDATE_SELECTED_VALUE');
    });

    it('test updateTextInputValue', () => {
        const updateClickCountAction : Action<void> = TextInputActions.updateClickCount();
        expect(updateClickCountAction.payload).toBe(undefined);
        expect(updateClickCountAction.type).toBe('ACTION_UPDATE_CLICK_COUNT');
    });

    it('test updateCheckBoxState', () => {
        const updateCheckBoxState : Action<boolean> = TextInputActions.updateCheckBoxState(true);
        expect(updateCheckBoxState.payload).toBe(true);
        expect(updateCheckBoxState.type).toBe('ACTION_UPDATE_CHECKBOX');
    });
});