import { styled } from 'linaria/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Article } from '../../components/Article'
import { Nav } from '../../components/Nav'

const Contents = styled.div`
  display: flex;
  margin: 0 auto;
`
const Wrap = styled.div`
  flex: 2;
  position: fixed;
`
const Navi = styled.nav``
const Blank = styled.div`
  flex: 2;
`
const Main = styled.div`
  flex: 6;
  margin-right: 10%;
`

function Topic(props: any) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
        <title>Simple News - {props.title.toUpperCase()}</title>
      </Head>
      <Contents>
        <Wrap>
          <Navi>
            <Nav />
          </Navi>
        </Wrap>
        <Blank />
        <Main>
          <Article title={props.title} articles={props.topicArticles} />
        </Main>
      </Contents>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps = async({ params }: any) => {
  const topicRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&category=${params.id}&apiKey=d79d2a0eae9c4fd8a7a6b338b107350e`
  )
  const topicJson = await topicRes.json()
  const topicArticles = await topicJson.articles

  const title = params.id

  return {
    props: { topicArticles, title },
    revalidate: 60 * 10,
  }
}

export default Topic;
