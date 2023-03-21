import "./resumePage.css"
import { langTexts } from "../../lang.js"
import { useOutletContext } from "react-router-dom"
import { PageSliderBtn } from '../../components/pageSliderBtn/PageSliderBtn'
import { motion } from "framer-motion"
import { useEffect } from "react"

export function ResumePage() {
  const {language, setLanguage} = useOutletContext()
  const {theme, setTheme} = useOutletContext()
  const {setPageTitle} = useOutletContext()

  useEffect(() => {
      setPageTitle("Resume")
  }, [])
  
    return (
      <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{
            duration: 1,
            delay: 0.2
        }}
        className="resume-container">
        <h1 className="h1">{langTexts[`${language}`].resume.header}</h1>
        <img src={`media/resume/curriculo-${language}.png`} className="resume" />
        <PageSliderBtn text={langTexts[`${language}`].resume.pageSliderBtn} theme={theme} route={"contact"} />
      </motion.div>
    );
  }