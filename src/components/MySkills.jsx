import { 
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText
} from "../styles/Global.styled"

import { motion } from "framer-motion"

import { SkillsCardContainer, SkillsCard } from "../styles/MySkills.styled.jsx"
import { Skills } from "../utils/Data"

import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants.js"

const MySkills = () => {
  return (
    <PaddingContainer
        id="Skills"
        top="10%"
        bottom="10%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
    >
        <FlexContainer 
            gap="2rem"
            responsiveFlex 
            responsiveDirection="column-reverse"
            fullWidthChild
        >
            <SkillsCardContainer
                as={motion.div}
                variants={fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                {Skills.map((skill) => (
                    <SkillsCard>
                        <IconContainer size="5rem" color="blue">
                            <skill.icon />
                        </IconContainer>
                        <Heading as="h4" size="h4">
                            {skill.tech}
                        </Heading>
                    </SkillsCard>
                ))}
            </SkillsCardContainer>

            <motion.div
                variants={fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Heading as="h4" size="h4">
                    MY SKILLS
                </Heading>
                <Heading as="h2" size="h2" top="0.5rem">
                    What <BlueText>I can do</BlueText>
                </Heading>

                <ParaText top="2rem" bottom="1.5rem">
                    I create interactive, user-centered, data-driven applications. My projects reflect a focus on usability and functionality, from building responsive web apps to developing data analytics dashboards that inform decision-making. I am eager to bring my technical skills and enthusiasm for innovative solutions to a software engineering internship.
                </ParaText>
                <ParaText top="2rem" bottom="1.5rem">
                    I'm interested in connecting with others who are eager to share knowledge and build impactful projects. Working together, we can learn from each other and develop solutions that make a difference.
                </ParaText>
            </motion.div>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills