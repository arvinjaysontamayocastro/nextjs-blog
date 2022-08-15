import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const logosDirectory = path.join(process.cwd(), 'public/logos')

export function getHighDefLogosData() {
  // Get file names under /logos
  const fileNames = fs.readdirSync(logosDirectory)
  const allLogosData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.svg$/, '')

    // Read markdown file as string
    const fullPath = path.join(logosDirectory, fileName)
    // const fileContents = fs.readFileSync(fullPath, 'utf8')

    // // Use gray-matter to parse the logo metadata section
    // const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id
      // ,
      // ...(matterResult.data as { date: string; title: string })
    }
  })
  // Sort logos by date
  return allLogosData
}

export function getAllLogoIds() {
  const fileNames = fs.readdirSync(logosDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.svg$/, '')
      }
    }
  })
}

export async function getLogoData(id: string) {
  const fullPath = path.join(logosDirectory, `${id}.svg`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // // Use gray-matter to parse the logo metadata section
  // const matterResult = matter(fileContents)

  // // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content)
  // const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id
  }
}
