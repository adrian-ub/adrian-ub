import { CONFIG } from '../config'
import { getPosts } from './rss'

import { compileTemplate } from './template'

export async function generateReadme() {
  const posts = await getPosts()
  return compileTemplate(
    'README.md',
    'README.md',
    {
      LANGUAGE_CHART_WIDTH:
        CONFIG.charts.languages.width
        + CONFIG.charts.languages.legend.width
        + CONFIG.charts.languages.legend.margin.x
        + CONFIG.charts.languages.wrapperBorder * 2,
      POSTS: posts,
    },
    '.',
  )
}
