import clsx from 'clsx'
import { styles } from '~/constants'
import { Link, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { LabName } from '~/components/labName'
import { getIntroduction, Introduction } from '~/services/introduction'
import type { FC } from 'react'
import { getProfessorsList, getStudentsList } from '~/services/people'
import type { Professor, Student } from '~/services/people'

export const meta: MetaFunction = () => {
  return {
    title: '关于 | 设计人工智能实验室 Design A.I. Lab',
    description: '同济大学设计人工智能实验室',
  }
}

const studentSortFunction = (a: Student, b: Student) => {
  if (a.year < b.year) return -1
  else if (a.year > b.year) return 1

  return a.name.localeCompare(b.name, 'zh') // compare name with pinyin
}
const professorSortFunction = (a: Professor, b: Professor) => {
  if (a.order < b.order) return -1
  else if (a.order > b.order) return 1
  return 0
}

export const loader: LoaderFunction = async () => {
  const introduction = await getIntroduction()
  let professors = await getProfessorsList()
  const students = await getStudentsList()

  professors = professors.sort(professorSortFunction)

  const currentMasterStudents = students
    .filter(
      (student) => student.type === 'master' && student.graduated === false,
    )
    .sort(studentSortFunction)
  const currentPhdStudents = students
    .filter((student) => student.type === 'phd' && student.graduated === false)
    .sort(studentSortFunction)
  const graduatedMasterStudents = students
    .filter(
      (student) => student.type === 'master' && student.graduated === true,
    )
    .sort(studentSortFunction)
  const graduatedPhdStudents = students
    .filter((student) => student.type === 'phd' && student.graduated === true)
    .sort(studentSortFunction)

  return {
    introduction,
    professors,
    students: {
      currentMasterStudents,
      currentPhdStudents,
      graduatedMasterStudents,
      graduatedPhdStudents,
    },
    staticUrl: process.env.STATIC_URL,
  }
}

const SectionTitle: FC<{ title: string }> = ({ title }) => (
  <div className="flex space-x-4 h-full w-full">
    <div className={clsx('text-white whitespace-nowrap', styles.h1)}>
      {title}
    </div>
    <div className="h-5 w-full flex-grow border-b border-white"></div>
  </div>
)

const PeopleList: FC<{
  title: string
  people: (Professor | Student)[]
  singleCol?: boolean
}> = ({ title, people, singleCol }) => {
  const { staticUrl } = useLoaderData<LoaderDataType>()

  return people.length > 0 ? (
    <div className="w-full flex flex-col mt-16">
      <SectionTitle title={title} />
      <div
        className={clsx(
          'grid md:grid-cols-4 text-white mt-8 gap-8',
          singleCol ? 'grid-cols-1' : 'grid-cols-2',
        )}
      >
        {people.map((person) => (
          <div className="flex flex-col space-y-4" key={person.name}>
            <img
              className="w-32 h-32"
              src={`${staticUrl}${person.avatar.url}`}
              alt={person.name}
            />
            <div className="text-md font-bold">{person.name}</div>
            <div className="text-sm text-gray-500">
              {'introduction' in person ? person.introduction : person.major}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <></>
  )
}

interface LoaderDataType {
  introduction: Introduction
  professors: Professor[]
  students: {
    currentPhdStudents: Student[]
    currentMasterStudents: Student[]
    graduatedPhdStudents: Student[]
    graduatedMasterStudents: Student[]
  }

  staticUrl: string
}

const About = () => {
  const {
    introduction,
    professors,
    students: {
      currentMasterStudents,
      currentPhdStudents,
      graduatedMasterStudents,
      graduatedPhdStudents,
    },
  } = useLoaderData<LoaderDataType>()

  return (
    <div className="flex-grow w-full flex flex-col max-w-5xl mx-auto">
      <div className="text-center text-white">
        <LabName name={introduction.name} name_en={introduction.name_en} />
      </div>

      <SectionTitle title="使命与愿景" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className={clsx(styles.p, 'text-white')}>
          {introduction.content}
        </div>

        <div className="md:col-span-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="w-full h-auto">
          <img
            className="w-full h-auto"
            src={introduction.vision_media}
            alt="vision"
          />
        </div>

        <div className="flex flex-col space-y-2 text-white md:col-span-2">
          {introduction.visions.map((item, idx) => (
            <div className="" key={idx}>
              <div className={clsx(styles.p, 'font-bold')}>{item.title}</div>
              <div className={clsx(styles.p)}>{item.content}</div>
            </div>
          ))}
        </div>
      </div>

      <PeopleList title="实验室负责人" people={professors} singleCol />
      <PeopleList title="博士研究生" people={currentPhdStudents} />
      <PeopleList title="硕士研究生" people={currentMasterStudents} />
      <PeopleList title="博士毕业生" people={graduatedPhdStudents} />
      <PeopleList title="硕士毕业生" people={graduatedMasterStudents} />
    </div>
  )
}

export default About
