/* eslint-disable */

const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const tailwindButtons = require('../src/index');

describe('Buttons plugin', () => {
  it('generates all the button classes', () => {
    const inputPath = path.resolve(`${__dirname}/stubs/input.css`);
    const input = fs.readFileSync(inputPath, 'utf8');

    return postcss(
      tailwindcss({
        corePlugins: false,
        plugins: [tailwindButtons],
      }),
    )
      .process(input, { from: inputPath })
      .then((result) => {
        const expected = fs.readFileSync(
          path.resolve(`${__dirname}/stubs/output.css`),
          'utf8',
        );

        expect(result.css).toBe(expected);
      });
  });
});
