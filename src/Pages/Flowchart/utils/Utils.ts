import { IconType } from "react-icons";
import { BsCheck, BsDash, BsExclamation } from "react-icons/bs";

export const NodeIcon = (iconColor: string): [string, IconType] => {
    if (iconColor === 'danger')
        return ['#FB1A43', BsDash];
    else if (iconColor === 'success')
        return ['#00A053', BsCheck];
    else
        return ['#ED6011', BsExclamation]
}