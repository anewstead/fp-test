import React from "react";
import styled from "styled-components";
import { device } from "../../helpers";
import Image from "../image";
import Lockup from "../lockup";
import PropTypes from "prop-types";
import { gridGutter } from "../../helpers";
import Link, { LinkWrap } from "../link";

const LaunchCardWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  margin-left: ${gridGutter};

  @media ${device.laptop} {
    flex-basis: calc(33.3% - ${gridGutter});
  }
`;

const LaunchCardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
`;

const ImagContainer = styled.div`
  padding: 40px 20px;
  background-color: #b3c7cc;
  position: relative;
  margin-top: auto;

  img {
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: #f6f7f7;
  flex: 1;

  ${LinkWrap} {
    margin-top: 0.6em;
  }
`;

function LaunchCard(props) {
  let link = <></>;
  if (props.link) {
    link = <Link url={props.link} title={"View on youtube"} />;
  }
  return (
    <LaunchCardWrapper data-testid="launch-card">
      <LaunchCardContainer>
        <ImagContainer>
          <Image url={props.image} />
        </ImagContainer>
        <Content>
          <Lockup text={props.description} tag="h3" title={props.title} />
          {link}
        </Content>
      </LaunchCardContainer>
    </LaunchCardWrapper>
  );
}

LaunchCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default LaunchCard;
