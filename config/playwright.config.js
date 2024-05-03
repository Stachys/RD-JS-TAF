import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    outputDir: '../reports/ui_pw_tests_report',

    // Look for test files in the "tests" directory, relative to this configuration file.
    testDir: '../ui_pw',

    testMatch: 'ui_pw/*/*spec.js',

    // Run all tests in parallel.
    fullyParallel: false,

    // Reporter to use
    reporter: [['html', { open: 'on-failure', outputFolder: '../reports/ui_pw_tests_results' }]],

    use: {
        headless: false,
        screenshot: 'only-on-failure',
    },

    // Configure projects for major browsers.
    projects: [
        { name: 'setup', testMatch: 'setup.spec.js' },
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                storageState: '.auth/user.json',
            },
            dependencies: ['setup'],
        },
        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari'],
                storageState: '.auth/user.json',
            },
            dependencies: ['setup'],
        },
    ],
});
