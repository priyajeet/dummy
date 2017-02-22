import foo from './foo';

// Removing something = 1 OR
// removing const whatever = false ? 1 : 2 OR
// rewire from .babelrc
// all prevent the issue
export default function bar(something = 1) {
    const whatever = false ? 1 : 2;
    return foo();
};