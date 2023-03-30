import { IoPeopleOutline } from "react-icons/io5"
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { FaRegHandshake } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

export const getIcon = (key: string, size: any = 20, color: string = '#000') => {
    if (key.toLowerCase().includes('customers')) return <IoPeopleOutline size={size} color={color} />
    else if (key.toLowerCase().includes('opportunities')) return <MdOutlineBusinessCenter size={size} color={color} />
    else if (key.toLowerCase().includes('meetings')) return <FaRegHandshake size={size} color={color} />
    else if (key.toLowerCase().includes('leads')) return <MdOutlineLeaderboard size={size} color={color} />
    return <AiOutlineMail size={size} color={color} />
}
