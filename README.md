# ASSIGNMENT-007

### 🌐 [Click Here To See The Demo](https://abrarulrhythm-assignment-07.netlify.app/)
<br>

<img width="1200" height="700" alt="Image" src="https://github.com/user-attachments/assets/1f256bbf-14a9-42d5-9398-b20d18be957f" />
<br>
<br>

#### ✅ Question 01: What is JSX, and why is it used?
**Answer:**

**JSX stands for JavaScript XML.**

It is a syntax extension for JavaScript that looks like HTML but is used inside JavaScript code.

**Why is JSX used?**
1. JSX allows UI elements to be written in a way that looks a lot like HTML.
2. This makes the code more readable and intuitive.
3. JavaScript embedded directly inside JSX using { }
4. JSX automatically escapes values before rendering them.
5. JSX is perfect for React’s component system.

#### ✅ Question 02: What is the difference between State and Props?
**Answer:**

**Props** <br>
**Definition:** Props are readable input that is passed from a parent to a child component. <br>
**Purpose:** Used to pass data to a component. <br>
**Mutable?**  No, it is immutable. A component cannot change its own props. <br>
Similar to function parameters. 

**State** <br>
**Definition:** State is a component's own local data, which is managed within that component. <br>
**Purpose:** Data changes over time. E.g. user input, API data, toggle values. State is used to store data. <br>
**Mutable?:** The data in State is mutable. A component can update its own state with setState or useState. <br>
Similar to variables declared inside a function, but React keeps track of them across renders.

#### ✅ Question 03: What is the useState hook, and how does it work?
**Answer:** useState is a React Hook that allows adding state to functional elements. Re renders component when state changes. Does not merge automatically. If objects or arrays are stored, they need to be spread out when updating. Can hold any type of data like: number, string, boolean, array, object, even another component.

**How does useState work?**
1. useState(initialValue) is called inside a component.
2. This returns an array with two elements:
- The current state value.
- A function to update that state.

#### ✅ Question 04: How can you share state between components in React?
**Answer:**

**1. Lift State Up** <br>
- Put the state in the closest common parent component.
- Pass state down as props and updater functions as needed. <br>

**or** <br>

State can be shared in React by pushing state up to a parent, using the Context API, or with a state management library like Redux.

#### ✅ Question 05: How is event handling done in React?
**Answer:** React’s event handling is very similar to DOM event handling, but with a few differences: <br>
**CamelCase naming:** Instead of onclick, onClick should be used. <br>
**Pass function reference:** Do not call the function directly, it is passed as a function.