import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  min-height: 100vh;
  box-sizing: border-box;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 1rem;
`

const MainTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
    </Wrapper>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default MainTemplate
