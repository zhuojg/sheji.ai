import { PageTitle } from '@/components/pageTitle'
import { fetchListData } from '@/services/index'
import { renderLinks } from '@/utils/render'
import Head from 'next/head'

export async function getServerSideProps(context) {
  const paperInfo = await fetchListData('papers')
  const bookInfo = await fetchListData('books')
  const reportInfo = await fetchListData('reports')

  if (
    paperInfo &&
    paperInfo.error &&
    bookInfo &&
    bookInfo.error &&
    reportInfo &&
    reportInfo.error
  ) {
    return {
      props: {
        error: true,
      },
    }
  }

  return {
    props: {
      paperInfo,
      bookInfo,
      reportInfo,
    },
  }
}

const InfoList = ({ title, intro, data, renderItem }) => {
  return (
    <div className="w-full flex flex-col space-y-8 text-white">
      <div className="text-3xl">{title}</div>
      <div className="text-lg">{intro}</div>

      <div className="w-full flex flex-col space-y-8">
        {data &&
          data.map((item) => (
            <div key={item.id} className="w-full">
              {renderItem(item)}
            </div>
          ))}
      </div>
    </div>
  )
}

const InfoContainer = ({ children }) => {
  return <div className="w-full container px-4 py-8">{children}</div>
}

const PublicationPage = ({ paperInfo, reportInfo, bookInfo }) => {
  console.log(reportInfo)
  return (
    <div className="w-full h-full">
      <Head>
        <title>实验室出版物和论文</title>
      </Head>

      <PageTitle title="实验室出版物和论文" subtitle="Publications" />

      <div className="w-full mt-32 flex flex-col space-y-32">
        <InfoList
          title="出版物"
          intro="Lessons and learnings on developing design systems teams and processes"
          data={bookInfo}
          renderItem={(item) => (
            <InfoContainer>
              <div className="text-3xl font-bold">{item.title}</div>
              <div className="font-md font-bold mt-4">{item.reference}</div>
              {renderLinks(item.link)}
            </InfoContainer>
          )}
        />

        <InfoList
          title="论文"
          intro="Lessons and learnings on developing design systems teams and processes"
          data={paperInfo}
          renderItem={(item) => (
            <InfoContainer>
              <div className="text-white">
                <span className="font-bold">{item.author}</span>

                <span className="text-gray-300">{item.reference}</span>
              </div>

              {renderLinks(item.link)}
            </InfoContainer>
          )}
        />

        <InfoList
          title="报告"
          intro="Lessons and learnings on developing design systems teams and processes"
          data={reportInfo}
          renderItem={(item) => (
            <InfoContainer>
              <div className="text-3xl font-bold">
                <span>{item.year}</span> <span>{item.title}</span>
              </div>

              <div className="mt-4 font-bold text-lg">{item.author}</div>

              {renderLinks(item.link)}
            </InfoContainer>
          )}
        />
      </div>
    </div>
  )
}

export default PublicationPage
