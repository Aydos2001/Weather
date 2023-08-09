import { Image } from "@chakra-ui/react"
import icon1 from "../assets/images/cloud-5.png"
import icon2 from "../assets/images/cloud-17.png"
import icon3 from "../assets/images/cloud-f-6.png"
import icon4 from "../assets/images/cloud-rain-9.png"
import icon5 from "../assets/images/sun-2.png"
import icon6 from "../assets/images/sun-rain-16.png"
import icon7 from "../assets/images/moon-11.png"
import icon8 from "../assets/images/moon-star-4.png"
import icon9 from "../assets/images/cloud-sun-10.png"
import icon10 from "../assets/images/cloud-wind-8.png"
import icon11 from "../assets/images/cloud-wind-13.png"
import icon12 from "../assets/images/cloud-f-rain-7.png"

const IconImage = ({iconData}) => {
    
    let icon = undefined
    switch (iconData) {
        case "04d":
            icon = icon1
            break;
        case "04n":
            icon = icon1
            break;
        case "03d":
            icon = icon2
            break;
        case "03n":
            icon = icon2
            break;
        case "11d":
            icon = icon3
            break;
        case "11n":
            icon = icon12
            break;
        case "10n":
            icon = icon4
            break;
        case "9n":
            icon = icon4
            break
        case "01d":
            icon = icon5
            break;
        case "10d":
            icon = icon6
            break;
        case "9d":
            icon = icon6
            break;
        case "01n":
            icon = icon7
            break;
        case "02n":
            icon = icon8
            break;
        case "02d":
            icon = icon9
            break;
        case "13d":
            icon = icon10
            break;
        case "13n":
            icon = icon11
            break;
        case "50n":
            icon = icon11
            break;
        case "50d":
            icon = icon11
            break;
        
        
    }


  return (
    <Image src={icon}></Image>
  )
}

export default IconImage