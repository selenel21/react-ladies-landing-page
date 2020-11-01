import styled from "styled-components";

export const Podcast = styled.div`
  width: 100%;
  height: 100%;
`;

export const PodcastContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 85px;
`;

export const PodcastGreeting = styled.div`
  display: flex;
  text-align: left;
  justify-content: end;
  margin-left: 5rem;
`;

export const Title = styled.h1`
  font-family: Cocogoose;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Text = styled.span`
  font-family: Cocogoose;
  font-style: normal;
  font-weight: 250;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  width: 500px;
  height: 50px;
`;

export const PodcastMessage = styled.div`
  display: flex;
  text-align: left;
  justify-content: end;
  margin-left: 5rem;
`;

export const H2 = styled.h2`
  font-family: Cocogoose;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 85px;
  color: ${({ theme }) => theme.colors.pink};
  position: absolute;
  width: 500px;
  height: 40px;
`;
export const P = styled.p`
  font-family: Cocogoose;
  font-style: normal;
  font-weight: 250;
  font-size: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  width: 369px;
  height: 85px;
`;

export const PodcastImage = styled.img`
  position: absolute;
  width: 600px;
  height: 604px;
`;

export const PodcastButton = styled.div`
  position: absolute;
  width: 367px;
  height: 44px;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${({ primary }) =>
    primary ? theme.colors.violet : theme.colors.white};
  color: ${({ primary }) =>
    primary ? theme.colors.white : theme.colors.violet};

  display: flex;
  font-family: Cocogoose;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  margin: 1em;
  padding: 12px 35px 20px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  cursor: pointer;
  width: 370px;
  height: 48px;
`;