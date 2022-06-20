import { styled } from 'linaria/react'
import Image from 'next/image'
import Link from 'next/link'

const TOPICS = [
  {
    icon: '01',
    path: '/',
    title: 'Top stories',
  },
  {
    icon: '02',
    path: '/topics/business',
    title: 'Business',
  },
  {
    icon: '03',
    path: '/topics/technology',
    title: 'Technology',
  },
  {
    icon: '04',
    path: '/topics/entertainment',
    title: 'Entertainment',
  },
  {
    icon: '05',
    path: '/topics/sports',
    title: 'Sports',
  },
]

export const Nav: React.FC = () => {
  return (
    <Container>
      <Lists>
        {TOPICS.map((topic, index) => {
          return (
            <List key={index}>
              <Link href={`${topic.path}`}>
                <a>
                  <div>
                    <Image
                      src={`/img/navIcons/${topic.icon}.png`}
                      alt={`${topic.title} icon`}
                      loading='eager'
                      width={33}
                      height={33}
                      priority
                    />
                  </div>
                  <span>{topic.title}</span>
                </a>
              </Link>
            </List>
          )
        })}
      </Lists>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  padding: 20px 0 0 20px;
`

const Lists = styled.ul``
const List = styled.li`
  margin-bottom: 15px;
  opacity: 0.7;
  color: rgb(196, 196, 196);

  &:hover {
    opacity: 1;
  }

  a {
    display: flex;
    div {
      margin-left: 15px;
      line-height: 36px;
    }
    span {
      margin-left: 15px;
      line-height: 36px;
    }
  }
`
