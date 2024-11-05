import { useState } from "react";
import emailjs from "emailjs-com";
import { 
    PaddingContainer,
    Heading,
    BlueText,
    FlexContainer,
    Button
} from "../styles/Global.styled"

import { ContactForm, FormLabel, FormInput } from "../styles/Footer.styled"
import { motion } from "framer-motion"
import { fadeInBottomVariant } from "../utils/Variants"

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs
          .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAILJS_USER_ID
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              alert("Message sent successfully!");
            },
            (err) => {
              console.log("FAILED...", err);
              alert("Failed to send message. Please try again.");
            }
          )
          .finally(() => {
            setFormData({
                name: "",
                email: "",
                message: ""
            })
          })
        
    };

  return (
    <PaddingContainer
        id="Contact"
        top="5%"
        bottom="10%"
    >
        <Heading 
            as={motion.h4}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible" 
            size="h4" 
            align="center"
        >
            MY CONTACT
        </Heading>
        <Heading
            as={motion.h2}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            size="h2"
            align="center"
            top="0.5rem"
        >
            Contact <BlueText>Me Here</BlueText>
        </Heading>

        <PaddingContainer top="3rem">
            <FlexContainer justify="center">
                <ContactForm
                    as={motion.form}
                    variants={fadeInBottomVariant}
                    initial="hidden"
                    whileInView="visible"
                    onSubmit={handleSubmit}
                >
                    <PaddingContainer bottom="2rem">
                        <FormLabel>Name:</FormLabel>
                        <FormInput
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </PaddingContainer>

                    <PaddingContainer bottom="2rem">
                        <FormLabel>Email:</FormLabel>
                        <FormInput
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </PaddingContainer>

                    <PaddingContainer bottom="2rem">
                        <FormLabel>Message:</FormLabel>
                        <FormInput
                            as="textarea"
                            name="message"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </PaddingContainer>

                    <FlexContainer justify="center" responsiveFlex>
                        <Button onClick={handleSubmit}>Send Message</Button>
                    </FlexContainer>
                </ContactForm>
            </FlexContainer>
        </PaddingContainer>
    </PaddingContainer>
  )
}

export default Footer