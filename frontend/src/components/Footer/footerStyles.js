import styled from 'styled-components';
import { color, above } from '../../util';

export const Footer = styled.footer`
  width: 100%;
  background: ${color.black};
  color: ${color.gray};
`;

export const Content = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'sitemap links'
    'subscribe subscribe'
    'follow follow';
  margin-top: 1rem;
  margin-bottom: 2rem;

  ${above.med`
    width: calc(100% - 170px);
    padding: 0;
    grid-template-columns: auto auto 35% 25%;
    grid-template-areas: 'sitemap links subscribe follow';
    grid-gap: 30px;
  `};
`;

const Column = styled.div`
  font-size: 1.4rem;
  line-height: 2.6rem;

  ul {
    padding: 0;
    margin: 0;

    li:hover {
      color: ${color.yellow};
    }
  }
`;

export const SiteMapColumn = styled(Column)`
  grid-area: sitemap;
`;

export const LinksColumn = styled(Column)`
  grid-area: links;
`;

export const SubscribeColumn = styled(Column)`
  grid-area: subscribe;
`;

export const FollowColumn = styled(Column)`
  grid-area: follow;

  ul {
    width: 100px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    li {
      border: 1px solid ${color.gray};
      border-radius: 20px;
      width: 28px;
      height: 28px;
      line-height: 25px;
      color: ${color.gray};
      text-align: center;
      font-size: 1.2rem;

      &:hover {
        border: 1px solid ${color.yellow};
        color: ${color.yellow};
      }
    }
  }
`;

export const h4 = styled.h4`
  color: ${color.white};
  font-size: 2rem;
`;
