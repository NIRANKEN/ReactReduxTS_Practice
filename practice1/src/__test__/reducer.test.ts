import snapshotDiff from 'snapshot-diff';
import { Reducer, State, initialState } from '../reducer';
import { TextInputActions } from '../actions';

const states : State[] = [
    {
        inputValue: 'Hello World!',
        selectedValue: '',
        clickCount: 0
    }, 
    {
        inputValue: '',
        selectedValue: '2',
        clickCount: 0
    },
    {
        inputValue: '',
        selectedValue: '',
        clickCount: 5
    }
]

describe('Reducer Test', () => {
    // updateTextInputValueのアクションが呼ばれた際にinputValueが変更されることのテストを行う。(Reducerに書いた、該当Actionの場合のreturn値が正しいかどうかを確認する)
    it('should update inputValue', () => {
        expect(
            snapshotDiff(
                initialState,
                Reducer(initialState, TextInputActions.updateTextInputValue('Hello World!'))
            )
        ).toMatchInlineSnapshot(`
                "Snapshot Diff:
                - First value
                + Second value
                
                  Object {
                    \\"clickCount\\": 0,
                -   \\"inputValue\\": \\"\\",
                +   \\"inputValue\\": \\"Hello World!\\",
                    \\"selectedValue\\": \\"\\",
                  }"
        `);
    });

    it('should update selectedValue', () => {
        expect(
            snapshotDiff(
                initialState,
                Reducer(initialState, TextInputActions.updateSelectedValue('2'))
            )
        ).toMatchInlineSnapshot(`
                "Snapshot Diff:
                - First value
                + Second value
                
                  Object {
                    \\"clickCount\\": 0,
                    \\"inputValue\\": \\"\\",
                -   \\"selectedValue\\": \\"\\",
                +   \\"selectedValue\\": \\"2\\",
                  }"
        `);
    });

    it('should update clickCount', () => {
        expect(
            snapshotDiff(
                initialState,
                Reducer(initialState, TextInputActions.updateClickCount())
            )
        ).toMatchInlineSnapshot(`
                "Snapshot Diff:
                - First value
                + Second value
                
                  Object {
                -   \\"clickCount\\": 0,
                +   \\"clickCount\\": 1,
                    \\"inputValue\\": \\"\\",
                    \\"selectedValue\\": \\"\\",
                  }"
        `);
    });
})