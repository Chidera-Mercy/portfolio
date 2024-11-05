import { 
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
    Button
} from "../../styles/Global.styled"

import { 
    TechStackCard,
    ProjectImageContainer,
    ProjectImage
} from "../../styles/MyProject.styled"
import { FaGithub } from "react-icons/fa"
import { fadeInLeftVariant, fadeInRightVariant } from "../../utils/Variants"
import { motion } from "framer-motion"

const Project = ({data}) => {
  return (
    <FlexContainer 
        direction={data.reverse ? 'row-reverse' : false}
        fullWidthChild
    >
        <motion.div
            variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
        >
            <FlexContainer align="center" gap="1rem" txtalign="left">
                <Heading as="h3" size="h3" bottom="1rem">
                    {data.project_name}
                </Heading>
                <a href={data.project_url} target="_blank" rel="noopener noreferrer">
                    <IconContainer color="blue" size="2rem">
                        <FaGithub />
                    </IconContainer>
                </a>
            </FlexContainer>

            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem" align="left">
                    {data.tech_stack.map((stack) => (
                        <TechStackCard>{stack}</TechStackCard>
                    ))}
                </FlexContainer>
            </PaddingContainer>

            <ParaText top="1.5rem" bottom="2rem">
                {data.project_desc}
            </ParaText>

            {data.website && (
                <Button 
                    onClick={() => window.open(data.website, "_blank", "noopener,noreferrer")}
                >
                    Visit Website
                </Button>
            )}
        </motion.div>

        <ProjectImageContainer 
            as={motion.div}
            variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
            initial="hidden"
            whileInView="visible"
            justify={data.reverse ? "flex-start" : "flex-end"}
        >
            <ProjectImage src={data.project_img} alt={data.project_name} />
        </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project