import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"

import { motion } from "framer-motion"

//import global styles
import { 
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer
} from "../styles/Global.styled"

//import showcase styles
import { 
    ShowcaseParticleContainer, 
    ShowcaseImageCard,
    Particle
} from "../styles/Showcase.styled.jsx"

//import asset
import ShowcaseImg from '../assets/showcase-img.png'
import BackgroundImg from '../assets/particle.png'

import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants"

const Showcase = () => {
    return (
        <PaddingContainer
            id= "Home"
            left= "3%"
            right= "10%"
            top= "18%"
            bottom= "10%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
            responsiveTop="8rem"
        >
            <FlexContainer align="center"  txtalign="left" fullWidthChild>
                {/* -- left-content -- */}
                <motion.div 
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    <Heading as='h4' size="h4">Hello!</Heading>
                    <Heading
                        as="h1"
                        size="h1"
                        top="0.5rem"
                        bottom="1rem"
                    >
                        I'm <BlueText>Mercy </BlueText>
                    </Heading>
                    <Heading as="h3" size="h3">
                        I'm an <BlueText>Aspiring Software Engineer</BlueText>
                    </Heading>

                    <ParaText as="p" top="2rem" bottom="4rem">
                        A Junior Computer Science student dedicated to developing innovative software solutions
                    </ParaText>

                    {/* --social-icons-- */}
                    <FlexContainer gap="20px" responsiveFlex>
                        <a href="https://www.linkedin.com/in/chidera-mercy/" target="_blank" rel="noopener noreferrer">
                            <IconContainer color="white" size="1.5rem">
                                <BsLinkedin />
                            </IconContainer>
                        </a>

                        <a href="https://github.com/Chidera-Mercy/" target="_blank" rel="noopener noreferrer">
                            <IconContainer color="white" size="1.5rem">
                                <BsGithub />
                            </IconContainer>
                        </a>
                        <a href="https://x.com/curlzandcode" target="_blank" rel="noopener noreferrer">
                            <IconContainer color="white" size="1.5rem">
                                <BsTwitter />
                            </IconContainer>
                        </a>
                        <a href="https://www.instagram.com/derraa_a/" target="_blank" rel="noopener noreferrer">
                            <IconContainer color="white" size="1.5rem">
                                <BsInstagram />
                            </IconContainer>
                        </a>
                    </FlexContainer>
                </motion.div>

                {/* --rignt-content-- */}
                <FlexContainer 
                    justify="flex-end"
                    as={motion.div}
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"
                >


                    <ShowcaseParticleContainer>
                        <ShowcaseImageCard>
                            <img src={ShowcaseImg} alt="showcase" />
                        </ShowcaseImageCard>
                        <Particle
                            as={motion.img}
                            animate={{
                                x: [0, 100, 0],
                                rotate: 360,
                                scale: [1, 0.5, 1]
                            }}
                            transition={{
                                duration: 20,
                                repeat:Infinity
                            }}
                            src={BackgroundImg}
                            alt="particle"
                            top="-80px"
                            left="20px"
                            rotate="60deg"
                        />
                        <Particle
                            as={motion.img}
                            animate={{
                                y: [0, 100, 0],
                                rotate: 360,
                                scale: [1, 0.8, 1]
                            }}
                            transition={{
                                duration: 18,
                                repeat:Infinity
                            }}
                            src={BackgroundImg}
                            alt="particle"
                            top="50px"
                            right="-70px"
                            rotate="0deg"
                        />
                        <Particle
                            as={motion.img}
                            animate={{
                                y: [0, -100, 0],
                                rotate: 360,
                                scale: [1, 0.9, 1]
                            }}
                            transition={{
                                duration: 15,
                                repeat:Infinity
                            }}
                            src={BackgroundImg}
                            alt="particle"
                            bottom="10px"
                            left="-70px"
                            rotate="50deg"
                        />
                    </ShowcaseParticleContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default Showcase