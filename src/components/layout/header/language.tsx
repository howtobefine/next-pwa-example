import { useState } from "react"
import { IconButton, Menu, MenuItem } from "@mui/material"
import LanguageIcon from "@mui/icons-material/Language"
import { useTranslation } from "react-i18next"
import { languageList } from "@/global"
import useStore from "@/store"

const Language = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { language, changeLanguage } = useStore()
  const { i18n } = useTranslation()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang)
    i18n.changeLanguage(lang)
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <LanguageIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {languageList.map(item => (
          <MenuItem
            key={item.value}
            onClick={() => handleLanguageChange(item.value)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default Language
