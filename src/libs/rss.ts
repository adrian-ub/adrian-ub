import process from 'node:process'
import Parser from 'rss-parser'

export async function getPosts() {
  const parser = new Parser()

  const rss = await parser.parseURL(process.env.RSS_URL!)

  const posts = rss.items.slice(0, 5)

  return posts.reduce((acc, cur) => {
    return `${acc}\n- [${cur.title}](${cur.link})`
  }, '')
}
