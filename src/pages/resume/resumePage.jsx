import { motion } from "framer-motion"
import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { PageSliderBtn } from '../../components/pageSliderBtn/PageSliderBtn'
import { langTexts } from "../../lang.js"
import "./resumePage.css"

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
        <embed src={`../../../public/media/resume/currículo-${language}.pdf#toolbar=0`} type="application/pdf" width="100%" height="920px" />
        <PageSliderBtn text={langTexts[`${language}`].resume.pageSliderBtn} theme={theme} route={"contact"} />
      </motion.div>
    );
  }