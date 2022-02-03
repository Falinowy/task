# Currency Calculator

You are given an application that should convert an amount of money in the selected currency to USD.

## Your task

The application includes a `currency-calculator` component which accepts the amount and the selected currency
and shows the amount converted to USD. A component named `currency-selector` is supposed to be used for choosing the original currency. **This component is currently empty, hence the application does not compile and does not work**.

It is your task to implement the `currency-selector` component's logic which implements the following requirements:
- Take the `currencies` array of the `Currency` objects as input.
- Display a `<select>` HTML tag which will render those currencies as its options (in the same order as they were passed). Use the `code` property as the value displayed to the user. Use the whole `Currency` object as the value of the `<select>` tag.
- When the user selects a `Currency` from the `<select>` tag, an `onSelect` event with the selected `Currency` object should be emitted.

When you implement that logic, tests from the `currency-calculator.component.spec.ts` suite should pass.
