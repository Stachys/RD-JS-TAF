module.exports = {
    spec: ['./api/**/*.spec.js'],
    reporter: 'mochawesome',
    'reporter-options': [
        'reportDir=reports/api_tests',
    ],
    timeout: 0,
};
