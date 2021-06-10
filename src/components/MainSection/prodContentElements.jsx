import styled from 'styled-components'

export const ProductContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  padding: 25px 0 60px 0;
`

export const ProdContainHeading = styled.h1`
  font-family: 'Fredoka One', sans-serif;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #843434;
  color: #843434;
`

export const Products = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`

export const ProdBgBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 370px;
  height: 460px;
  margin: 20px 10px;
  background: #843434;
  transition: all 0.2s ease-out;

  &:hover {
    transform: translate(10px, -10px);
    transition: all 0.2s ease-out;
  }
`

export const ProdItem = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 370px;
  height: 460px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.2s ease-out;
  background: #fff;
  cursor: pointer;

  &:hover {
    transform: translate(-10px,10px);
    transition: all 0.2s ease-out;
  }
`

export const ProdImg = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.2s ease-out;
`

export const ProdInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  
`

export const ProdName = styled.h2`
  margin-bottom: 5px;
  font-weight: 900;
  font-family: 'Shadows Into Light', sans-serif;
  letter-spacing: 1.2px;
`

export const ProdDesc = styled.p`
  margin-bottom: 10px;
  resize: vertical;
`

export const ProdPrice = styled.h3`
  text-align: left;
  font-size: 1.3rem;
`

// export const ProdButton = styled.button`
//   padding: 5px 15px;
//   border-radius: 15px;
//   font-size: 1.15rem;
//   cursor: pointer;
//   border: none;
//   outline: none;
//   background: #8f8f8f;
//   transition: all 0.3s ease-out;
  
//   &:hover {
//     background: #843434;
//     color: #fff;
//     transition: all 0.3s ease-out;
//   }
// `