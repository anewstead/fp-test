import React from "react";
import styled from "styled-components";
import { device } from "../../helpers";
import Image from "../image";
import Lockup from "../lockup";
import PropTypes from "prop-types";
import { gridGutter } from "../../helpers";
import Cost from "../cost";

const RocketCardWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  margin-left: ${gridGutter};

  @media ${device.laptop} {
    flex-basis: calc(33.3% - ${gridGutter});
  }
`;

const RocketCardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
`;

const ImagContainer = styled.div`
  background-color: #b3c7cc;
  position: relative;
  margin-top: auto;

  img {
    height: 200px;
    width: auto;
    min-width: 100%;
    display: block;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  display: flex;
  padding: 20px;
  background-color: #f6f7f7;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

function RocketCard(props) {
  return (
    <RocketCardWrapper>
      <RocketCardContainer>
        <ImagContainer>
          <Image url={props.image} />
        </ImagContainer>
        <Content>
          <Lockup text={props.description} tag="h3" title={props.title} />
          <Cost text={props.cost} />
        </Content>
        {/* Youtube Link ? */}
      </RocketCardContainer>
    </RocketCardWrapper>
  );
}

RocketCard.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  cost: PropTypes.string,
};

export default RocketCard;
