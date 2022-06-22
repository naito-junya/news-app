import { styled } from 'linaria/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Article } from '../components/Article'
import { Nav } from '../components/Nav'

export default function Home(props: any) {
  return (
    <>
      <Head>
        <title>Simple News</title>
      </Head>
      <Contents>
        <Wrap>
          <Navi>
            <Nav />
          </Navi>
        </Wrap>
        <Blank />
        <Main>
          <Article title='headlines' articles={props.topArticles} />
        </Main>
      </Contents>
    </>
  )
}

const Contents = styled.div`
  display: flex;
  margin: 0 auto;
`
const Wrap = styled.div`
  flex: 2;
  position: fixed;
  @media (max-width: 800px) {
    display: none;
  }
`

const Navi = styled.nav``

const Blank = styled.div`
flex: 2;
`

const Main = styled.div`
  flex: 6;
`

export const getStaticProps = async () => {
  const pageSize = 10
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=d79d2a0eae9c4fd8a7a6b338b107350e`,
  )
  const topJson = await topRes.json()
  const topArticles = topJson?.articles

  return {
    props: {
      topArticles,
    },
    revalidate: 60 * 10,
  }
}
