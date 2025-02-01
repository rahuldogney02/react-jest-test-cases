"# react-jest-test-cases" 

how to run specific test files.

what is watch Mode.

how to run the failed test case.

how to run all test cased.

how to quit watch mode.
Watch Usage
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press q to quit watch mode.
 › Press i to run failing tests interactively.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.


how to filter test files for run. > p
Pattern Mode Usage
 › Press Esc to exit pattern mode.
 › Press Enter to filter by a filenames regex pattern.

 pattern › jest-

 Pattern matches 3 files
 › src/App.test.js
 › src/jest-app.test.js
 › src/sum.test.js


how to filter test case. > t
Pattern Mode Usage
 › Press Esc to exit pattern mode.
 › Press Enter to filter by a tests regex pattern.

 pattern › input

 Pattern matches 1 test from cached test suites
 › Testing of Input box


 Describe : When we have lot's of test cases i.e shorting, api call, event etc. Identification is simple by using describe() , some time i want to test/skip  api related test cases by using grouping with the help of describe()

 
fireEvent : define state and use with on change event, Import component in test file.


## Code Example

Here is a simple example of how to create a store using Zustand:

```javascript
import React from 'react';
import create from 'zustand';

// Create a store
const useStore = create((set) => ({
    prevData: "",
    color: "black",
    toggle: () => set((state) => ({
        prevData: state.prevData ? '' : "My data is updated",
        color: state.color === "black" ? "red" : "black"
    }))
}));

const MyComponent = () => {
    const { prevData, color, toggle } = useStore();

    return (
        <div>
            <button onClick={toggle}>Update Data</button>
            <h1 style={{ color: color }}>{prevData}</h1>
        </div>
    );
}

export default MyComponent;

```

File and folder naming convention
> .file_name.test.js
> .file_name.spec.js / ts
> .file_name.spec.jsx / tsx
> __tests__

Before and After hooks

before is running just before the running of jest test cases 
beforeAll > means if i run all 10 test cases it's runing only 1 time.
beforeEach > if you have 10 test cases its running 10 time.

after 
afterAll > once all test cases is ran 1 time
afterEach > running 10 time after runing test cases.

why we use : Some of the case need to clean DB, env setup, or creating constant.