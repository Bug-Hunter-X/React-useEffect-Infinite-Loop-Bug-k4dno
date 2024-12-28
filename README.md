# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React: creating an infinite loop within a `useEffect` hook.

## Problem
The `useEffect` hook in `bug.js` attempts to increment the `count` state variable within the effect itself. Because `count` changes, the effect is triggered again causing an endless cycle of updates.

## Solution
The `bugSolution.js` file resolves the problem by adding `count` as a dependency to the effect.  Now, the effect only runs once after the initial render, and will not trigger again due to changes in `count`.