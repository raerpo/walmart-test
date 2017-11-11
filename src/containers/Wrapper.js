import styled from 'styled-components';

const Wrapper = styled.section`
  background: #F6F6F6;
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  h2 {
    color: #929292;
    width: 100%;
    text-transform: uppercase;
    margin-bottom: .5rem;
  }
  .graphs-container {
    width: 100vw;
    display: flex;
    min-height: 100vh;
  }
  .graph-inner-container {
    margin: 0px 1em;
    &.main-graph {
      flex: 1;
      .graph-wrapper {
        position: sticky;
        top: 1em;
      }
    }
  }
  .graph-wrapper {
    border-radius: .3em;
    border: 1px solid #e4e4e4;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    margin-bottom: 1em;
    background-color: #ffffff;
    & > h3 {
      padding: 1em;
      margin: 0px;
      background-color: #f5f5f5;
      border-radius: .3em .3em 0px 0px;
      color: #545454;
      font-size: .9em;
    }
    .graph {
      padding: 1em;
    }
  }
  .descrip-cosito {
    color: #929292;
    margin-bottom: 2rem;
    width: 100%;
  }
`;

export default Wrapper;