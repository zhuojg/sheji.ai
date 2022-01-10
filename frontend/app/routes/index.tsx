import clsx from 'clsx'
import { Link, LoaderFunction, MetaFunction } from 'remix'
import { useLoaderData } from 'remix'
import { LinkButton } from '~/components/button'
import type { Introduction } from '~/services/introduction'
import { getIntroduction } from '~/services/introduction'
import { getProjectsList, Project } from '~/services/projects'
import { styles } from '~/constants'
import { LabName } from '~/components/labName'
import { Deco } from '~/components/deco'

export const meta: MetaFunction = () => {
  return {
    title: '设计人工智能实验室 Design A.I. Lab',
    description: '同济大学设计人工智能实验室',
  }
}

export const loader: LoaderFunction = async () => {
  const introduction = await getIntroduction()
  const projects = await getProjectsList()
  return { introduction, projects }
}

const Index = () => {
  const { introduction, projects } =
    useLoaderData<{ introduction: Introduction; projects: Project[] }>()
  const { project_themes: projectThemes } = introduction

  const groupedProjects = projects.reduce<Record<string, Project[]>>(
    (storage, project) => {
      const group = project.category
      storage[group] = storage[group] || []
      storage[group].push(project)

      return storage
    },
    {},
  )

  return (
    <div className={clsx('max-w-3xl mx-auto')}>
      {/** introduction part */}
      <div className="text-center text-white">
        <LabName name={introduction.name} name_en={introduction.name_en} />
        <div className={clsx(styles.p, 'text-left')}>
          {introduction.content}
        </div>

        <div className="flex justify-end mt-4">
          <LinkButton to="/about" text="关于实验室" />
        </div>
      </div>

      {/** projects part */}
      <div className={clsx('flex flex-col space-y-8', 'text-white', 'mt-16')}>
        {Object.keys(projectThemes).map((groupName) =>
          groupName in groupedProjects ? (
            <div key={groupName} className="flex flex-col md:flex-row">
              <div className="flex-0 w-36 mr-16 mb-4 md:mb-0">
                <img
                  src={`${projectThemes[groupName].media}`}
                  alt={groupName}
                />
              </div>
              <div className="flex-grow">
                <div
                  className={clsx(
                    'flex flex-col md:flex-row md:divide-x-2',
                    styles.h2,
                  )}
                >
                  <span className="md:pr-2">
                    {projectThemes[groupName].name}
                  </span>
                  <span className="md:pl-2">
                    {projectThemes[groupName].name_en}
                  </span>
                </div>
                <div className="flex flex-col space-y-4 mt-4">
                  {groupedProjects[groupName].map((project: Project) => (
                    <div className="" key={project.id}>
                      {project.external_link ? (
                        <a
                          className={clsx(styles.link)}
                          href={project.external_link}
                          target="_blank"
                        >{`- ${project.name}`}</a>
                      ) : (
                        <Link
                          className={clsx(styles.link)}
                          to={`/research/${project.id}`}
                        >
                          {`- ${project.name}`}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div key={groupName} />
          ),
        )}
      </div>
    </div>
  )
}

export default Index
