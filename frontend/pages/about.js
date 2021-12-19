import { PageTitle } from '@/components/pageTitle'
import { fetchListData, fetchSinglePageData } from '@/services/index'
import Head from 'next/head'
import Image from 'next/image'

const sortFunction = (a, b) => {
  if (a.year < b.year) return -1
  else if (a.year > b.year) return 1

  return a.name.localeCompare(b.name, 'zh') // compare name with pinyin
}

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

const ProfessorInfo = ({ title, professors }) => (
  <>
    <div className="flex space-x-8 h-full section-start">
      <div className="section-title text-white whitespace-nowrap">{title}</div>
      <div className="h-4 w-full flex-grow border-b-2 border-white"></div>
    </div>
    <div className="grid-1-lg-4 text-white">
      {professors.map((professor) => (
        <div
          className="flex flex-col space-y-4 lg:space-y-8"
          key={professor.name}
        >
          <div className="w-32 h-32 block relative">
            <Image
              className="object-cover object-center rounded-full"
              src={`${process.env.NEXT_PUBLIC_URL}${professor.avatar.url}`}
              alt={professor.name}
              layout="fill"
            />
          </div>
          <div className="text-md font-bold">{professor.name}</div>
          <div className="text-sm text-gray-500">{professor.introduction}</div>
        </div>
      ))}
    </div>
  </>
)

const StudentInfo = ({ title, students }) => (
  <>
    <div className="flex space-x-8 h-full section-start">
      <div className="section-title text-white whitespace-nowrap">{title}</div>
      <div className="h-4 w-full flex-grow border-b-2 border-white"></div>
    </div>
    <div className="grid-2-lg-4 text-white">
      {students.map((student) => (
        <div className="" key={student.name}>
          <div className="w-32 h-32 block relative">
            <Image
              className="object-cover object-center rounded-full"
              src={`${process.env.NEXT_PUBLIC_URL}${student.avatar.url}`}
              alt={student.name}
              layout="fill"
            />
          </div>
          <div className="text-md font-bold mt-8">{student.name}</div>
          <div className="text-sm text-gray-500 mt-4">{student.major}</div>
        </div>
      ))}
    </div>
  </>
)

const AboutPage = (props) => {
  const studentTypeMap = {
    currentPhdStudent: '博士研究生',
    currentMasterStudent: '硕士研究生',
    graduatedMasterStudent: '硕士毕业生',
    graduatedPhdStudent: '博士毕业生',
  }

  return (
    <div className="flex-grow w-full h-full relative flex flex-col">
      <Head>
        <title>关于我们</title>
      </Head>

      <PageTitle title="实验室成员" subtitle="About Us" />

      <ProfessorInfo title="实验室负责人" professors={props.professors} />

      {Object.keys(studentTypeMap).map(
        (studentType, index) =>
          props.students[studentType].length > 0 && (
            <div key={index} className="">
              <StudentInfo
                title={studentTypeMap[studentType]}
                students={props.students[studentType]}
              />
            </div>
          ),
      )}
    </div>
  )
}

export default AboutPage
