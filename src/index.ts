import process from 'node:process'

import dotenv from 'dotenv'
import { fetchGitHubContributions, fetchGitHubLanguages } from './libs/github'
import { generateReadme } from './libs/markdown'
import { fetchNpmDownloads } from './libs/npm'
import { generateLanguagesChart, generateStatsChart } from './libs/svg'

dotenv.config()

async function main() {
  try {
    const gitHubContributions = await fetchGitHubContributions()
    const npmDownloads = await fetchNpmDownloads()
    await generateStatsChart({ gitHub: gitHubContributions, npm: npmDownloads })
    const gitHubLanguages = await fetchGitHubLanguages()
    await generateLanguagesChart(gitHubLanguages)
    await generateReadme()
  }
  catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
