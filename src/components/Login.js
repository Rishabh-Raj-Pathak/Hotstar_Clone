import styled from "styled-components";

const Login = (props) => {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg"/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique deserunt temporibus non, qui consectetur  .</Description>
                    <CTALogoTwo src="/images/cta-logo-two.png"/>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    );
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;

    
`;

const BgImage = styled.div`
background-image: url("/images/login-background.jpg");
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;
   
`;

const CTA = styled.div`
max-width: 650px;
width: 100%;
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;

`;

const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
margin-left: auto;
margin-right: auto;

`;

const SignUp = styled.a`
font-weight: bold;
font-size: 20px;
color: #f9f9f9;
background-color: #0063e5;
padding: 10px 0px;
margin-left: 25px;
margin-right: 25px;
margin-bottom: 0px;
letter-spacing: 1.5px;
border-radius: 5px;

&:hover{
    background-color: #0483ee;
}
`;

const Description = styled.p`
color: hsla(0, 0%, 95.3%, 1);
    font-size: 15px;
    margin-left: 25px;
    margin-right: 25px;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
margin-left: 25px;
margin-right: 25px;
margin-bottom: 30px;
margin-top: 10px;
`;


export default Login;