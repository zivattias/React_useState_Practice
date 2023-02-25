import { useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import * as consts from './consts'



// Click won't work!
// export default function FunnyImg(props) {

//     let currImgUrl = consts.IMG1_URL

//     const handleSwitchImgClick = () => {

//         if (currImgUrl === consts.IMG1_URL) {
//             currImgUrl = consts.IMG2_URL
//         } else {
//             currImgUrl = consts.IMG1_URL
//         }
//     }
    
//     return(

//         <Stack gap={5} className="col-md-5 mx-auto">

//                 <Image 
//                     src={currImgUrl}
//                     rounded fluid/>

//                 <Button onClick={handleSwitchImgClick}>Switch Picture</Button>

//         </Stack>
//     )
// }


export default function FunnyImg(props) {

    console.log("Rendering FunnyImg component")

    const [currImgUrl, setCurrImgUrl] = useState(consts.IMG1_URL)


    const handleSwitchImgClick = () => {

        if (currImgUrl === consts.IMG1_URL) {
            setCurrImgUrl(consts.IMG2_URL)
        } else {
            setCurrImgUrl(consts.IMG1_URL)
        }
    }
    
    return(

        <Stack gap={5} className="col-md-5 mx-auto">

                <Image 
                    src={currImgUrl}
                    rounded fluid/>

                <Button onClick={handleSwitchImgClick}>Switch Picture</Button>

        </Stack>
    )
}