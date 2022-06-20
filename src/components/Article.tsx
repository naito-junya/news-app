import { styled } from 'linaria/lib/react'
import moment from 'moment'
import Props from './types'

export const Article: React.FC<Props> = ({ articles, title }) => {
  return (
    <Section>
      <Heading>
        <h2>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</h2>
      </Heading>
      {articles?.map((article, index) => {
        const time = moment(article.publishedAt || moment.now())
          .fromNow()
          .slice(0, 1)
        return (
          <a href={article.url} key={index}>
            <ArticleMain>
              <Title>
                <p>{article.title}</p>
                <Time>
                  {time}
                  時間前
                </Time>
              </Title>
              {article.urlToImage && (
                <ArticleImage key={index} src={article.urlToImage} alt={`${article.title} image`} />
              )}
            </ArticleMain>
          </a>
        )
      })}
    </Section>
  )
}

const Section = styled.section`
  margin: 10px auto;
`

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`

const ArticleMain = styled.article`
  display: flex;
  border: 1.2px solid rgba(135, 135, 135, 0.5);
  margin: 0 20px 20px 20px;
  padding: 15px;
  border-radius: 10px;
`

const Title = styled.div`
  flex: 4;
  margin-right: 5px;
`

const Time = styled.p`
  opacity: 0.5;
`

const ArticleImage = styled.img`
  object-fit: contain;
  width: 100%;
  border-radius: 5px;
  max-height: 100px;
  margin-right: 10px;
  flex: 1;
`
