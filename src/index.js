const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents, theme }) {
  const buttons = {
    '.btn': {
      display: 'inline-block',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#212529',
      textAlign: 'center',
      textDecoration: 'none',
      verticalAlign: 'middle',
      cursor: 'pointer',
      userSelect: 'none',
      backgroundColor: '#0000',
      border: '1px solid #0000',
      padding: '.375rem .75rem',
      fontSize: '1rem',
      borderRadius: '.25rem',
      transition:
        'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    },
    '.btn-primary': {
      color: '#fff',
      backgroundColor: '#0d6efd',
      borderColor: '#0d6efd',
    },
    '.btn-secondary': {
      color: '#fff',
      backgroundColor: '#6c757d',
      borderColor: '#6c757d',
    },
    '.btn-success': {
      color: '#fff',
      backgroundColor: '#198754',
      borderColor: '#198754',
    },
    '.btn-danger': {
      color: '#fff',
      backgroundColor: '#dc3545',
      borderColor: '#dc3545',
    },
  };

  addComponents(buttons);
});
