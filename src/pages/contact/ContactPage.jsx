import { langTexts } from "../../lang";
import { useOutletContext } from "react-router-dom";
import './contactPage.css'
import { PageSliderBtn } from '../../components/pageSliderBtn/PageSliderBtn'
import { useState } from "react"
import { motion } from "framer-motion"
import { useEffect } from "react";

export function ContactPage() {
  const {language, setLanguage} = useOutletContext()
  const {theme, setTheme} = useOutletContext()
  const {setPageTitle} = useOutletContext()
  const [ email,  setEmail ] = useState("")
  const [ content,  setContent ] = useState("")

  useEffect(() => {
      setPageTitle("Contact")
  }, [])

    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}  
        transition={{
            duration: 0.5,
            delay: 0.05
        }}
        className="contact-container">
        <h1 className="h1">{ langTexts[`${language}`].contact.header }</h1>
        <p className="p">{langTexts[`${language}`].contact.body[0]}<b>caio.b.valiati@gmail.com</b></p>
        <form   
          action="https://formspree.io/f/meqwzval"
          method="POST"
        >
          <input type="email"  
            placeholder={"E-mail"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea type="text" 
            placeholder={langTexts[`${language}`].contact.body[2]}
            onChange={(e) => setContent(e.target.value)}
          />
          <motion.input id="interactable" whileTap={{ scale: 0.95 }} type="submit" className="submit-btn" value={langTexts[`${language}`].contact.body[1]} />
        </form>

        <PageSliderBtn text={langTexts[`${language}`].contact.pageSliderBtn} theme={theme} route='' /> 
      </motion.div>
    );
  }