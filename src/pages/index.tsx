import { styled } from 'linaria/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Article } from '../components/Article'

export default function Home(props:any) {
  console.log(props.topArticles);
  return (
    <>
    <Head>
      <title>Simple News</title>
    </Head>
    <div>
      <Article title="headlines" articles={props.topArticles} />
    </div>
    </>

  )
}

const Title = styled.h1`
  color: #f15f79;
`

export const getStaticProps = async () => {
  const pageSize = 10
  const topRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=${pageSize}&apiKey=d79d2a0eae9c4fd8a7a6b338b107350e`
  )
  const topJson = await topRes.json();
  const topArticles = topJson?.articles;

  return {
    props: {
      topArticles,
    }
  }
}