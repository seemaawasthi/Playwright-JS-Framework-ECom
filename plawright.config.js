import { defineConfig } from "@playwright/test";    
export default defineConfig({

testDir:'./tests',
timeout:30000,
retries:1,
reporter:[['html'],['list']],
use:{


    headless :true,
    baseurl:process.env.BASE_URL,
    screenshot:'only-on-failure',
    video:'retain-on-failure'
}

});