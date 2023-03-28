import React from 'react'
import { formatNumber } from '../../../helpers/calculator.helper'
import { Button } from '../../../styles/Form'
import { SubHeading, Text } from '../../../styles/Typography'
import { EmailData, EmailDataContainer, OtherDataContainer, OutputData, OutputDataItem, OutputsContainer } from '../styles'
import { IoPeopleOutline } from 'react-icons/io5'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { FaRegHandshake } from 'react-icons/fa'
import { BsChatDots } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { Flex } from '../../../styles/Shared'

interface PropsType {
    outputData: any
}

const OutputView: React.FC<PropsType> = ({ outputData }) => {


    const redirectUser = () => {
        window.location.href = 'https://www.oneshot.ai/'
    }

    return (
        <OutputsContainer>
            <SubHeading>Result</SubHeading>
            <hr style={{ marginTop: 20 }} />
            <OutputData>
                <EmailDataContainer>
                    <EmailData>
                        <Text className='email-large'>{formatNumber(outputData.emails)}</Text>
                        <Flex style={{ gap: 10 }}>
                            <AiOutlineMail size={20} color={'#fff'} />
                            <Text className='op-data-label'>Emails</Text>
                        </Flex>
                    </EmailData>
                </EmailDataContainer>
                <OtherDataContainer>
                    <OutputDataItem>
                        <Flex style={{ gap: 10 }}>
                            <IoPeopleOutline size={20} color={'#fff'} />
                            <Text className='op-data-label'>Customers: </Text>
                        </Flex>
                        <Text className='op-data-val'>{formatNumber(outputData.customers)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <Flex style={{ gap: 10 }}>
                            <MdOutlineBusinessCenter size={20} color={'#fff'} />
                            <Text className='op-data-label'>Opportunities: </Text>
                        </Flex>
                        <Text className='op-data-val'>{formatNumber(outputData.opportunities)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <Flex style={{ gap: 10 }}>
                            <FaRegHandshake size={20} color={'#fff'} />
                            <Text className='op-data-label'>Meetings: </Text>
                        </Flex>
                        <Text className='op-data-val'>{formatNumber(outputData.meetings)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <Flex style={{ gap: 10 }}>
                            <MdOutlineLeaderboard size={20} color={'#fff'} />
                            <Text className='op-data-label'>Leads: </Text>
                        </Flex>
                        <Text className='op-data-val'>{formatNumber(outputData.leads)}</Text>
                    </OutputDataItem>
                </OtherDataContainer>
            </OutputData>
            {outputData.emails > 100 ? (
                <Text style={{ margin: '40px 0 30px 0' }}>
                    Researching and personalising all these {formatNumber(outputData.emails)} emails is humanly impossible
                    and hence why you should try out <a href='https://www.oneshot.ai/'>oneshot.ai</a> to make it fully AI
                    driven automated prospecting.
                </Text>
            ) : (
                <Text style={{ margin: '40px 0 30px 0' }}>
                    You can also try out <a href='https://www.oneshot.ai/'>oneshot.ai</a> to make it fully AI
                    driven automated prospecting.
                </Text>
            )}
            <Button style={{ marginLeft: 'auto' }} onClick={redirectUser}><BsChatDots size={16} /> Chat With Us</Button>
        </OutputsContainer>
    )
}

export default OutputView