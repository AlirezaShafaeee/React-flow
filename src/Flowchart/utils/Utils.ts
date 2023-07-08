import { IconType } from "react-icons";
import { BsCheck, BsExclamationLg, BsFillPauseFill } from "react-icons/bs";

export const NodeIcon = (iconColor: string): [string, IconType] => {
    if (iconColor === 'danger')
        return ['#FB1A43', BsExclamationLg];
    else if (iconColor === 'success')
        return ['#00A053', BsCheck];
    else
        return ['#ED6011', BsFillPauseFill]
}