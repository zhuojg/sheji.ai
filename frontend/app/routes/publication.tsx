import { styles } from '~/constants'
import { LoaderFunction, useLoaderData, MetaFunction } from 'remix'
import type { ReactElement } from 'react'
import clsx from 'clsx'
import {
  getPapersList,
  getReportsList,
  getBooksList,
  getReadingsList,
  getPodcastsList,
  Podcast,
} from '~/services/publication'
import type { Paper, Report, Book, Reading } from '~/services/publication'
import { renderLinks } from '~/utils/render'

export const meta: MetaFunction = () => {
  return {
    title: '出版 | 设计人工智能实验室 Design A.I. Lab',
    description: '同济大学设计人工智能实验室',
  }
}

interface InfoListProps<T> {
  title: string
  data: T[]
  renderItem: (item: T) => ReactElement
}

const InfoList: <T>(p: InfoListProps<T>) => ReactElement = ({
  title,
  data,
  renderItem,
}) => {
  return (
    <div className="w-full flex flex-col text-white">
      <div className={clsx(styles.h1)}>{title}</div>

      <div className="w-full flex flex-col space-y-8 mt-8">
        {data &&
          data.map((item, idx) => (
            <div key={idx} className="w-full">
              {renderItem(item)}
            </div>
          ))}
      </div>
    </div>
  )
}

export const loader: LoaderFunction = async () => {
  const papers = await getPapersList()
  const reports = (await getReportsList()).sort(
    (a, b) => parseInt(b.year) - parseInt(a.year),
  )
  const books = await getBooksList()
  const readings = (await getReadingsList()).sort()
  const podcasts = await getPodcastsList()

  return {
    papers,
    reports,
    books,
    readings,
    podcasts,
    staticUrl: process.env.STATIC_URL,
  }
}

interface LoaderDataType {
  papers: Paper[]
  reports: Report[]
  books: Book[]
  readings: Reading[]
  podcasts: Podcast[]
  staticUrl: string
}

const Publication = () => {
  const { papers, reports, books, readings, podcasts, staticUrl } =
    useLoaderData<LoaderDataType>()

  return (
    <div className="flex-grow w-full flex flex-col max-w-5xl mx-auto space-y-16">
      <InfoList
        title="论文｜Papers"
        data={papers}
        renderItem={(item) => (
          <div className={clsx(styles.container, styles.containerPadding)}>
            <div className="text-white">
              <span className="font-bold container-text-sm">{item.author}</span>

              <span className="text-gray-300 container-text-sm">
                {item.reference}
              </span>
            </div>
            {renderLinks(item.link)}
          </div>
        )}
      />

      <InfoList
        title="设计人工智能报告 | Design and A.I. Report"
        data={reports}
        renderItem={(item) => (
          <div className={clsx(styles.container)}>
            <img
              className="w-full h-auto rounded-t-lg"
              src={`${staticUrl}${item.image.url}`}
              alt={item.id}
            />

            <div className={clsx(styles.containerPadding)}>
              <div className={clsx(styles.h1)}>
                <span>{item.year}</span>
                <span>{item.title}</span>
              </div>

              {renderLinks(item.link)}
            </div>
          </div>
        )}
      />

      <InfoList
        title="书 | Books"
        data={books}
        renderItem={(item) => (
          <div className={clsx(styles.container, styles.containerPadding)}>
            <div className="text-white">
              <div className="font-bold container-text-sm">{item.title}</div>

              <div className="text-gray-300 container-text-sm">
                {item.reference}
              </div>
            </div>
            {renderLinks(item.link)}
          </div>
        )}
      />

      <InfoList
        title="阅读 | Readings"
        data={readings}
        renderItem={(item) => (
          <a
            className={clsx(styles.link)}
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            {`- ${item.title}`}
          </a>
        )}
      />

      <InfoList
        title="播客 | Podcast"
        data={podcasts}
        renderItem={(item) => (
          <img
            className="w-48 h-auto cursor-pointer"
            src={`${staticUrl}${item.image.url}`}
            onClick={() => {
              window.open(item.link, '_blank')
            }}
            alt={item.link}
          />
        )}
      />
    </div>
  )
}

export default Publication
