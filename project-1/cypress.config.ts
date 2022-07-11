import {defineConfig} from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        excludeSpecPattern:
            [
                "**/1-getting-started",
                "**/2-advanced-examples"
            ],
        baseUrl: "http://localhost:3000",
        viewportWidth: 1920,
        viewportHeight:1080
    },
});
