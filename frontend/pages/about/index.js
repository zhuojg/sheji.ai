import Head from 'next/head'
import { fetchSinglePageData, fetchListData } from '../../services'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

export async function getServerSideProps(context) {
  const aboutData = await fetchSinglePageData('about')
  const professorData = await fetchListData('professors')
  const studentData = await fetchListData('students')

  if (
    (aboutData && aboutData.error) ||
    (professorData && professorData.error) ||
    (studentData && studentData.error)
  ) {
    return {
      props: {
        error: true,
      },
    }
  }

  const sortFunction = (a, b) => {
    if (a.year < b.year) return -1
    else if (a.year > b.year) return 1

    return a.name.localeCompare(b.name, 'zh') // compare name with pinyin
  }

  const currentMasterStudent = studentData
    .filter(
      (student) => student.type === 'master' && student.graduated === false,
    )
    .sort(sortFunction)
  const currentPhdStudent = studentData
    .filter((student) => student.type === 'phd' && student.graduated === false)
    .sort(sortFunction)
  const graduatedMasterStudent = studentData
    .filter(
      (student) => student.type === 'master' && student.graduated === true,
    )
    .sort(sortFunction)
  const graduatedPhdStudent = studentData
    .filter((student) => student.type === 'phd' && student.graduated === true)
    .sort(sortFunction)

  return {
    props: {
      about: aboutData,
      professors: professorData,
      students: {
        currentMasterStudent,
        currentPhdStudent,
        graduatedMasterStudent,
        graduatedPhdStudent,
      },
    },
  }
}

const AboutPage = (props) => {
  const studentTypeMap = {
    currentPhdStudent: '博士研究生',
    currentMasterStudent: '硕士研究生',
    graduatedMasterStudent: '硕士毕业生',
    graduatedPhdStudent: '博士毕业生',
  }

  return (
    <div className="w-full h-full py-20">
      <Head>
        <title>关于我们</title>
      </Head>

      <div className="px-4 mx-auto max-w-prose prose prose-sm md:prose-md text-white flex flex-col space-y-8 divide-y divide-opacity-50">
        <div>
          <ReactMarkdown>{props.about.introduction}</ReactMarkdown>
        </div>

        <div className="pt-8">
          <h1>实验室成员</h1>
          <h2>实验室负责人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {props.professors.map((professor) => (
              <div className="" key={professor.name}>
                <img
                  className="w-32 h-32 object-cover object-center"
                  src={`${process.env.NEXT_PUBLIC_URL}${professor.avatar.url}`}
                  alt={professor.name}
                />
                <span className="text-lg font-bold">{professor.name}</span>
                <br />
                <span className="text-md text-gray-500">{professor.introduction}</span>
              </div>
            ))}
          </div>

          <div className="">
            {Object.keys(studentTypeMap).map(
              (studentType, index) =>
                props.students[studentType].length > 0 && (
                  <div key={index} className="">
                    <h2>{studentTypeMap[studentType]}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {props.students[studentType].map((student, idx) => (
                        <div key={idx} className="mx-auto">
                          <img
                            className="w-32 h-32 object-cover object-center"
                            src={`${process.env.NEXT_PUBLIC_URL}${student.avatar.url}`}
                            alt={student.name}
                          />
                          <span className="text-md font-bold">
                            {student.name}
                          </span>
                          <br />
                          <span className="text-md text-gray-500">{student.major}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>

        <div className="pt-8">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{props.about.social}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
