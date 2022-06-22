import { styled } from 'linaria/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header: React.FC = () => {
  return (
    <Container>
      <Heading>
        <HeaderImage>
          <Image src="/img/headerIcon/menu.png" alt='menu icon' width={35} height={35} />
        </HeaderImage>
        <Title>
          <Link href='/'>
            <TitleLink>
              <span>Simple</span>
              <span>News</span>
            </TitleLink>
          </Link>
        </Title>
      </Heading>
    </Container>
  )
}

const Container = styled.section`
  padding: 10px;
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  color: #fff;
  z-index: 1;
  background-color: rgb(31, 31, 31);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`

const Heading = styled.header`
  height: 53px;
  vertical-align: middle;
  white-space: nowrap;
  align-items: center;
  display: flex;
`

const HeaderImage = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 50px;
  width: 50px;
  flex: 0 0 auto;
  border-radius: 50%;
  padding: 14px;
  &:hover {
    background: rgba(77, 77, 77, 0.6);
  }
`

const Title = styled.h1`
  letter-spacing: 1px;
  text-align: left;
`

const TitleLink = styled.a`
  display: block;
  span:nth-child(1) {
    font-weight: 250;
  }
  span:nth-child(2) {
    font-weight: 100;
  }
`
